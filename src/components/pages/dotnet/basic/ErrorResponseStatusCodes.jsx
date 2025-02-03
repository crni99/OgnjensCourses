import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function ErrorResponseStatusCodes() {

    return (
        <>
            <Lead
                title="Error Response and Status Codes: Designing Effective API Feedback in
                    .NET"
                paragraph1="Learn how to design effective error responses and use appropriate HTTP
                    status codes in your .NET Web API for improved communication and debugging."
                paragraph2="When building APIs, providing clear and consistent error responses is essential for a good developer
                    and user experience. Proper error handling not only helps you communicate issues to your users but
                    also aids developers in troubleshooting problems and integrating with your API more effectively."
            />

            <Section>
                <h2>Why Error Responses and Status Codes Matter</h2>
                <ul>
                    <li>Consistent Communication: APIs that use standardized error responses help clients quickly
                        understand and react to issues.</li>
                    <li>Improved Debugging: Well-designed error responses provide developers with the information
                        they need to troubleshoot problems effectively.</li>
                    <li>Client Expectations: Using the correct HTTP status codes (e.g., 404 for "Not Found" or 500
                        for "Internal Server Error") helps manage client expectations and conveys the nature of the
                        issue.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Understanding HTTP Status Codes</h2>
                <p>HTTP status codes are grouped into five categories that reflect the outcome of the request:</p>
                <ol>
                    <li><strong>1xx (Informational):</strong> These are rarely used in APIs and indicate that the
                        request is being processed.</li>
                    <li><strong>2xx (Success):</strong> These indicate that the request was successful.
                        <ul>
                            <li><code>200 OK:</code> The request was successful, and the response contains the
                                requested data.</li>
                            <li><code>201 Created:</code> The request was successful, and a new resource was created
                                (often used with POST).</li>
                            <li><code>204 No Content:</code> The request was successful, but there is no content to
                                return (commonly used with DELETE requests).</li>
                        </ul>
                    </li>
                    <li><strong>3xx (Redirection):</strong> These indicate that the client must take additional
                        actions to complete the request.</li>
                    <li><strong>4xx (Client Error):</strong> These indicate that there was an issue with the
                        client’s request.
                        <ul>
                            <li><code>400 Bad Request:</code> The server could not understand the request due to
                                invalid syntax.</li>
                            <li><code>401 Unauthorized:</code> The request lacks valid credentials.</li>
                            <li><code>403 Forbidden:</code> The server understands the request, but the client is
                                not authorized to perform the action.</li>
                            <li><code>404 Not Found:</code> The requested resource could not be found.</li>
                            <li><code>422 Unprocessable Entity:</code> The request is well-formed but contains
                                semantic errors.</li>
                        </ul>
                    </li>
                    <li><strong>5xx (Server Error):</strong> These indicate that the server encountered an error and
                        could not fulfill the request.
                        <ul>
                            <li><code>500 Internal Server Error:</code> A generic error when the server fails to
                                process the request.</li>
                            <li><code>502 Bad Gateway:</code> The server is acting as a gateway and received an
                                invalid response from an upstream server.</li>
                            <li><code>503 Service Unavailable:</code> The server is temporarily unavailable (e.g.,
                                maintenance or overload).</li>
                        </ul>
                    </li>
                </ol>
            </Section>

            <Section>
                <h2>Step 2: Designing Effective Error Responses</h2>
                <p>An effective error response should provide enough information to understand the nature of the
                    problem while avoiding exposing sensitive internal details. This includes:</p>
                <ul>
                    <li><strong>HTTP Status Code:</strong> The status code communicates the outcome of the request.
                    </li>
                    <li><strong>Error Code:</strong> A unique, human-readable error code that allows clients to
                        programmatically identify the error type.</li>
                    <li><strong>Message:</strong> A description of the error that helps clients understand what went
                        wrong.</li>
                    <li><strong>Details (Optional):</strong> Additional information or context (like validation
                        error details or the field causing the issue).</li>
                </ul>
                <p>Example Error Response Structure:</p>
                <CodeSnippet language="json" code={`{
    "error": 
    {
        "code": "invalid_input",
        "message": "The input data is invalid.",
        "details": 
        [
            {
                "field": "email",
                "message": "Email address is required."
            },
            {
                "field": "password",
                "message": "Password must be at least 8 characters."
            }
        ]
    }
}`} />
                <br></br>
                <p>This structure includes:</p>
                <ul>
                    <li><strong>error.code:</strong> A machine-readable error code that can be used by clients to
                        handle specific
                        errors programmatically.
                    </li>
                    <li><strong>error.message:</strong> A human-readable description of the error.
                    </li>
                    <li><strong>error.details:</strong> (Optional) More specific error details, like validation
                        messages for fields.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 3: Implementing Error Responses in .NET</h2>
                <p>Now that we understand the structure of an effective error response, let's look at how to
                    implement this in a .NET Web API.</p>
                <h3>Example 1: Handling Client Errors (e.g., 400 Bad Request)</h3>
                <CodeSnippet language="csharp" code={`public class ProductsController : ControllerBase
{
    [HttpPost]
    public IActionResult CreateProduct([FromBody] Product product)
    {
        if (product == null)
        {
            return BadRequest(new
        {       
            error = new
                {
                    code = "invalid_input",
                    message = "Product data is required."
                }
            });
        }

        if (string.IsNullOrEmpty(product.Name))
        {
            return BadRequest(new
            {
                error = new
                    {
                        code = "missing_field",
                        message = "The product name is required.",
                        details = new []
                    {
                        new { field = "name", message = "Product name cannot be empty." }
                    }
                }
            });
        }

        // Proceed with the product creation logic
        return CreatedAtAction(nameof(GetProduct), new {id = product.Id}, product);
    }
}`} />
                <br></br>
                <p>In this example:</p>
                <ul>
                    <li>If the product parameter is null, a 400 Bad Request error is returned with a message
                        indicating the required data.
                    </li>
                    <li>If the product.Name is missing, the error response includes a missing_field code and
                        provides validation details.
                    </li>
                </ul>
                <br></br>
                <h3>Example 2: Handling Unauthorized Access (e.g., 401 Unauthorized)</h3>
                <CodeSnippet language="csharp" code={`public class AuthenticationController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
        {
            return Unauthorized(new
            {
                error = new
                {
                    code = "invalid_credentials",
                    message = "Invalid username or password."
                }
            });
        }

        // Authentication logic...
        return Ok(new { message = "Login successful" });
    }
}`} />
                <br></br>
                <p>Here, we use the 401 Unauthorized status code to indicate that the client provided invalid
                    credentials.
                </p>
                <br></br>
                <h3>Example 3: Handling Not Found Errors (e.g., 404 Not Found)</h3>
                <CodeSnippet language="csharp" code={`public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        var product = _productService.GetProductById(id);
        if (product == null)
        {
            return NotFound(new
            {
                error = new
                {
                    code = "not_found",
                    message = $"Product with ID {id} was not found."
                }
            });
        }

        return Ok(product);
    }
}`} />
                <br></br>
                <p>
                    In this case, a 404 Not Found error is returned when a product with the specified id is not
                    found in the system.
                </p>
            </Section>

            <Section>
                <h2>Step 4: Handling Server Errors (e.g., 500 Internal Server Error)</h2>
                <p>If your API encounters an unexpected issue, a 500 Internal Server Error should be returned. This
                    can be handled centrally using custom middleware for error logging and graceful error handling.
                </p>
                <h3>Example: Custom Error Handling Middleware</h3>
                <CodeSnippet language="csharp" code={`public class ErrorHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorHandlingMiddleware> _logger;

    public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
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
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unexpected error occurred.");

            httpContext.Response.StatusCode = 500;
            httpContext.Response.ContentType = "application/json";

            var errorResponse = new
            {
                error = new
                {
                    code = "internal_error",
                    message = "An unexpected error occurred. Please try again later."
                }
            };

            await httpContext.Response.WriteAsJsonAsync(errorResponse);
        }
    }
}`} />
            </Section>

            <Section>
                <h2>Step 5: Testing Error Responses and Status Codes</h2>
                <ul>
                    <li>Test Client-Side Errors: Try sending malformed requests (e.g., missing required fields) and
                        check that the 400 Bad Request error is returned with the appropriate message.</li>
                    <li>Test Authentication Errors: Attempt accessing protected resources with invalid credentials
                        to ensure a 401 Unauthorized response is returned.</li>
                    <li>Test Resource Not Found: Try accessing non-existent resources and check that the 404 Not
                        Found error is returned.</li>
                    <li>Test Server Errors: Simulate a server error (e.g., by throwing an exception) and confirm
                        that a 500 Internal Server Error is returned.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Designing effective error responses and using appropriate status codes are critical for building
                    APIs that are easy to debug and integrate with. By following best practices and using clear,
                    consistent error structures, you can improve both the developer and user experience.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>The importance of HTTP status codes and how they communicate the outcome of a request.</li>
                    <li>How to structure error responses with codes, messages, and optional details.</li>
                    <li>Examples of handling client errors (e.g., 400), unauthorized access (e.g., 401), not found
                        errors (e.g., 404), and server errors (e.g., 500).</li>
                    <li>The use of middleware for centralized error handling in your API.</li>
                </ul>
            </Section>

            <PageNavigation prevPage={RoutePath.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE} nextPage={RoutePath.API_RATE_LIMITING} />

        </>
    );
}