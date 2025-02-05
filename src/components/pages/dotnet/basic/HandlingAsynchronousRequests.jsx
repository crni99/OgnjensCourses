import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function HandlingAsynchronousRequests() {

    return (
        <>
            <Lead
                title="Handling Asynchronous Requests: Writing Efficient Non-blocking Code in
                    .NET"
                paragraph1="Master asynchronous programming in .NET to build responsive, scalable web
                    APIs that efficiently handle multiple requests."
                paragraph2="Asynchronous programming is essential for building responsive and scalable applications, especially
                    in web APIs, where handling multiple requests efficiently is key to providing a seamless user
                    experience. By writing non-blocking code, your application can perform time-consuming operations,
                    like database queries or external API calls, without freezing the main thread or becoming
                    unresponsive."
            />

            <Section>
                <h2>What is Asynchronous Programming?</h2>
                <p>Asynchronous programming allows a program to perform multiple operations concurrently, without
                    blocking the execution of other tasks. Instead of waiting for an operation (e.g., a database
                    query, file I/O, or web service call) to complete, asynchronous programming lets the program
                    continue executing other tasks while waiting for the operation to finish.</p>
                <p>In .NET, asynchronous programming is facilitated through the <code>async</code> and&nbsp;
                    <code>await</code> keywords, which are used to mark methods as asynchronous and allow for
                    non-blocking code execution.
                </p>
            </Section>

            <Section>
                <h2>Step 1: Understanding Async and Await in .NET</h2>
                <p>The core concept of asynchronous programming in .NET revolves around the <code>async</code> and&nbsp;
                    <code>await</code> keywords. Let’s take a look at how they work.
                </p>
                <h3>Async Method Definition</h3>
                <p>To define an asynchronous method, we use the <code>async</code> keyword before the method
                    signature. The method should return a <code>Task</code>, <code>Task&lt;T&gt;</code>, or&nbsp;
                    <code>ValueTask&lt;T&gt;</code>. The <code>await</code> keyword is then used to mark points in
                    the method where the program should "pause" while awaiting the result of an asynchronous
                    operation.
                </p>
                <CodeSnippet language="csharp" code={`public async Task<string> GetDataAsync()
{
    // Simulate an asynchronous operation (e.g., web request, database query)
    await Task.Delay(2000);  // Simulates a 2-second delay
    return "Data fetched successfully!";
}`} />
                <p>In this example:</p>
                <ul>
                    <li>The method <code>GetDataAsync</code> is marked with <code>async</code>, and it returns a&nbsp;
                        <code>Task&lt;string&gt;</code>.
                    </li>
                    <li>Inside the method, <code>await Task.Delay(2000)</code> simulates an asynchronous operation
                        (a 2-second delay). While this operation is in progress, the method does not block the
                        thread and can continue executing other tasks.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Handling Asynchronous Requests in a Web API Controller</h2>
                <p>In a web API, asynchronous methods are crucial for preventing blocking behavior during operations
                    like database queries, file uploads, or calls to external services. By using asynchronous
                    controllers, we allow the web server to handle multiple requests concurrently without waiting
                    for long-running operations to complete.</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;
using MyApiProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyApiProject.Controllers
{
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
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();  // Asynchronous database query
            return Ok(products);
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);  // Asynchronous database query
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
    }
}`} />
                <p>In this example:</p>
                <ul>
                    <li>The <code>GetProducts</code> and <code>GetProduct</code> methods are both asynchronous,
                        marked with the <code>async</code> keyword, and return a&nbsp;
                        <code>Task&lt;ActionResult&gt;</code>.
                    </li>
                    <li>Inside these methods, we use <code>await</code> to call asynchronous operations like&nbsp;
                        <code>ToListAsync()</code> and <code>FindAsync()</code> (EF Core methods that interact with
                        the database asynchronously).
                    </li>
                    <li>By using asynchronous operations like <code>ToListAsync()</code> and&nbsp;
                        <code>FindAsync()</code>, the controller can handle incoming requests without blocking the
                        thread, which improves scalability.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 3: Writing Efficient Non-blocking Code</h2>
                <p>When building an API, the goal is to ensure that requests are handled efficiently and quickly.
                    Let’s dive into some best practices for writing non-blocking code that minimizes waiting time
                    and maximizes responsiveness.</p>
                <h3>3.1 Avoiding Blocking Calls</h3>
                <p>One of the most common mistakes in asynchronous programming is mixing blocking and non-blocking
                    code. For example, using synchronous database methods (like <code>ToList()</code> instead of&nbsp;
                    <code>ToListAsync()</code>) can block the thread and reduce the performance of your API.
                </p>
                <CodeSnippet language="csharp" code={`// Avoid this synchronous call in asynchronous methods
var products = _context.Products.ToList();  // Blocks the thread`} />
                <p>Instead, always use the asynchronous versions of methods, such as <code>ToListAsync()</code>,&nbsp;
                    <code>FindAsync()</code>, and <code>SaveChangesAsync()</code>, which allow the program to
                    continue executing other tasks while waiting for the database operation to complete.
                </p>

                <h3>3.2 Managing I/O-bound Operations</h3>
                <p>Asynchronous programming is particularly useful for I/O-bound operations such as:</p>
                <ul>
                    <li>Database queries</li>
                    <li>File operations</li>
                    <li>Web API calls</li>
                    <li>External service requests</li>
                </ul>
                <p>By marking these operations as asynchronous, the server can continue processing other requests
                    while waiting for the I/O operation to complete.</p>
                <CodeSnippet language="csharp" code={`public async Task<string> GetExternalDataAsync()
{
    using (var client = new HttpClient())
    {
        var response = await client.GetAsync("https://api.example.com/data");
        return await response.Content.ReadAsStringAsync();
    }
}`} />
                <p>Here, the <code>GetExternalDataAsync</code> method performs a non-blocking HTTP request to an
                    external API and asynchronously waits for the response.</p>
                <h3>3.3 Using Task.WhenAll for Concurrent Operations</h3>
                <p>When you need to perform multiple asynchronous operations simultaneously, you can use&nbsp;
                    <code>Task.WhenAll()</code> to wait for all tasks to complete in parallel. This can
                    significantly improve performance when you need to execute multiple I/O-bound operations at
                    once.
                </p>
                <CodeSnippet language="csharp" code={`public async Task<IActionResult> GetProductsAndExternalData()
{
    var productsTask = _context.Products.ToListAsync();  // Asynchronous database query
    var externalDataTask = GetExternalDataAsync();       // Asynchronous external API call

    // Wait for both tasks to complete
    await Task.WhenAll(productsTask, externalDataTask);

    var products = productsTask.Result;
    var externalData = externalDataTask.Result;

    return Ok(new { products, externalData });
}`} />
                <p>By using <code>Task.WhenAll</code>, both the database query and the external API call are
                    performed concurrently, which reduces overall waiting time.</p>
            </Section>

            <Section>
                <h2>Step 4: Avoiding Thread Pool Exhaustion</h2>
                <p>Be mindful of thread pool exhaustion, which occurs when too many tasks are running concurrently.
                    Always use asynchronous I/O-bound operations and avoid using <code>Task.Run()</code> for
                    CPU-bound work.</p>
                <CodeSnippet language="csharp" code={`public async Task<IActionResult> ProcessHeavyTaskAsync()
{
    // Incorrect: Blocking thread pool with a long-running CPU task
    await Task.Run(() => PerformHeavyComputation());
}`} />
                <p>In the above example, <code>Task.Run()</code> blocks a thread pool thread unnecessarily. Refactor
                    such tasks to run asynchronously when possible.</p>
            </Section>

            <Section>
                <h2>Step 5: Handling Timeouts and Cancellations</h2>
                <p>When performing asynchronous operations, it's crucial to handle timeouts and cancellations. Use&nbsp;
                    <code>CancellationToken</code> to allow tasks to be canceled gracefully.
                </p>
                <CodeSnippet language="csharp" code={`public async Task<IActionResult> GetProductsWithTimeout(CancellationToken cancellationToken)
{
    try
    {
        var products = await _context.Products.ToListAsync(cancellationToken);  // Supports cancellation
        return Ok(products);
    }
    catch (OperationCanceledException)
    {
        return StatusCode(408, "Request Timeout");  // Handle timeout gracefully
    }
}`} />
                <p>In this example, the <code>CancellationToken</code> is passed to the <code>ToListAsync</code>
                    &nbsp;method, allowing the operation to be canceled if it takes too long. If canceled, an appropriate
                    status code is returned.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By leveraging the <code>async</code> and <code>await</code> keywords, we can perform long-running
                    operations like database queries, file I/O, or API calls without blocking the main thread. This
                    allows the application to handle many requests concurrently, resulting in a scalable, responsive
                    API.</p>
                <p>Key takeaways:</p>
                <ul>
                    <li>The basics of asynchronous programming using async and await.</li>
                    <li>How to handle asynchronous requests in ASP.NET Core controllers.</li>
                    <li>Best practices for writing efficient non-blocking code.</li>
                    <li>How to handle concurrency, timeouts, and cancellations in asynchronous methods.</li>
                </ul>
                <p>By incorporating these techniques, you can build performant, scalable systems that can
                    efficiently handle multiple requests simultaneously.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION} nextPage={RoutePath.SEARCHING_FILTERING_PAGING_RESOURCES} />

        </>
    );
}