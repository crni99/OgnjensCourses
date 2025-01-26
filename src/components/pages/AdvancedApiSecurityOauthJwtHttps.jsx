import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function AdvancedApiSecurityOauthJwtHttps() {

    return (
        <>
            <Lead
                title="Advanced API Security: Implementing OAuth, JWT, and HTTPS in .NET"
                paragraph1="Learn how to implement advanced security measures using OAuth 2.0, JWT, and
                    HTTPS in your .NET Web API to protect your application and its users from security threats."
                paragraph2="As your API evolves, securing it against various threats becomes even more crucial. To achieve a
                    high level of security, you can implement a combination of OAuth 2.0, JWT (JSON Web Tokens), and
                    HTTPS. These technologies provide a comprehensive approach to securing your API, ensuring that user
                    data remains safe, access is granted only to authorized parties, and all communication is encrypted."
            />

            <Section>
                <h2>Why OAuth, JWT, and HTTPS?</h2>
                <p><strong>OAuth 2.0:</strong> OAuth is an authorization framework that allows third-party
                    applications to access user data without exposing the user's credentials. It’s commonly used for
                    delegating access to an API, enabling single sign-on (SSO) and integration with third-party
                    services (e.g., Google, Facebook).
                </p>
                <p><strong>JWT (JSON Web Tokens):</strong> JWT is a compact, URL-safe token that securely represents
                    information between two parties. It’s widely used in APIs to authenticate users and authorize
                    access. JWT is often used in conjunction with OAuth 2.0 to provide secure access tokens.
                </p>
                <p><strong>HTTPS (Hypertext Transfer Protocol Secure):</strong> HTTPS is a secure version of HTTP.
                    It ensures that data sent between the client and server is encrypted, preventing eavesdropping,
                    tampering, and man-in-the-middle attacks.
                </p>
                <p>By combining OAuth for authorization, JWT for token-based authentication, and HTTPS for encrypted
                    communication, you can create a robust, secure API that protects your users' data and ensures
                    safe access control.
                </p>
            </Section>

            <Section>
                <h2>Step 1: Implementing OAuth 2.0 in Your API</h2>
                <p>OAuth 2.0 is a common protocol for handling third-party authentication and authorization. It
                    allows your API to delegate authentication to an OAuth provider (e.g., Google, Facebook, or a
                    custom identity provider).
                </p>
                <h3>Example: Setting Up IdentityServer4 for OAuth 2.0</h3>
                <p>Install IdentityServer4: First, install the necessary NuGet packages.</p>
                <CodeSnippet language="shell" code={`dotnet add package IdentityServer4`} />
                <br></br>

                <p>Configure IdentityServer in <code>Startup.cs</code>:</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    // Add IdentityServer with in-memory configuration (for testing purposes)
    services.AddIdentityServer()
        .AddInMemoryApiScopes(Config.ApiScopes)
        .AddInMemoryClients(Config.Clients)
        .AddInMemoryIdentityResources(Config.IdentityResources)
        .AddTestUsers(Config.Users)
        .AddDeveloperSigningCredential();

    services.AddControllers();
}

public void Configure(IApplicationBuilder app)
{
    app.UseRouting();

    // Enable IdentityServer
    app.UseIdentityServer();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
                <br></br>

                <h3>Define Configurations</h3>
                <p>Create a <code>Config.cs</code> class to define the API scopes, clients, and resources:</p>
                <CodeSnippet language="csharp" code={`public static class Config
{
    public static IEnumerable<ApiScope> ApiScopes =>
    new ApiScope[] 
    {
        new ApiScope("api1", "My API")
    };

    public static IEnumerable<Client> Clients =>
    new Client[] 
    {
        new Client
        {
            ClientId = "client",
            AllowedGrantTypes = GrantTypes.ClientCredentials,
            ClientSecrets = { new Secret("secret".Sha256()) },
            AllowedScopes = { "api1" }
        }
    };

    public static List<TestUser> Users =>
    new List<TestUser>
    {
        new TestUser
        {
            SubjectId = "1",
            Username = "alice",
            Password = "password"
        }
    };
}`} />
                <br></br>

                <h3>Access Token Generation</h3>
                <p>OAuth 2.0 will issue access tokens for clients to use when calling your API. The client will use
                    the token to authenticate requests.</p>
            </Section>

            <Section>
                <h2>Step 2: Implementing JWT for Authentication</h2>
                <p>Once you've set up OAuth 2.0, you can use JWT (JSON Web Tokens) to securely pass information
                    between the client and the server. JWT allows your API to verify a user's identity and their
                    permissions.</p>
                <h3>Example: Setting Up JWT Authentication in Your API</h3>
                <p>Install JWT Authentication NuGet Package:</p>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer`} />
                <br></br>

                <p>Configure JWT Authentication in <code>Startup.cs</code>:</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options => {
            options.Authority = "https://localhost:5001"; // IdentityServer URL
            options.Audience = "api1"; // API scope
            options.RequireHttpsMetadata = true;
        });

    services.AddControllers();
}`} />
                <br></br>
                <br></br>
                <h3>Secure Your API with JWT Authentication</h3>
                <p>In your controllers, apply the <code>[Authorize]</code> attribute to secure endpoints that
                    require authentication:</p>
                <CodeSnippet language="csharp" code={`[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return Ok(await _context.Products.ToListAsync());
    }
}`} />
                <br></br>

                <p>With this setup, your API will validate incoming JWT tokens and ensure that only authenticated
                    users can access protected endpoints.</p>
            </Section>

            <Section>
                <h2>Step 3: Enforcing HTTPS in Your API</h2>
                <p>Using HTTPS ensures that all communication between the client and the server is encrypted,
                    protecting sensitive data from being intercepted.</p>

                <h3>Example: Enforcing HTTPS in Your API</h3>
                <p>Configure HTTPS Redirection in <code>Startup.cs</code>:</p>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
    }

    app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
                <br></br>

                <h3>Configure Kestrel to Use HTTPS</h3>
                <p>In your <code>appsettings.json</code>, configure Kestrel to use HTTPS:</p>
                <CodeSnippet language="json" code={`"Kestrel": {
  "Endpoints": {
    "Https": {
      "Url": "https://localhost:5001",
      "Certificate": {
        "Path": "path-to-your-certificate.pfx",
        "Password": "your-certificate-password"
      }
    }
  }
}`} />
            </Section>

            <Section>
                <h2>Step 4: Testing the OAuth, JWT, and HTTPS Security</h2>
                <p>Once you've implemented OAuth, JWT, and HTTPS, you can test your API to ensure everything is
                    functioning as expected.</p>
                <ul>
                    <li>Use tools like Postman or Swagger to simulate OAuth token requests and send JWTs in the
                        Authorization header of your API requests.</li>
                    <li>Ensure that your API rejects non-HTTPS requests and forces secure communication.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By combining OAuth 2.0, JWT, and HTTPS, you can implement a robust, secure API that ensures:</p>
                <ul>
                    <li><strong>OAuth</strong> provides delegated access control, allowing third-party apps to
                        access data on behalf of users.</li>
                    <li><strong>JWT</strong> secures authentication by enabling stateless communication with compact
                        tokens.</li>
                    <li><strong>HTTPS</strong> ensures that all data exchanged between the client and server is
                        encrypted.</li>
                </ul>
                <p>With these technologies, your API will be well-equipped to handle secure authentication,
                    authorization, and communication, protecting both your users and data from potential security
                    threats.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li><strong>OAuth 2.0:</strong> Setting up OAuth for delegated authorization.</li>
                    <li><strong>JWT:</strong> Using JWT tokens for authentication and authorization.</li>
                    <li><strong>HTTPS:</strong> Enforcing secure communication between client and server.</li>
                </ul>
                <p>By implementing these security measures, you can ensure that your API remains safe and reliable
                    as it grows.</p>
            </Section>

        </>
    );
}