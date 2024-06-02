using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;
using EmployeeManager.Functions.Models;

namespace EmployeeManager.Functions
{
    public static class EmployeeCommandHandler
    {
        [FunctionName("EmployeeCommandHandler")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", "put", "delete", Route = "employees/{id?}")] HttpRequest req,
            ILogger log, string id)
        {
            CosmosClient cosmosClient = new CosmosClientBuilder(
                Environment.GetEnvironmentVariable("CosmosAccountEndpoint"),
                Environment.GetEnvironmentVariable("CosmosAccountKey")
            )
            .WithSerializerOptions(new CosmosSerializationOptions { PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase })
            .Build();

            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            Container container = cosmosClient.GetContainer("EmployeeDB", "Employees");

            switch (req.Method)
            {
                case "POST":
                    {
                        var command = JsonConvert.DeserializeObject<CreateEmployeeCommand>(requestBody);
                        return await CreateEmployee(container, command);
                    }
                case "PUT":
                    {
                        var command = JsonConvert.DeserializeObject<UpdateEmployeeCommand>(requestBody);
                        return await UpdateEmployee(container, command);
                    }
                case "DELETE":
                    return await DeleteEmployee(container, id);
                default:
                    return new OkObjectResult("EmployeeCommandHandler function is running.");
            }
        }

        public static async Task<IActionResult> UpdateEmployee(Container container, UpdateEmployeeCommand command)
        {
            var employee = await container.ReadItemAsync<Employee>(command.Id, new PartitionKey(command.Id));
            if (employee.StatusCode == System.Net.HttpStatusCode.NotFound)
                return new NotFoundResult();

            employee.Resource.FirstName = command.FirstName;
            employee.Resource.LastName = command.LastName;

            var response = await container.ReplaceItemAsync(employee.Resource, employee.Resource.Id, new PartitionKey(employee.Resource.Id));
            return new OkObjectResult(response.Resource);
        }

        public static async Task<IActionResult> DeleteEmployee(Container container, string id)
        {
            var response = await container.DeleteItemAsync<Employee>(id, new PartitionKey(id));

            if (response.StatusCode == System.Net.HttpStatusCode.NoContent)
                return new NoContentResult();
            else
                return new NotFoundResult();
        }

        public static Task<IActionResult> CreateEmployee(Container container, CreateEmployeeCommand command)
        {
            var createdEmployee = new Employee
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = command.FirstName,
                LastName = command.LastName
            };

            ItemResponse<Employee> response = container.CreateItemAsync(createdEmployee, new PartitionKey(createdEmployee.Id)).Result;
            return Task.FromResult<IActionResult>(new OkObjectResult(response.Resource));
        }
    }
}
