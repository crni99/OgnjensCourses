import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function VersioningDocumentingApiSwagger() {

    return (
        <>
            <Lead
                title="Versioning and Documenting Your API: Leveraging Swagger for API
                    Transparency in .NET"
                paragraph1="Learn how to version your API and document it using Swagger in .NET for
                    clarity and transparency."
                paragraph2=" APIs evolve over time, and as they grow in complexity or functionality, it becomes essential to
                    maintain clarity about how the API works. API versioning and documentation are crucial for ensuring
                    that clients (whether internal or external) can use the API correctly and with confidence."
            />

            <Section>
                <h2>Why Versioning and Documenting Your API is Important</h2>
                <ul>
                    <li><strong>API Versioning:</strong> Over time, APIs evolve. Changes can eak existing
                        functionality, and to ensure that clients using older versions of your API continue to work
                        smoothly, versioning is necessary. Versioning allows you to make changes (e.g., adding new
                        features or deprecating old ones) without eaking backward compatibility.</li>
                    <li><strong>API Documentation:</strong> Proper documentation helps consumers understand how to
                        interact with your API, what parameters to send, and what responses to expect. Interactive
                        documentation also allows developers to test the API directly from the browser, reducing the
                        learning curve and speeding up integration.</li>
                    <li><strong>Ensuring Consistency:</strong> With clear versioning and documentation, you provide
                        a clear contract for API consumers, making it easier to maintain consistency across multiple
                        versions and clients.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Versioning Your API in .NET</h2>
                <p>There are several strategies to version an API. The most common are:</p>
                <ul>
                    <li>URL Path Versioning: The version is included in the URL path (e.g.,
                        <code>/api/v1/products</code>).
                    </li>
                    <li>Query String Versioning: The version is specified in the query string (e.g.,
                        <code>/api/products?version=1</code>).
                    </li>
                    <li>Header Versioning: The version is sent via HTTP headers (e.g.,
                        <code>Accept: application/vnd.myapi.v1+json</code>).
                    </li>
                </ul>
                <p>In this example, we will use URL Path Versioning for simplicity.</p>

                <h3>Implement API Versioning Using Microsoft.AspNetCore.Mvc.Versioning</h3>
                <p>Install the Microsoft.AspNetCore.Mvc.Versioning package via NuGet:</p>
                <CodeSnippet language="shell" code={`Install-Package Microsoft.AspNetCore.Mvc.Versioning`} />

                <p>In your Startup.cs or Program.cs (depending on your .NET version), configure versioning.</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    // Register API versioning services
    services.AddApiVersioning(options =>
    {
        // Set default API version
        options.DefaultApiVersion = new ApiVersion(1, 0);
        options.AssumeDefaultVersionWhenUnspecified = true;
        options.ReportApiVersions = true;
    });

    services.AddControllers();
}`} />
            </Section>

            <Section>
                <h2>Step 2: Create Versioned API Controllers</h2>
                <p>You can now version your controllers by specifying the version in the Route attribute.</p>
                <CodeSnippet language="csharp" code={`[ApiController]
[Route("api/v{version:apiVersion}/products")]
public class ProductsV1Controller : ControllerBase
{
    [HttpGet]
    public ActionResult GetProducts()
    {
        return Ok(new { message = "This is version 1 of the Products API" });
    }
}`} />
                <p>For version 2, you can create another controller:</p>
                <CodeSnippet language="csharp" code={`[ApiController]
[Route("api/v{version:apiVersion}/products")]
public class ProductsV2Controller : ControllerBase
{
    [HttpGet]
    public ActionResult GetProducts()
    {
        return Ok(new { message = "This is version 2 of the Products API with new features" });
    }
}`} />
                <h4>Explanation:</h4>
                <ul>
                    <li>The <code>v{`version:apiVersion`}</code> in the route specifies the version of the API.</li>
                    <li>The <code>ApiVersion</code> attribute makes it clear which version the controller
                        corresponds to.</li>
                </ul>
                <p>Now, the API will be accessible at:</p>
                <ul>
                    <li><code>GET /api/v1/products</code> for version 1.</li>
                    <li><code>GET /api/v2/products</code> for version 2.</li>
                </ul>
                <p>This allows you to evolve your API while keeping older versions intact for clients that need
                    them.</p>
            </Section>

            <Section>
                <h2>Step 3: Documenting Your API with Swagger</h2>
                <p>Swagger is a tool that automatically generates interactive API documentation. In .NET,
                    Swashbuckle is the most common liary used to integrate Swagger with your API.</p>

                <h3>Step 1: Install Swagger</h3>
                <p>Install Swashbuckle.AspNetCore via NuGet:</p>
                <CodeSnippet language="shell" code={`Install-Package Swashbuckle.AspNetCore`} />

                <p>In Startup.cs or Program.cs, configure Swagger.</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    // Register API versioning services
    services.AddApiVersioning(options =>
    {
        options.DefaultApiVersion = new ApiVersion(1, 0);
        options.AssumeDefaultVersionWhenUnspecified = true;
        options.ReportApiVersions = true;
    });

    // Register Swagger
    services.AddSwaggerGen(options =>
    {
        // Configure Swagger to support API versioning
        options.DocInclusionPredicate((docName, apiDesc) =>
        {
            var versions = apiDesc.ActionDescriptor.RouteValues["version"];
            return versions != null && versions.Equals(docName, StringComparison.InvariantCultureIgnoreCase);
        });
    });

    services.AddControllers();
}`} />
            </Section>

            <Section>
                <h2>Step 4: Enable Swagger in the HTTP Request Pipeline</h2>
                <p>In your Configure method, enable Swagger and Swagger UI.</p>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // Enable Swagger
    app.UseSwagger();

    // Enable Swagger UI
    app.UseSwaggerUI(options =>
    {
        // Set up a UI to show Swagger documentation for each version
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Products API v1");
        options.SwaggerEndpoint("/swagger/v2/swagger.json", "Products API v2");
        options.RoutePrefix = string.Empty;  // Serve Swagger UI at the root
    });

    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
            </Section>

            <Section>
                <h2>Step 5: Versioning in Swagger UI</h2>
                <p>Once Swagger is configured, you’ll be able to see interactive documentation for each API version.
                    You can test the endpoints directly from the Swagger UI.</p>
                <p>The <code>SwaggerEndpoint</code> method allows you to specify the location of each version's
                    Swagger JSON file, ensuring that the UI is aware of your multiple versions.</p>
            </Section>

            <Section>
                <h2>Step 6: Exploring Swagger’s Features</h2>
                <p>Swagger offers several key features to improve the development and consumer experience:</p>
                <ul>
                    <li><strong>Interactive Documentation:</strong> Consumers can interact with your API directly
                        from the Swagger UI. They can test different endpoints, provide parameters, and view
                        responses.</li>
                    <li><strong>API Schema and Types:</strong> Swagger auto-generates models based on your API’s
                        input and output, making it easy to understand the data structures.</li>
                    <li><strong>Descriptive Metadata:</strong> You can add descriptions, tags, and metadata to your
                        controllers and actions to provide more context.</li>
                    <li><strong>Versioning in UI:</strong> Swagger will display the different versions of your API,
                        making it easy for developers to choose which version they wish to interact with.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Versioning and documenting your API are essential practices for ensuring that your API remains
                    flexible, maintainable, and easy to use. By implementing API versioning and Swagger
                    documentation in .NET, you make it clear how your API evolves and provide an interactive
                    interface for developers to integrate with.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>Versioning your API using URL path versioning, and how to handle multiple API versions.</li>
                    <li>How to integrate Swagger with .NET using Swashbuckle to automatically generate interactive
                        API documentation.</li>
                    <li>How to customize Swagger UI to support multiple versions and ensure clear, accessible
                        documentation.</li>
                </ul>
                <p>By leveraging these tools, you ensure that both your API and its consumers can evolve smoothly
                    over time, reducing friction for developers and ensuring backward compatibility for users of
                    previous versions.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.API_RATE_LIMITING} nextPage={RoutePath.UNIT_TESTING_XUNIT} />

        </>
    );
}