import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function ImprovingPerformancesCaching() {

    return (
        <>
            <Lead
                title="Improving Performance: Caching Strategies for Your API in .NET"
                paragraph1="Learn how to implement caching strategies in your .NET API to enhance
                    performance and scalability."
                paragraph2="When building APIs, performance is crucial for providing a fast, responsive user experience. One of
                    the most effective ways to improve API performance is through caching. Caching helps reduce the load
                    on your server by storing frequently accessed data in a faster-to-retrieve location, such as memory
                    or a distributed cache, rather than repeatedly fetching it from slower data sources like databases
                    or external services."
            />

            <Section>
                <h2>Why Caching Is Important</h2>
                <ul>
                    <li><strong>Reduce Latency:</strong> Caching can greatly reduce the time it takes to respond to
                        a request by serving the data from a much faster in-memory cache instead of querying the
                        database or external APIs.</li>
                    <li><strong>Decrease Load on Resources:</strong> By caching frequently accessed data, you reduce
                        the number of database queries or calls to external services, which lowers the load on these
                        resources and prevents them from becoming overwhelmed.</li>
                    <li><strong>Improve Scalability:</strong> With caching, your API can handle more requests
                        without stressing your underlying data sources, making it more scalable.</li>
                    <li><strong>Enhance User Experience:</strong> Faster responses mean better user experience,
                        especially when interacting with large datasets or services with high response times.</li>
                </ul>
            </Section>

            <Section>
                <h2>Types of Caching</h2>
                <p>There are several types of caching strategies you can use in your API, including:</p>
                <ul>
                    <li><strong>In-Memory Caching:</strong> Stores data in the memory of the application, ideal for
                        caching frequently accessed data.</li>
                    <li><strong>Distributed Caching:</strong> Useful for applications running across multiple
                        servers or instances. Common distributed caches include Redis and Memcached.</li>
                    <li><strong>Output Caching:</strong> Stores the output of entire API responses, suitable for
                        scenarios where the same response is frequently requested with the same parameters.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Implementing In-Memory Caching</h2>
                <p>In-memory caching is the simplest form of caching, where data is stored in the application's
                    memory. This works well for small to medium-sized data that does not need to be shared across
                    multiple servers.</p>

                <h3>Installing the Caching Package</h3>
                <p>To use in-memory caching in .NET, you don’t need any external libraries; it’s part of the&nbsp;
                    <code>Microsoft.Extensions.Caching.Memory</code> package, which is included by default in most
                    .NET templates.
                </p>

                <h3>Step 1: Configure Caching in Startup.cs or Program.cs (for .NET 6+)</h3>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddMemoryCache(); // Register the memory cache services

    services.AddControllers();
}`} />
                <br></br>

                <h3>Step 2: Using In-Memory Cache in Controllers</h3>
                <p>Now, let’s use the in-memory cache in an API controller. Suppose we want to cache a list of
                    products for a short period.</p>
                <CodeSnippet language="csharp" code={`using Microsoft.Extensions.Caching.Memory;

public class ProductsController : ControllerBase
{
    private readonly IMemoryCache _memoryCache;
    private readonly ApplicationDbContext _context;

    public ProductsController(IMemoryCache memoryCache, ApplicationDbContext context)
    {
        _memoryCache = memoryCache;
        _context = context;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        // Try to get data from cache
        if (!_memoryCache.TryGetValue("products", out List<Product> products))
        {
            // If not found in cache, fetch from the database
            products = await _context.Products.ToListAsync();

            // Set data in cache with an expiration time of 5 minutes
            _memoryCache.Set("products", products, TimeSpan.FromMinutes(5));
        }

        return Ok(products);
    }
}`} />
                <br></br>
                <h4>Explanation:</h4>
                <ul>
                    <li>We first try to retrieve the list of products from the cache using&nbsp;
                        <code>_memoryCache.TryGetValue("products", out List&lt;Product&gt; products)</code>.
                    </li>
                    <li>If the data is not found in the cache, we fetch it from the database and store it in the
                        cache with an expiration time of 5 minutes using&nbsp;
                        <code>_memoryCache.Set("products", products, TimeSpan.FromMinutes(5))</code>.
                    </li>
                    <li>The next time the API is called, the cached data will be returned, improving performance.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Implementing Distributed Caching</h2>
                <p>For applications running in a distributed environment (e.g., in the cloud or across multiple
                    servers), you’ll want to use a distributed cache such as Redis. Redis provides a
                    high-performance in-memory store that can be shared across multiple application instances.</p>

                <h3>Step 1: Install the Redis NuGet Package</h3>
                <p>To use Redis as a distributed cache, install the&nbsp;
                    <code>Microsoft.Extensions.Caching.StackExchangeRedis</code> NuGet package.
                </p>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.Extensions.Caching.StackExchangeRedis`} />
                <br></br>

                <h3>Step 2: Configure Redis in Startup.cs or Program.cs</h3>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddStackExchangeRedisCache(options =>
    {
        options.Configuration = "localhost:6379"; // Redis server location
        options.InstanceName = "MyApp_"; // Optional instance name
    });

    services.AddControllers();
}`} />
                <br></br>

                <h3>Step 3: Using Redis Cache in Controllers</h3>
                <p>Once Redis is set up, you can use it in the same way as in-memory caching. Let’s update the&nbsp;
                    <code>ProductsController</code> to use Redis for caching:
                </p>
                <CodeSnippet language="csharp" code={`public class ProductsController : ControllerBase
{
    private readonly IDistributedCache _cache;
    private readonly ApplicationDbContext _context;

    public ProductsController(IDistributedCache cache, ApplicationDbContext context)
    {
        _cache = cache;
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        string cacheKey = "products";
        var cachedProducts = await _cache.GetStringAsync(cacheKey);

        if (cachedProducts == null)
        {
            // Cache miss: fetch from database and cache the result
            var products = await _context.Products.ToListAsync();
            var serializedProducts = JsonConvert.SerializeObject(products);
            await _cache.SetStringAsync(cacheKey, serializedProducts, new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5) // Cache for 5 minutes
            });

            return Ok(products);
        }

        // Cache hit: Deserialize and return cached data
        var cachedProductList = JsonConvert.DeserializeObject<List<Product>>(cachedProducts);
        return Ok(cachedProductList);
    }
}`} />
                <br></br>
                <h4>Explanation:</h4>
                <ul>
                    <li>We use <code>IDistributedCache</code> to interact with Redis.</li>
                    <li>We check if the product list is already cached using&nbsp;
                        <code>await _cache.GetStringAsync(cacheKey)</code>.
                    </li>
                    <li>If the cache miss occurs, we fetch the data from the database, serialize it, and store it in
                        Redis with an expiration time.</li>
                    <li>On subsequent requests, the data is retrieved from the cache.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 3: Implementing Output Caching</h2>
                <p>Output caching allows you to cache the result of entire API requests based on the request
                    parameters. This is useful when you have requests that generate similar responses frequently and
                    don’t change often, such as retrieving a list of products with specific filters.</p>

                <h3>Step 1: Install the Output Caching Package</h3>
                <p>For output caching in .NET, you can use the <code>Microsoft.AspNetCore.ResponseCaching</code>
                    package.</p>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.AspNetCore.ResponseCaching`} />
                <br></br>

                <h3>Step 2: Configure Response Caching</h3>
                <CodeSnippet language="csharp" code={`public void ConfigureServices(IServiceCollection services)
{
    services.AddResponseCaching(); // Add Response Caching Service
    services.AddControllers();
}`} />
                <br></br>

                <h3>Step 3: Apply Output Caching to API Endpoints</h3>
                <p>You can now apply output caching to specific API endpoints by using the&nbsp;
                    <code>[ResponseCache]</code> attribute.
                </p>
                <CodeSnippet language="csharp" code={`[HttpGet]
[ResponseCache(Duration = 60)] // Cache the response for 60 seconds
public async Task<ActionResult<IEnumerable<Product>>> GetCachedProducts()
{
    var products = await _context.Products.ToListAsync();
    return Ok(products);
}`} />
                <br></br>
                <h4>Explanation:</h4>
                <ul>
                    <li><code>[ResponseCache(Duration = 60)]</code>: This attribute tells the API to cache the
                        response for 60 seconds. You can also set other parameters like <code>VaryByQueryKeys</code>
                        &nbsp;to cache different responses for different query parameters.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Cache Eviction and Invalidation</h2>
                <p>It’s important to remember that cache data should eventually expire or be invalidated when the
                    underlying data changes. You can handle cache eviction and invalidation in various ways:</p>
                <ul>
                    <li><strong>Time-based Expiration:</strong> Set expiration times when adding data to the cache
                        (e.g., AbsoluteExpirationRelativeToNow).</li>
                    <li><strong>Event-based Invalidation:</strong> When data is modified (e.g., a product is
                        updated), clear the relevant cache entry.</li>
                </ul>
                <CodeSnippet language="csharp" code={`_cache.Remove("products"); // Clear cache when products are updated`} />
            </Section>

            <Section>
                <h2>Step 5: Best Practices for Caching</h2>
                <ul>
                    <li><strong>Cache Only What Makes Sense:</strong> Not all data should be cached. Cache only data
                        that is frequently accessed and doesn’t change often.</li>
                    <li><strong>Set Appropriate Expiration:</strong> Don’t cache data forever. Always set an
                        expiration time to ensure the cache remains up-to-date.</li>
                    <li><strong>Monitor Cache Health:</strong> Implement logging and monitoring for your caching
                        system to track cache hits, misses, and failures.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Caching is a powerful technique to improve the performance and scalability of your .NET API. By
                    implementing caching, you can:</p>
                <ul>
                    <li>Reduce response times and improve user experience.</li>
                    <li>Decrease the load on backend systems like databases and external services.</li>
                    <li>Enhance scalability, allowing your API to handle more traffic efficiently.</li>
                </ul>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>How to implement in-memory caching for fast, temporary data storage.</li>
                    <li>How to implement distributed caching with Redis for a shared cache across multiple servers.
                    </li>
                    <li>How to implement output caching for entire API responses.</li>
                    <li>How to manage cache expiration and invalidation to keep data fresh.</li>
                </ul>
                <p>With caching in place, your API will be able to handle large volumes of traffic while providing
                    fast responses, improving both performance and scalability.</p>
            </Section>

        </>
    );
}