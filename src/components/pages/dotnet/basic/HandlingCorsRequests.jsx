import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function HandlingCorsRequests() {

    return (
        <>
            <Lead
                title="Handling Cross-Origin Requests (CORS): Enabling Secure External
                    Communication in .NET"
                paragraph1="Learn how to handle cross-origin requests securely in your .NET Web API,
                    allowing communication with external domains while maintaining security."
                paragraph2="In modern web applications, it's common for the frontend and backend to be hosted on different
                    domains or ports. This scenario introduces a security concept known as Cross-Origin Resource Sharing
                    (CORS). When a client-side application (like a web app) hosted on one domain makes a request to an
                    API hosted on another, the owser enforces the Same-Origin Policy to prevent cross-site scripting
                    attacks. CORS is the mechanism that allows web applications to securely make requests to APIs hosted
                    on different domains."
            />

            <Section>
                <h2>Why CORS Is Important</h2>
                <p><strong>CORS</strong> allows you to:</p>
                <ul>
                    <li><strong>Allow cross-origin requests:</strong> Without CORS, a owser will block frontend
                        apps from accessing resources hosted on a different domain.</li>
                    <li><strong>Control which domains can access your API:</strong> CORS allows you to define which
                        external domains (origins) are permitted to interact with your API, protecting your server
                        from unauthorized access.</li>
                    <li><strong>Prevent security vulnerabilities:</strong> CORS helps mitigate risks like Cross-Site
                        Request Forgery (CSRF) and Cross-Site Scripting (XSS) while enabling secure external
                        communication.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Enabling CORS in Your .NET Web API</h2>
                <p>In .NET, enabling CORS is straightforward. You can control which origins, HTTP methods, and
                    headers are allowed.</p>

                <h3>Example: Basic CORS Setup in Startup.cs</h3>
                <p>Install the CORS NuGet Package (if not already included):</p>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.AspNetCore.Cors`} />
                <p>Configure CORS in <code>Startup.cs</code> (or <code>Program.cs</code> in .NET 6+):</p>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options => {
        options.AddPolicy("AllowSpecificOrigin", policy => {
            policy.WithOrigins("https://example.com")  // Allow only this domain
                .AllowAnyMethod()                  // Allow any HTTP method (GET, POST, etc.)
                .AllowAnyHeader();                 // Allow any headers
        });
    });

    services.AddControllers();
}`} />
                <h3>Enable CORS in the Configure method:</h3>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    // Enable CORS with the policy
    app.UseCors("AllowSpecificOrigin");  // Apply the "AllowSpecificOrigin" policy

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}`} />
                <p>This configuration allows only requests from <code>https://example.com</code> to access your API.
                    You can specify additional domains or allow all origins with <code>.AllowAnyOrigin()</code>, but
                    be cautious in production.</p>
            </Section>

            <Section>
                <h2>Step 2: Handling CORS Preflight Requests</h2>
                <p>A preflight request is sent by the owser before the actual request to verify whether the server
                    supports the requested CORS operation (especially with methods like PUT, DELETE, or custom
                    headers). You can handle preflight requests by ensuring your API responds correctly.</p>

                <h3>Example: Handling Preflight Requests</h3>
                <p>.NET automatically handles CORS preflight requests when you use <code>UseCors</code>, but you can
                    further customize your response if needed.</p>
                <p>Allow Specific Methods and Headers:</p>
                <CodeSnippet language="csharp" code={`services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("https://example.com")
              .WithMethods("GET", "POST", "PUT") // Only allow these HTTP methods
              .WithHeaders("Content-Type", "Authorization"); // Allow these headers
    });
});`} />
                <p>If your API requires custom headers (e.g., Authorization), ensure that preflight requests are
                    handled. The CORS middleware will automatically manage this as long as the correct headers are
                    allowed.</p>
            </Section>

            <Section>
                <h2>Step 3: Secure CORS Configuration for Production</h2>
                <p>When deploying to production, you must be cautious with your CORS configuration to avoid security
                    risks. Here's how to securely configure CORS in production:</p>

                <h3>Recommendations for Secure CORS Setup:</h3>
                <ul>
                    <li><strong>Allow Only Trusted Domains:</strong> Never use <code>.AllowAnyOrigin()</code> in
                        production. Always specify trusted domains, like&nbsp;
                        <code>policy.WithOrigins("https://trusted-domain1.com", "https://trusted-domain2.com")</code>.
                    </li>
                    <li><strong>Limit Allowed HTTP Methods:</strong> Only allow HTTP methods your API supports
                        (e.g., <code>GET</code>, <code>POST</code>). Don't allow methods like <code>PUT</code> or&nbsp;
                        <code>DELETE</code> unless they are necessary.
                    </li>
                    <li><strong>Restrict Allowed Headers:</strong> Only allow headers that are essential for your
                        API, preventing unnecessary exposure of sensitive data.</li>
                    <li><strong>Use HTTPS:</strong> Ensure your API is accessed over HTTPS to prevent potential
                        man-in-the-middle attacks. Use <code>app.UseHttpsRedirection();</code>.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Testing CORS with External Clients</h2>
                <p>After configuring CORS, test it to ensure that cross-origin requests are correctly handled.</p>
                <ul>
                    <li><strong>Test from the Frontend:</strong> From your frontend (e.g., React, Angular, Vue.js),
                        make a request to your API using fetch or axios. If CORS is configured properly, the owser
                        will allow the request.</li>
                    <CodeSnippet language="javascript" code={`fetch('https://yourapi.com/api/products', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer your_jwt_token_here'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`} />

                    <li><strong>Check the owser Console:</strong> If CORS is misconfigured, the owser console
                        will show CORS-related errors, which can help identify the issue (e.g., missing allowed
                        origin, method, or header).</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Using CORS with Authentication</h2>
                <p>When implementing authentication (e.g., JWT, OAuth), ensure that your CORS configuration allows
                    necessary headers (such as <code>Authorization</code>) to be included in the request.</p>

                <h3>Example: Allowing Authorization Header with CORS</h3>
                <CodeSnippet language="csharp" code={`services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("https://example.com")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Allow credentials (cookies, authorization headers, etc.)
    });
});`} />
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By properly handling CORS in your .NET Web API, you can ensure secure and efficient communication
                    with external applications. Here's what you can achieve:</p>
                <ul>
                    <li><strong>Allow secure cross-origin requests:</strong> Your API can be accessed by trusted
                        domains without compromising security.</li>
                    <li><strong>Control access:</strong> Specify which domains, methods, and headers are allowed to
                        interact with your API, ensuring it isn't exposed unnecessarily.</li>
                    <li><strong>Secure communication:</strong> By enforcing HTTPS and properly configured CORS
                        headers, you protect your users' data and prevent attacks like CSRF and XSS.</li>
                </ul>
                <p>In this post, we've covered:</p>
                <ul>
                    <li><strong>Enabling CORS:</strong> How to configure CORS to handle cross-origin requests in
                        .NET.</li>
                    <li><strong>Handling preflight requests:</strong> How to ensure that preflight requests are
                        managed correctly.</li>
                    <li><strong>Securing CORS:</strong> Best practices for configuring CORS in production
                        environments.</li>
                    <li><strong>Testing CORS:</strong> How to test your CORS configuration using frontend clients.
                    </li>
                </ul>
                <p>With this knowledge, you can enable secure and efficient external communication while protecting
                    your API from security vulnerabilities.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS} nextPage={RoutePath.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE} />

        </>
    );
}