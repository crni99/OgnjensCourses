import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function WorkingWithServicesDependencyInjection() {

    return (
        <>
            <Lead
                title="Working with Services and Dependency Injection: Decoupling Business
                    Logic in .NET Web API"
                paragraph1="Learn how to use services and dependency injection to structure your .NET
                    Web API for cleaner, maintainable, and testable code."
                paragraph2="As your application grows, separating concerns and decoupling components becomes increasingly
                    important. One of the best ways to achieve this is by utilizing services and dependency injection
                    (DI) in your .NET Web API. By isolating business logic into services, you can make your application
                    more maintainable, testable, and scalable."
            />

            <Section>
                <h2>What is Dependency Injection?</h2>
                <p>Dependency Injection (DI) is a design pattern that allows you to inject dependencies into a
                    class, rather than creating them inside the class itself. This promotes loose coupling and
                    increases the flexibility of your code, making it easier to test and maintain.</p>
                <p>In a .NET Web API, DI is typically used to inject services (business logic, data access layers,
                    etc.) into controllers or other components, ensuring that the controller only handles HTTP
                    request/response logic and delegates the core business operations to services.</p>
            </Section>

            <Section>
                <h2>Why Decouple Business Logic into Services?</h2>
                <p>When you structure your application by separating concerns, you achieve several benefits:</p>
                <ul>
                    <li><strong>Separation of Concerns (SoC):</strong> The controller is only responsible for
                        handling HTTP requests and responses, while the service handles business logic.</li>
                    <li><strong>Reusability:</strong> Business logic encapsulated in services can be reused in
                        different parts of your application.</li>
                    <li><strong>Testability:</strong> Services can be unit-tested independently from the controller,
                        which improves the maintainability of your application.</li>
                    <li><strong>Flexibility:</strong> It becomes easier to replace or modify the service layer
                        without affecting the controller or other components.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Define the Service Interface</h2>
                <p>Let’s begin by defining a service that will contain the business logic. We’ll start with a simple
                    example where we manage Product resources.</p>
                <CodeSnippet language="csharp" code={`namespace MyApiProject.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        void CreateProduct(Product product);
        void UpdateProduct(int id, Product product);
        void DeleteProduct(int id);
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>IProductService defines the methods that we will implement in our service class.</li>
                    <li>The methods represent basic CRUD operations for the Product resource.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Implement the Service</h2>
                <p>Next, let's implement the service by creating a class that implements the&nbsp;
                    <code>IProductService</code> interface. This class will contain the business logic for managing
                    products.
                </p>
                <CodeSnippet language="csharp" code={`namespace MyApiProject.Services
{
    public class ProductService : IProductService
    {
        private readonly List<Product> _products;

        public ProductService()
        {
            _products = new List<Product>;
            {
                new Product { Id = 1, Name = "Laptop", Price = 1000 },
                new Product { Id = 2, Name = "Smartphone", Price = 700 }
            };
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _products;
        }

        public Product GetProductById(int id)
        {
            return _products.FirstOrDefault(p => p.Id == id);
        }

        public void CreateProduct(Product product)
        {
            _products.Add(product);
        }

        public void UpdateProduct(int id, Product product)
        {
            var existingProduct = _products.FirstOrDefault(p => p.Id == id);
            if (existingProduct != null)
            {
                existingProduct.Name = product.Name;
                existingProduct.Price = product.Price;
            }
        }

        public void DeleteProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.Id == id);
            if (product != null)
            {
                _products.Remove(product);
            }
        }
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>ProductService implements the methods defined in the IProductService interface.</li>
                    <li>The service manages an in-memory list of products (you could replace this with a database in
                        a real-world scenario).</li>
                    <li>The methods perform CRUD operations on the list of products.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 3: Register the Service with Dependency Injection</h2>
                <p>Now that we have our service, we need to register it with the .NET Dependency Injection
                    container. This step tells .NET to inject the service into the controllers whenever it is
                    needed.</p>
                <CodeSnippet language="csharp" code={`public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Register services with DI container
        builder.Services.AddScoped<IProductService, ProductService>();

        builder.Services.AddControllers();
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        app.Run();
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>We use AddScoped&lt;IProductService, ProductService&gt;() to register the ProductService
                        with the DI container.
                    </li>
                    <li>Scoped means that the service will be created once per request.</li>
                    <li>Now, whenever a controller requires IProductService, .NET will inject an instance of
                        ProductService.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Injecting the Service into the Controller</h2>
                <p>Now that we’ve registered the service, we can inject it into a controller. The controller will
                    delegate all business logic operations to the service, which keeps the controller clean and
                    focused solely on handling HTTP requests and responses.</p>
                <CodeSnippet language="csharp" code={`namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            var products = _productService.GetAllProducts();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _productService.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public ActionResult CreateProduct([FromBody] Product product)
        {
            _productService.CreateProduct(product);
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] Product product)
        {
            _productService.UpdateProduct(id, product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            _productService.DeleteProduct(id);
            return NoContent();
        }
    }
}`} />
                <br></br>
                <p>
                    In this controller:
                </p>
                <ul>
                    <li>The constructor receives an instance of IProductService via dependency injection.
                    </li>
                    <li>We call the service methods (GetAllProducts, GetProductById, etc.) to perform the required
                        operations and return the appropriate HTTP responses.
                    </li>
                    <li>This decouples the business logic from the controller, allowing you to easily modify or test
                        the business logic without affecting the controller.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Testing the Service Layer</h2>
                <p>Because the business logic is isolated in services, testing becomes much easier. You can write
                    unit tests for the service layer without involving the controller or the web framework.</p>
                <CodeSnippet language="csharp" code={`public class ProductServiceTests
{
    [Fact]
    public void GetAllProducts_Returns_All_Products()
    {
        var productService = new ProductService();
        var result = productService.GetAllProducts();
        Assert.Equal(2, result.Count());
    }

    [Fact]
    public void GetProductById_Returns_Correct_Product()
    {
        var productService = new ProductService();
        var result = productService.GetProductById(1);
        Assert.NotNull(result);
        Assert.Equal("Laptop", result.Name);
    }
}`} />
                <br></br>
                <p>
                    In these tests:
                </p>
                <ul>
                    <li>We create instances of ProductService and test its methods directly.
                    </li>
                    <li>There is no need to worry about HTTP or the web framework during testing, making it easier
                        to isolate and test the business logic.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By using services and dependency injection in your .NET Web API, you can decouple business logic
                    from your controllers, leading to cleaner, more maintainable, and more testable code. Services
                    handle the core functionality of your application, while controllers focus solely on HTTP
                    request/response handling. This separation of concerns improves the scalability of your
                    application and makes it easier to implement changes without affecting other parts of the
                    codebase.</p>
            </Section>

        </>
    );
}