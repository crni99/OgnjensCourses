import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function SearchingFilteringPagingResources() {

    return (
        <>
            <Lead
                title="Searching, Filtering, and Paging Resources: Enhancing API Efficiency
                    in .NET"
                paragraph1="Learn how to implement searching, filtering, and paging in your .NET Web API
                    to ensure better performance and user experience."
                paragraph2="When building RESTful APIs, it's important to ensure that users can efficiently query resources,
                    especially as the number of records grows. Searching, filtering, and paging are essential features
                    that allow clients to retrieve only the data they need, reducing the amount of unnecessary data
                    transferred and improving performance."
            />

            <Section>
                <h2>Why Searching, Filtering, and Paging Are Important?</h2>
                <p>Searching, filtering, and paging are essential features in a RESTful API to ensure efficient data
                    retrieval. These features help:</p>
                <ul>
                    <li>Limit the amount of data transferred between the client and server.</li>
                    <li>Prevent performance bottlenecks in APIs dealing with large datasets.</li>
                    <li>Provide more flexibility and control to clients requesting data from the server.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Implementing Paging in Your API</h2>
                <p>Paging is crucial when dealing with large datasets. It allows splitting data into smaller,
                    manageable chunks, improving API performance.</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;
using MyApiProject.Models;
using System.Linq;
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

        // GET: api/products?pageNumber=1&pageSize=10
        [HttpGet]
        public async Task<ActionResult> GetPagedProducts(int pageNumber = 1, int pageSize = 10)
        {
            var products = await _context.Products
                .Skip((pageNumber - 1) * pageSize)  // Skips records based on page number
                .Take(pageSize)                    // Takes the specified page size
                .ToListAsync();

            return Ok(products);
        }
    }
}`} />
                <br></br>
                <p><strong>Example Request:</strong> GET /api/products?pageNumber=2&pageSize=10</p>
                <p>Explanation:</p>
                <ul>
                    <li>Default values: We provide default values for pageNumber (1) and pageSize (10) in case the
                        client doesn't supply them.
                    </li>
                    <li>Invalid page numbers or page sizes: You may want to validate the pageNumber and pageSize to
                        prevent users from requesting invalid pages (like negative numbers or excessively large
                        sizes).
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Implementing Filtering</h2>
                <p>Filtering allows users to narrow down search results based on specific criteria, such as category
                    or price range.</p>
                <CodeSnippet language="csharp" code={`[HttpGet]
public async Task<ActionResult> GetFilteredProducts(
    string category = null, 
    decimal? minPrice = null, 
    decimal? maxPrice = null, 
    int pageNumber = 1, 
    int pageSize = 10)
{
    var query = _context.Products.AsQueryable();  // Start with the base query

    // Apply category filter if provided
    if (!string.IsNullOrEmpty(category))
    {
        query = query.Where(p => p.Category == category);
    }

    // Apply price range filter if provided
    if (minPrice.HasValue)
    {
        query = query.Where(p => p.Price >= minPrice);
    }
    if (maxPrice.HasValue)
    {
        query = query.Where(p => p.Price <= maxPrice);
    }

    // Apply paging
    var products = await query
        .Skip((pageNumber - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    return Ok(products);
}`} />
                <br></br>
                <p><strong>Example Request:</strong> GET
                    /api/products?category=Electronics&minPrice=100&pageNumber=1&pageSize=10</p>
                <p>Explanation:</p>
                <ul>
                    <li>We start by creating an IQueryable query that can be modified based on the filters applied
                        by the user.
                    </li>
                    <li>Category filter: If the category parameter is provided, we apply the Where clause to filter
                        products by category.
                    </li>
                    <li>Price range filters: If minPrice or maxPrice are provided, we filter products to match the
                        specified price range.
                    </li>
                    <li>After applying filters, we use <code>Skip()</code> and <code>Take()</code> for paging.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 3: Implementing Searching</h2>
                <p>Searching allows users to find specific records based on partial matches (e.g., product names or
                    descriptions).</p>
                <CodeSnippet language="csharp" code={`[HttpGet]
public async Task<ActionResult> SearchProducts(string searchTerm = null, int pageNumber = 1, int pageSize = 10)
{
    var query = _context.Products.AsQueryable();  // Start with the base query

    // Apply search term filter if provided
    if (!string.IsNullOrEmpty(searchTerm))
    {
        query = query.Where(p => p.Name.Contains(searchTerm));  // Search by name
    }

    // Apply paging
    var products = await query
        .Skip((pageNumber - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    return Ok(products);
}`} />
                <br></br>
                <p><strong>Example Request:</strong> GET /api/products?searchTerm=phone&pageNumber=1&pageSize=10</p>
                <p>Explanation:</p>
                <ul>
                    <li>The SearchProducts action method accepts a searchTerm parameter, which is used to filter
                        products whose Name contains the search term (case-insensitive by default).
                    </li>
                    <li>We use the <code>Contains()</code> method to search for partial matches in the product name.
                    </li>
                    <li>After applying the search filter, we apply paging as before using <code>Skip()</code> and <code>Take()</code>.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Combining Search, Filter, and Paging</h2>
                <p>To create a more flexible and powerful query system, you can combine searching, filtering, and
                    paging in one request.</p>
                <CodeSnippet language="csharp" code={`[HttpGet]
public async Task<ActionResult> GetProducts(
    string searchTerm = null, 
    string category = null, 
    decimal? minPrice = null, 
    decimal? maxPrice = null, 
    int pageNumber = 1, int 
    pageSize = 10)
{
    var query = _context.Products.AsQueryable();  // Start with the base query

    // Apply search term filter if provided
    if (!string.IsNullOrEmpty(searchTerm))
    {
        query = query.Where(p => p.Name.Contains(searchTerm));  // Search by name
    }

    // Apply category filter if provided
    if (!string.IsNullOrEmpty(category))
    {
        query = query.Where(p => p.Category == category);
    }

    // Apply price range filter if provided
    if (minPrice.HasValue)
    {
        query = query.Where(p => p.Price >= minPrice);
    }
    if (maxPrice.HasValue)
    {
        query = query.Where(p => p.Price <= maxPrice);
    }

    // Apply paging
    var products = await query
        .Skip((pageNumber - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    return Ok(products);
}`} />
                <br></br>
                <p><strong>Example Request:</strong> GET
                    /api/products?searchTerm=phone&category=Electronics&minPrice=100&pageNumber=2&pageSize=5</p>
                <p>This request searches for products with the term "phone", filters by the "Electronics" category
                    and a price greater than 100, and retrieves the second page of results with 5 products per page.
                </p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By implementing searching, filtering, and paging in your .NET Web API, you ensure that users can
                    efficiently query and retrieve only the data they need, improving both performance and user
                    experience. These techniques are essential as your data grows and your API becomes more complex.
                </p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li><strong>Paging:</strong> Splitting large datasets into smaller chunks to improve
                        performance.</li>
                    <li><strong>Filtering:</strong> Allowing users to narrow down their search by specific criteria.
                    </li>
                    <li><strong>Searching:</strong> Enabling full-text search functionality for product names and
                        descriptions.</li>
                </ul>
                <p>By combining these features, you can make your API much more efficient and user-friendly.</p>
            </Section>

        </>
    );
}