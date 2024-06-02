using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;
using System.Collections.Generic;

namespace EmployeeManager.Functions;

public static class EmployeeQueryHandler
{
    [FunctionName("EmployeeQueryHandler")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "employees/{id?}")] HttpRequest req,
        ILogger log, string id)
    {
        CosmosClient cosmosClient = new CosmosClientBuilder(
            Environment.GetEnvironmentVariable("CosmosAccountEndpoint"),
            Environment.GetEnvironmentVariable("CosmosAccountKey")
        )
        .WithSerializerOptions(new CosmosSerializationOptions { PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase })
        .Build();

        Container container = cosmosClient.GetContainer("EmployeeDB", "Employees");

        if (!string.IsNullOrEmpty(id))
        {
            log.LogInformation($"Querying employee with id: {id}");
            return await GetEmployeeById(id, container);
        }
        else
        {
            log.LogInformation("Querying all employees");
            return await GetAllEmployees(container);
        }
    }

    public static async Task<IActionResult> GetEmployeeById(string id, Container container)
    {
        var employee = await container.ReadItemAsync<Employee>(id, new PartitionKey(id));

        if (employee.StatusCode == System.Net.HttpStatusCode.NotFound)
            return new NotFoundResult();

        return new OkObjectResult(employee.Resource);
    }

    public static async Task<IActionResult> GetAllEmployees(Container container)
    {
        var employees = new List<Employee>();
        var feedIterator = container.GetItemQueryIterator<Employee>("SELECT * FROM c");

        while (feedIterator.HasMoreResults)
        {
            var response = await feedIterator.ReadNextAsync();
            employees.AddRange(response);
        }

        return new OkObjectResult(employees);
    }
}
