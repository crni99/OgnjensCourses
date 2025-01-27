import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function LogginExceptionHandlingMiddleware() {

    return (
        <>
            <Lead
                title="Logging and Exception Handling: Managing Errors with Custom Middleware
                    in .NET"
                paragraph1="Learn how to implement effective logging and exception handling using custom
                    middleware in your .NET Web API to improve reliability and provide structured error responses."
                paragraph2="Error handling and logging are critical aspects of maintaining robust, reliable web applications.
                    They provide visibility into issues within your application, allow you to react to unexpected
                    failures, and help you troubleshoot when things go wrong. A well-implemented logging and
                    error-handling mechanism can significantly improve the debugging process, enhance the user
                    experience, and ensure that your application behaves as expected in production."
            />

            <Section>
                <h2>Why Logging and Exception Handling Are Important</h2>
                <p><strong>Logging</strong> provides visibility into your application's operation, helping you track
                    bugs, monitor performance, and understand usage patterns.</p>
                <p><strong>Exception handling</strong> ensures that unexpected errors don’t crash the application
                    and provides a graceful way to inform users while avoiding exposing sensitive information.</p>
                <p>Together, they help you create more resilient and maintainable applications.</p>
            </Section>

            <Section>
                <h2>Step 1: Setting Up Logging in .NET</h2>
                <p>.NET has built-in support for logging, which can be easily configured to log information to
                    various destinations such as the console, files, databases, or external services.</p>

                <h3>Example: Configuring Logging in Startup.cs</h3>
                <p>Configure Logging:</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddLogging(builder => {
        builder.AddConsole(); // Log to console
        builder.AddFile("Logs/myapp.txt"); // Log to a file (requires a third-party package like Serilog or NLog)
    });

    services.AddControllers();
}`} />
                <br></br>

                <p>Inject the Logger into Your Classes:</p>
                <CodeSnippet language="csharp" code={`public class ProductsController : ControllerBase
{
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(ILogger<ProductsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        _logger.LogInformation("Fetching list of products.");
        try
        {
            var products = GetProductsFromDatabase();
            _logger.LogInformation("Successfully retrieved products.");
            return Ok(products);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while fetching products.");
            return StatusCode(500, "Internal server error");
        }
    }
}`} />
            </Section>

            <Section>
                <h2>Step 2: Implementing Custom Exception Handling Middleware</h2>
                <p>In .NET, custom middleware allows you to intercept HTTP requests and responses at a central point
                    in the pipeline. You can use custom middleware to handle exceptions globally and return
                    consistent error responses.</p>

                <h3>Example: Creating Custom Exception Handling Middleware</h3>
                <p>Create the Middleware:</p>
                <p>Create a new class for the custom exception handling middleware. This middleware will catch
                    unhandled exceptions, log them, and return a consistent error response.
                </p>
                <CodeSnippet language="csharp" code={`public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);  // Pass the request to the next middleware
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unexpected error occurred.");

            // Return a generic error response
            httpContext.Response.StatusCode = 500;
            httpContext.Response.ContentType = "application/json";

            var errorResponse = new {Message = "An unexpected error occurred. Please try again later."};

            await httpContext.Response.WriteAsJsonAsync(errorResponse);
        }
    }
}`} />
                <br></br>
                <p>Register the Middleware in the Pipeline:</p>
                <p>Next, register the custom exception-handling middleware in the Configure method of Startup.cs.
                    The middleware should be added early in the pipeline to catch exceptions from other middleware.
                </p>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // Add custom exception handling middleware first
    app.UseMiddleware<ExceptionHandlingMiddleware>();

    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
            </Section>

            <Section>
                <h2>Step 3: Advanced Error Handling with Custom Exception Types</h2>
                <p>Sometimes, it's helpful to handle different types of exceptions more granularly (e.g.,
                    distinguishing between validation errors, not found errors, and unexpected server errors). You
                    can extend the exception handling middleware to handle custom exceptions.</p>

                <h3>Example: Custom Exception Classes</h3>
                <CodeSnippet language="csharp" code={`public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}

public class ValidationException : Exception
{
    public ValidationException(string message) : base(message) { }
}`} />
                <br></br>

                <h3>Update Middleware to Handle Specific Exceptions</h3>
                <p>Update the ExceptionHandlingMiddleware to handle custom exceptions differently.</p>
                <CodeSnippet language="csharp" code={`{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "Resource not found.");
            httpContext.Response.StatusCode = 404;
            httpContext.Response.ContentType = "application/json";
            await httpContext.Response.WriteAsJsonAsync(new { Message = ex.Message });
        }
        catch (ValidationException ex)
        {
            _logger.LogWarning(ex, "Validation error.");
            httpContext.Response.StatusCode = 400;
            httpContext.Response.ContentType = "application/json";
            await httpContext.Response.WriteAsJsonAsync(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unexpected error occurred.");
            httpContext.Response.StatusCode = 500;
            httpContext.Response.ContentType = "application/json";
            var errorResponse = new { Message = "An unexpected error occurred. Please try again later." };
            await httpContext.Response.WriteAsJsonAsync(errorResponse);
        }
    }
}`} />
                <br></br>
                <p>This setup ensures that:</p>
                <ul>
                    <li>If a <code>NotFoundException</code> is thrown, a 404 status code and a specific error
                        message are returned.</li>
                    <li>If a <code>ValidationException</code> is thrown, a 400 status code and a validation-specific
                        message are returned.</li>
                    <li>For any other unhandled exceptions, a 500 status code and a generic error message are
                        returned.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Logging Unhandled Errors</h2>
                <p>While the middleware handles exceptions, it’s important to ensure that all exceptions are logged
                    properly. You may also want to configure advanced logging, such as sending logs to external
                    services like Serilog, Application Insights, or Elasticsearch.</p>

                <h3>Example: Advanced Logging Setup with Serilog</h3>
                <p>Install Serilog NuGet Packages:</p>
                <CodeSnippet language="shell" code={`dotnet add package Serilog
dotnet add package Serilog.Extensions.Logging
dotnet add package Serilog.Sinks.Console
dotnet add package Serilog.Sinks.File`} />
                <br></br>

                <p>Configure Serilog in <code>Program.cs</code>:</p>
                <CodeSnippet language="csharp" code={`public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureLogging(logging =>
        {
            logging.ClearProviders();
            logging.AddSerilog(new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.File("Logs/log.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger());
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });`} />
            </Section>

            <Section>
                <h2>Step 5: Testing Error Handling and Logging</h2>
                <p>To test the logging and exception handling:</p>
                <ul>
                    <li><strong>Trigger an exception:</strong> Call an API endpoint that throws an exception (e.g.,
                        a <code>NotFoundException</code> or a generic <code>Exception</code>).</li>
                    <li><strong>Check the logs:</strong> Verify that the error is logged appropriately in the
                        console or log file.</li>
                    <li><strong>Test error response:</strong> Ensure the client receives a consistent and
                        informative error response.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Effective logging and exception handling are essential for maintaining a resilient, traceable,
                    and debuggable application. By using custom middleware in .NET, you can centralize error
                    handling, ensure that exceptions are logged consistently, and return user-friendly error
                    responses.</p>

                <p>In this post, we covered:</p>
                <ul>
                    <li>Setting up logging with built-in .NET logging and Serilog for more advanced logging.</li>
                    <li>Creating custom exception handling middleware to catch and handle exceptions globally.</li>
                    <li>Handling specific exception types (e.g., validation or not found) for more granular error
                        management.</li>
                    <li>Testing the logging and exception handling process to ensure it works correctly in
                        production.</li>
                </ul>

                <p>By implementing a robust logging and exception handling strategy, you can significantly improve
                    the reliability and maintainability of your API.</p>
            </Section>

        </>
    );
}