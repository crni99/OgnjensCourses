import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function MonitoringApplicationHealthChecks() {

    return (
        <>
            <Lead
                title="Monitoring Application Health: Implementing Health Checks for System
                    Reliability in .NET"
                paragraph1="Learn how to implement health checks in a .NET application to monitor
                    availability and ensure system reliability."
                paragraph2="Ensuring that your application is running smoothly is crucial for providing a reliable service to
                    your users. Health checks are a powerful tool for monitoring the health of your application,
                    ensuring that it's functioning properly, and alerting you when things go wrong. Health checks can
                    monitor various parts of your system, such as database connectivity, external APIs, message queues,
                    and other dependencies."
            />

            <Section>
                <h2>Why Health Checks are Important</h2>
                <ul>
                    <li><strong>Monitoring System Availability:</strong> Health checks let you know if your
                        application is running properly or if there's a failure in one of its critical components,
                        such as the database or external services.</li>
                    <li><strong>Early Detection of Failures:</strong> By setting up health checks, you can detect
                        potential issues early before they escalate into more serious problems.</li>
                    <li><strong>Third-Party Monitoring Tools:</strong> Health checks are often used by external
                        monitoring services (e.g., Azure Application Insights, Prometheus, or New Relic) to monitor
                        the status of your application.</li>
                    <li><strong>Automating Recovery:</strong> When combined with load balancers or orchestration
                        tools like Kubernetes, health checks allow automatic failover to healthy instances if
                        something goes wrong.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Adding Health Checks to Your .NET Application</h2>
                <p>.NET provides a built-in package to implement health checks in your applications:&nbsp;
                    <code>Microsoft.Extensions.Diagnostics.HealthChecks</code>.
                </p>

                <h3>Step 1: Install the Health Checks NuGet Package</h3>
                <p>Open your terminal or NuGet Package Manager and run the following command to install the package:
                </p>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.Extensions.Diagnostics.HealthChecks`} />
                <br></br>

                <h3>Step 2: Configure Health Checks in Startup.cs (or Program.cs for .NET 6+)</h3>
                <p>Next, you’ll need to configure the health checks in your application's configuration pipeline. In
                    .NET 6 and beyond, this configuration is typically done in <code>Program.cs</code>.</p>

                <h4>Add Health Checks to Services:</h4>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddHealthChecks()
        .AddCheck("Database", () => HealthCheckResult.Healthy("Database is healthy"))
        .AddCheck("API", () => HealthCheckResult.Healthy("External API is reachable"));

    services.AddControllers();
}`} />
                <br></br>
                <p>In this example, we add two simple health checks: one for a database and another for an external
                    API.<br></br>You can replace these with more meaningful checks that test the actual health of your
                    dependencies.</p>

                <h4>Expose Health Check Endpoint:</h4>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseRouting();

    // Expose the health check endpoint
    app.UseHealthChecks("/health");

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
                <br></br>
                <p>UseHealthChecks("/health"): This configures the application to expose a <code>/health</code>&nbsp;
                    endpoint that users (or monitoring systems) can call to check the health of the app.<br></br>Now,
                    when you navigate to <code>http://localhost:5000/health</code>, you will get a basic health
                    check status indicating that both the "Database" and "API" are healthy.</p>
            </Section>

            <Section>
                <h2>Step 2: Adding Advanced Health Checks</h2>
                <p>The basic health check is useful for simple applications, but in production, you'll likely need
                    to monitor various system components. .NET’s health checks library allows you to easily add
                    checks for databases, caches, HTTP services, and more.</p>

                <h3>Example 1: Database Health Check</h3>
                <p>Let’s add a health check for a SQL Server database to ensure that your application can connect to
                    it and execute queries.</p>
                <CodeSnippet language="csharp" code={`services.AddHealthChecks()
    .AddSqlServer(connectionString: "YourConnectionString", name: "Database");`} />
                <br></br>

                <p>This check will attempt to connect to the specified SQL Server database. If the connection fails,
                    the health check will return an unhealthy status.</p>

                <h3>Example 2: HTTP Service Health Check</h3>
                <p>If your application depends on an external API or service, you can add a health check to verify
                    its availability.</p>
                <CodeSnippet language="csharp" code={`services.AddHealthChecks()
    .AddUrlGroup(new Uri("https://external-api.com/health"), name: "External API");`} />
                <br></br>

                <p>This check will make a GET request to the <code>/health</code> endpoint of the external service
                    and report the health based on the response.</p>

                <h3>Example 3: Custom Health Check</h3>
                <p>You can also create your own custom health checks. For example, you might want to verify that a
                    cache is accessible or that your application has sufficient resources.</p>
                <CodeSnippet language="csharp" code={`public class CustomHealthCheck : IHealthCheck
{
    public Task<HealthCheckResult> CheckHealthAsync(CancellationToken cancellationToken = default)
    {
        bool systemResourceAvailable = CheckSystemResource();

        if (systemResourceAvailable)
        {
            return Task.FromResult(HealthCheckResult.Healthy("System resource is available"));
        }

        return Task.FromResult(HealthCheckResult.Unhealthy("System resource is unavailable"));
    }

    private bool CheckSystemResource()
    {
        // Your custom logic to check system resource availability
        return true;
    }
}`} />
                <br></br>

                <p>And register it in <code>ConfigureServices</code>:</p>
                <CodeSnippet language="csharp" code={`services.AddHealthChecks()
    .AddCheck<CustomHealthCheck>("CustomHealthCheck");`} />
                <br></br>
                <p>This allows you to tailor the health check logic to your application's specific requirements.</p>
            </Section>

            <Section>
                <h2>Step 3: Customizing Health Check Responses</h2>
                <p>By default, health check responses are simple "OK" or "Unhealthy" messages. However, you might
                    want to return more detailed information, such as the last time a service was healthy or error
                    details.</p>

                <h3>Create a Custom Response Writer:</h3>
                <CodeSnippet language="csharp" code={`public static class HealthCheckResponseWriter
{
    public static Task WriteHealthCheckResponse(HttpContext httpContext, HealthReport result)
    {
        httpContext.Response.ContentType = "application/json";
        var response = new
        {
            status = result.Status.ToString(),
            checks = result.Entries.Select(entry => new
            {
                name = entry.Key,
                status = entry.Value.Status.ToString(),
                description = entry.Value.Description,
                duration = entry.Value.Duration.TotalSeconds
            })
        };
        return httpContext.Response.WriteAsync(JsonConvert.SerializeObject(response));
    }
}`} />
                <br></br>
                <h3>Configure the Response Writer in Configure:</h3>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    // Use the custom health check response writer
    app.UseHealthChecks("/health", new HealthCheckOptions()
    {
        ResponseWriter = HealthCheckResponseWriter.WriteHealthCheckResponse
    });

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
                <br></br>
                <p>This will return a detailed JSON response for the health check, providing information on the
                    status and duration of each individual check.</p>
            </Section>

            <Section>
                <h2>Step 4: Monitoring with External Tools</h2>
                <p>Health checks can be integrated with monitoring tools like Prometheus, New Relic, or Azure
                    Application Insights to provide continuous monitoring and alerting. These tools can periodically
                    hit your <code>/health</code> endpoint and alert you if the status becomes unhealthy.</p>

                <p>For example, in Azure, you can configure an Application Gateway to monitor your health endpoint
                    and route traffic accordingly, ensuring that only healthy instances receive traffic.</p>
            </Section>

            <Section>
                <h2>Step 5: Running the Application</h2>
                <p>Once you’ve set up health checks, you can test the <code>/health</code> endpoint by running your
                    application:</p>
                <ul>
                    <li>Visit <code>http://localhost:5000/health</code> to check the status of your system.</li>
                    <li>If everything is healthy, you’ll see a success message. If a check fails, the response will
                        indicate which component is unhealthy.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Health checks are an essential part of maintaining the reliability and availability of your .NET
                    applications. By implementing health checks, you can:</p>
                <ul>
                    <li>Monitor the health of your system’s critical components (e.g., databases, external APIs,
                        message queues).</li>
                    <li>Get early warnings of potential issues, allowing you to act before they affect users.</li>
                    <li>Integrate with external monitoring tools for real-time monitoring and automated recovery.
                    </li>
                </ul>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>How to add basic health checks to your .NET application.</li>
                    <li>How to add more advanced health checks, such as database and HTTP service checks.</li>
                    <li>How to create custom health checks for application-specific scenarios.</li>
                    <li>How to customize the health check response for more detailed reporting.</li>
                    <li>How to integrate health checks with external monitoring tools.</li>
                </ul>
                <p>By implementing these techniques, you can ensure that your application is always in a healthy
                    state and that you’re alerted immediately when something goes wrong.</p>
            </Section>

        </>
    );
}