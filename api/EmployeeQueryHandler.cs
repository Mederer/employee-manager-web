using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Collections.Generic;
using Microsoft.Azure.Cosmos.Fluent;

namespace EmployeeManager.Functions
{
    public static class EmployeeQueryHandler
    {
        [FunctionName("EmployeeQueryHandler")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "employees/{id?}")] HttpRequest req,
            ILogger log, string id)
        {
            CosmosClient cosmosClient = new CosmosClientBuilder(
                Environment.GetEnvironmentVariable("CosmosAccountEndpoint"),
                Environment.GetEnvironmentVariable("CosmosAccountKey")).WithSerializerOptions(new CosmosSerializationOptions { PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase }).Build();

            Container container = cosmosClient.GetContainer("EmployeeDB", "Employees");
            var feedIterator = container.GetItemQueryIterator<Employee>("SELECT * FROM c");

            if (!string.IsNullOrEmpty(id))
            {
                log.LogInformation($"Querying employee with id: {id}");
                var employee = await container.ReadItemAsync<Employee>(id, new PartitionKey(id));
                if (employee.StatusCode == System.Net.HttpStatusCode.NotFound)
                    return new NotFoundResult();
                return new OkObjectResult(employee.Resource);
            }
            else
            {
                var employees = new List<Employee>();
                log.LogInformation("Querying all employees");
                while (feedIterator.HasMoreResults)
                {
                    var response = await feedIterator.ReadNextAsync();
                    employees.AddRange(response);
                }
                return new OkObjectResult(employees);
            }
        }
    }
}
