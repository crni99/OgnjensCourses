import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function ApiRateLimiting() {

    return (
        <>
            <Lead
                title="API Rate Limiting: Protecting Your Resources from Overuse in .NET"
                paragraph1="Learn how to implement API rate limiting in your .NET Web API to control
                    access and protect resources from overuse."
                paragraph2="APIs are crucial to the functionality of many applications, but they are also vulnerable to misuse
                    or overuse. Without proper safeguards in place, an API can be overwhelmed by excessive traffic,
                    either due to heavy legitimate use or malicious attacks. Rate limiting is one of the most effective
                    ways to control access to your API and protect your resources from overuse, ensuring that your
                    system remains responsive and secure."
            />

            <Section>
                <h2>Why Rate Limiting is Important</h2>
                <ul>
                    <li>Preventing Abuse: Limiting the number of requests a user or service can make in a given time
                        period helps prevent abuse, such as DoS (Denial of Service) or brute-force attacks.</li>
                    <li>Ensuring Fair Usage: It ensures that one user cannot monopolize API resources and that all
                        users have fair access to the system.</li>
                    <li>Protecting Backend Services: Rate limiting helps prevent server overload, ensuring that
                        backend services like databases and third-party services aren't overwhelmed by excessive
                        requests.</li>
                    <li>Cost Control: In some cases, excessive API usage can lead to higher infrastructure costs.
                        Rate limiting helps keep those costs under control.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Understanding Rate Limiting Concepts</h2>
                <p>Rate limiting is typically based on the following concepts:</p>
                <ul>
                    <li><strong>Request Count:</strong> The number of requests a client is allowed to make.</li>
                    <li><strong>Time Window:</strong> The time period in which the requests are counted (e.g., per
                        minute, per hour).</li>
                    <li><strong>Policy Types:</strong> The strategy for rate limiting.
                        <ul>
                            <li><strong>Fixed Window:</strong> Limits requests to a fixed time window (e.g., 100
                                requests per minute).</li>
                            <li><strong>Sliding Window:</strong> A more flexible approach where the time window
                                "slides" based on when the request is made.</li>
                            <li><strong>Token Bucket:</strong> A more complex algorithm where tokens are refilled at
                                a constant rate, and each request consumes a token.</li>
                            <li><strong>Leaky Bucket:</strong> A rate-limited request approach that allows bursts of
                                requests but gradually drains over time.</li>
                        </ul>
                    </li>
                </ul>
                <p>For simplicity, we’ll focus on the Fixed Window rate limiting strategy in this example, but .NET
                    supports all of these strategies with the right middleware.</p>
            </Section>

            <Section>
                <h2>Step 2: Implementing Rate Limiting in .NET</h2>
                <p>In .NET, rate limiting can be implemented using middleware that intercepts requests and applies
                    the rate limiting policy. You can use libraries like AspNetCoreRateLimit to simplify this
                    process, but let’s go over how to implement basic rate limiting manually.</p>

                <h3>Example: Implementing Fixed Window Rate Limiting</h3>
                <p>For this implementation, we'll set a limit of 100 requests per minute for each IP address. To
                    track requests, we’ll use a simple in-memory store such as a Dictionary, though in a production
                    environment, you’d likely use something more scalable like Redis.</p>

                <h4>Step 1: Create Rate Limiting Middleware</h4>
                <CodeSnippet language="csharp" code={`public class RateLimitingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogge<RateLimitingMiddleware> _logger;
    private static readonly Dictionary<string, RequestData> _requestCounts = new Dictionary<string, RequestData>();
    private const int MaxRequestsPerMinute = 100;
    private const int TimeWindowInMinutes = 1;

    public RateLimitingMiddleware(RequestDelegate next, ILogger<RateLimitingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        var ipAddress = httpContext.Connection.RemoteIpAddress?.ToString();
        if (string.IsNullOrEmpty(ipAddress))
        {
            await _next(httpContext);
            return;
        }

        var currentTime = DateTime.UtcNow;
        if (_requestCounts.ContainsKey(ipAddress))
        {
            var requestData = _requestCounts[ipAddress];

            // Check if the time window has passed
            if ((currentTime - requestData.Timestamp).TotalMinutes >= TimeWindowInMinutes)
            {
                // Reset the counter if the window has passed
                requestData.Timestamp = currentTime;
                requestData.RequestCount = 0;
            }

            // Check if the request limit is reached
            if (requestData.RequestCount >= MaxRequestsPerMinute)
            {
                httpContext.Response.StatusCode = 429; // Too Many Requests
                httpContext.Response.ContentType = "application/json";
                var response = new { message = "Rate limit exceeded. Try again later." };
                await httpContext.Response.WriteAsJsonAsync(response);
                return;
            }

            // Increment the request count
            requestData.RequestCount++;
        }
        else
        {
            // If the IP address is new, initialize its request data
            _requestCounts[ipAddress] = new RequestData
            {
                Timestamp = currentTime,
                RequestCount = 1
            };
        }

        await _next(httpContext);
    }

    // Data structure to hold request count and timestamp for each IP address
    public class RequestData
    {
        public DateTime Timestamp { get; set; }
        public int RequestCount { get; set; }
    }
}`} />
                <br></br>
                <p>Explanation:</p>
                <ul>
                    <li>Dictionary for Request Counts: We use a Dictionary&lt;string, RequestData&gt; to store the
                        request
                        count and timestamp for each IP address. The key is the IP address, and the value is the
                        number of requests made in the current time window.
                    </li>
                    <li>Rate Limiting Logic: The middleware checks whether the client has exceeded the allowed
                        number of requests (MaxRequestsPerMinute). If the time window has passed, the request count
                        is reset.
                    </li>
                    <li>Returning 429 Status: If the request count exceeds the limit, a 429 Too Many Requests
                        response is returned, notifying the client that the rate limit has been exceeded.
                    </li>
                    <li>Time Window Reset: When the time window (1 minute in this case) passes, the request count
                        for the IP address is reset.
                    </li>
                </ul>
                <br></br>
                <h4>Step 2: Register the Middleware in Startup</h4>
                <CodeSnippet language="csharp" code={`public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseMiddleware<RateLimitingMiddleware>(); // Register Rate Limiting Middleware
        app.UseRouting();
        app.UseEndpoints(endpoints => {
            endpoints.MapControllers();
        });
    }
}`} />
            </Section>

            <Section>
                <h2>Step 3: Test Rate Limiting</h2>
                <p>To test the rate limiting functionality:</p>
                <ul>
                    <li>Make multiple requests from the same IP address within a 1-minute period and verify that
                        after 100 requests, the API starts returning a 429 Too Many Requests response.</li>
                    <li>Wait for the time window to reset (1 minute) and try again. The count should be reset, and
                        requests should be allowed once more.</li>
                    <li>You can use tools like Postman, curl, or a simple script to simulate multiple requests from
                        a single IP.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Scaling Rate Limiting with Distributed Caching</h2>
                <p>In a production environment, especially for high-traffic APIs, using an in-memory dictionary may
                    not be sufficient, as it’s not distributed and will only work on a single instance of your API.
                    To scale your rate limiting, you can use Redis or Memcached as a distributed cache to store the
                    rate limit counters across multiple API instances.</p>
                <p>To implement Redis-based rate limiting:</p>
                <ul>
                    <li>Use a package like StackExchange.Redis to interact with Redis.</li>
                    <li>Store the request counts and timestamps in Redis with expiration set for the time window.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By implementing rate limiting, you protect your API from overuse, prevent abuse, and ensure fair
                    access to all users. You can adapt the rate-limiting strategy based on your needs, whether it’s
                    a simple Fixed Window, a Sliding Window, or more advanced strategies like Token Bucket.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>The importance of rate limiting and why it’s essential for protecting your resources.</li>
                    <li>How to implement basic Fixed Window rate limiting in .NET using custom middleware.</li>
                    <li>How to register and test the middleware to ensure rate limits are enforced.</li>
                    <li>How to scale rate limiting with distributed caching (e.g., Redis).</li>
                </ul>
                <p>By implementing rate limiting, you can ensure that your API remains performant, secure, and
                    resilient to high traffic or malicious attacks.</p>
            </Section>

        </>
    );
}