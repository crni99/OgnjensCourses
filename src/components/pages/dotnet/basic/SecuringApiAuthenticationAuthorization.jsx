import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function SecuringApiAuthenticationAuthorization() {

    return (
        <>
            <Lead
                title="Securing Your API: Implementing Authentication and Authorization in
                    .NET"
                paragraph1="Learn how to implement authentication and authorization to secure your .NET
                    Web API, ensuring only authorized users can access sensitive resources."
                paragraph2="When building RESTful APIs, security is paramount. Without proper authentication and authorization,
                    your API could be exposed to malicious actors, leading to data eaches, unauthorized access, and
                    other security vulnerabilities. Implementing robust authentication and authorization mechanisms
                    ensures that only authorized users can access specific resources and actions in your API."
            />

            <Section>
                <h2>Why Authentication and Authorization Are Important</h2>
                <p>Authentication verifies who a user is. Without authentication, anyone can access your API, making
                    it impossible to secure sensitive data.</p>
                <p>Authorization determines what a user can do once they are authenticated. For example, an admin
                    may have full access to the API, while a regular user may only be able to view certain
                    resources.</p>
                <p>Without both mechanisms, your API would lack the necessary controls to protect sensitive
                    information and limit user actions based on their identity.</p>
            </Section>

            <Section>
                <h2>Step 1: Implementing Authentication in Your API</h2>
                <p>Authentication is the first line of defense in securing your API. The most common approach is
                    using JWT (JSON Web Tokens), which are stateless and easily integrated into .NET applications.
                </p>
                <h3>Example: Implementing JWT Authentication</h3>
                <p>To implement JWT-based authentication, you'll first need to configure your API to issue and
                    validate tokens.</p>

                <h4>1. Install Necessary NuGet Packages</h4>
                <ul>
                    <li>Microsoft.AspNetCore.Authentication.JwtBearer</li>
                    <li>System.IdentityModel.Tokens.Jwt</li>
                </ul>
                <h4>2. Configure JWT in Startup.cs</h4>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    // Add JWT Authentication
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options => {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
            };
        });

    services.AddControllers();
}`} />
                <h4>3. Generating JWT Tokens</h4>
                <p>When a user logs in with valid credentials, you’ll issue a JWT token for authentication. Here’s
                    an example of generating a JWT token:</p>
                <CodeSnippet language="csharp" code={`public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel model)
    {
        if (model.Username == "admin" && model.Password == "password") // Example validation
        {
            var claims = new[] 
            {
                new Claim(ClaimTypes.Name, model.Username),
                new Claim(ClaimTypes.Role, "Admin")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
        }

        return Unauthorized();
    }
}`} />
                <p>Explanation:</p>
                <ul>
                    <li>The login endpoint issues a JWT token after validating the user's credentials.</li>
                    <li>The token contains user claims like the username and role, which will be used later for
                        authorization.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Implementing Authorization</h2>
                <p>Once users are authenticated, the next step is to implement authorization to ensure that only
                    authorized users can access specific resources.</p>
                <h3>Example: Protecting Endpoints with Authorization</h3>
                <p>Role-based authorization can be used to restrict access to specific endpoints. For instance, you
                    can restrict access to an endpoint to only users with the "Admin" role.</p>
                <CodeSnippet language="csharp" code={`[Authorize(Roles = "Admin")]
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }
}`} />
                <p>The <code>[Authorize]</code> attribute ensures that only users with the "Admin" role can access
                    the <code>GetProducts</code> endpoint. If a user who is not in the "Admin" role tries to access
                    it, they will receive a 403 Forbidden response.</p>

                <h3>Example: Implementing Policy-Based Authorization</h3>
                <p>Policy-based authorization allows for more flexible rules beyond just roles. Here’s how you can
                    implement it:</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddAuthorization(options =>
    {
        options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
        options.AddPolicy("MustBe21", policy => policy.Requirements.Add(new MinimumAgeRequirement(21)));
    });

    services.AddControllers();
}`} />
                <p>Apply the policy to a controller action:</p>
                <CodeSnippet language="csharp" code={`[Authorize(Policy = "AdminOnly")]
[HttpGet]
public IActionResult GetAdminData()
{
    return Ok(new { data = "Sensitive data only for admins" });
}`} />
            </Section>

            <Section>
                <h2>Step 3: Adding JWT Token Validation to Your API</h2>
                <p>To validate JWT tokens in your API, you can configure middleware in Startup.cs (or Program.cs for
                    .NET 6+). This middleware will inspect the Authorization header, validate the token, and set the
                    user principal for each request.</p>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseAuthentication();  // Add Authentication middleware
    app.UseAuthorization();   // Add Authorization middleware

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
            </Section>

            <Section>
                <h2>Step 4: Testing Your API with Authentication and Authorization</h2>
                <p>Once your API is secured, you can test it using tools like Postman or Swagger. For endpoints
                    requiring authentication, you will need to include the JWT token in the Authorization header,
                    typically like this:</p>
                <CodeSnippet language="csharp" code={`Authorization: Bearer {YourJWTTokenHere}`} />
                <p>For endpoints with authorization, the API will verify the token, extract the user’s roles or
                    claims, and check if they have permission to access the requested resource.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By implementing both authentication and authorization in your .NET Web API, you can protect your
                    resources and ensure that only authorized users have access to specific parts of your
                    application.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li><strong>Authentication:</strong> How to implement JWT-based authentication in your API to
                        ensure that users are who they say they are.</li>
                    <li><strong>Authorization:</strong> How to restrict access to specific resources based on user
                        roles or policies.</li>
                    <li><strong>Token Validation:</strong> How to validate JWT tokens and apply authorization
                        middleware to secure your endpoints.</li>
                </ul>
            </Section>

            <PageNavigation prevPage={RoutePath.SEARCHING_FILTERING_PAGING_RESOURCES} nextPage={RoutePath.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS} />

        </>
    );
}