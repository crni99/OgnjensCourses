import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function EntityFrameworkCoreSetup() {

    return (
        <>
            <Lead
                title="Getting Acquainted with Entity Framework Core ORM Basics and Setup"
                paragraph1="Learn how to set up Entity Framework Core and perform basic CRUD operations
                    in a .NET application."
                paragraph2="Entity Framework Core (EF Core) is a powerful Object-Relational Mapping (ORM) framework for .NET
                    that allows developers to interact with databases using .NET objects. EF Core eliminates the need to
                    write raw SQL queries by providing a high-level abstraction, making data access easier and more
                    efficient."
            />

            <Section>
                <h2>What is Entity Framework Core?</h2>
                <p>Entity Framework Core (EF Core) is an open-source, lightweight, and extensible ORM for .NET
                    applications. It enables developers to work with a database using .NET objects, without having
                    to write SQL queries manually. EF Core supports LINQ (Language Integrated Query), which allows
                    querying databases using C# syntax, and it also supports migrations, ensuring that your database
                    schema evolves alongside your code.</p>
                <p>EF Core provides several key features:</p>
                <ul>
                    <li>Code-First and Database-First approaches for defining the database schema.</li>
                    <li>Migrations for database schema updates.</li>
                    <li>Change Tracking to track changes to entities and automatically update the database.</li>
                    <li>LINQ Queries for querying data with strongly-typed syntax.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Installing EF Core in a .NET Project</h2>
                <p>To get started with EF Core, you need to install the required NuGet packages. Follow these steps:
                </p>
                <ol>
                    <li>Open the NuGet Package Manager and install the following EF Core packages:</li>
                </ol>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.EntityFrameworkCore`} />
                <br></br>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.EntityFrameworkCore.SqlServer`} />
                <br></br>
                <CodeSnippet language="shell" code={`dotnet add package Microsoft.EntityFrameworkCore.Tools`} />
                <br></br>
                <p>The Microsoft.EntityFrameworkCore package is the core EF Core library, while
                    Microsoft.EntityFrameworkCore.SqlServer is for SQL Server (use the appropriate package if you're
                    using another database). You can install these using the NuGet Package Manager Console or by
                    running the dotnet command in the terminal.</p>
            </Section>

            <Section>
                <h2>Step 2: Define Your Model Classes</h2>
                <p>EF Core uses model classes to represent the data in your application. These classes are typically
                    POCOs (Plain Old CLR Objects) with properties that correspond to columns in your database.</p>
                <p>Example: Defining a Product Model</p>
                <CodeSnippet language="csharp" code={`namespace MyApiProject.Models
{
    public class Product
    {
        public int Id {get; set; }  // Primary Key
        public string Name {get; set; }
        public decimal Price {get; set; }
        public string Description {get; set; }
    }
}`} />
                <br></br>
                <p>The Product class represents a product entity with Id, Name, Price, and Description as its
                    properties. The Id property will be treated as the primary key by EF Core by convention.</p>
            </Section >

            <Section>
                <h2>Step 3: Create a Database Context</h2>
                <p>EF Core uses a DbContext to manage entity objects during runtime and interact with the database.
                    The DbContext is responsible for tracking changes, querying data, and saving data to the
                    database.</p>
                <p>Example: Creating the ApplicationDbContext</p>
                <CodeSnippet language="csharp" code={`using Microsoft.EntityFrameworkCore;

namespace MyApiProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Product> Products {get; set; }  // Represents the Products table in the database
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>ApplicationDbContext inherits from DbContext and defines a DbSet&lt;Product&gt;.</li>
                    <li>The DbSet&lt;Product&gt; represents the Products table in the database.</li>
                    <li>The DbContextOptions&lt;ApplicationDbContext&gt; is passed to the base class to configure
                        the database connection.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Configuring the Database Connection</h2>
                <p>Before you can use EF Core, you need to configure the database connection in the Program.cs (or
                    Startup.cs) file.</p>
                <p>Example: Configuring the Database Connection in Program.cs</p>
                <CodeSnippet language="csharp" code={`using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;

var builder = WebApplication.CreateBuilder(args);

// Add DbContext to the DI container
builder.Services.AddDbContext&lt;ApplicationDbContext&gt;(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();

var app = builder.Build();

// Use routing and endpoints for the API
app.UseRouting();
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.Run();`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>We configure the ApplicationDbContext by calling AddDbContext&lt;ApplicationDbContext&gt;(),
                        passing in a connection string to the SQL Server database.</li>
                    <li>The connection string is typically stored in appsettings.json.</li>
                </ul>
                <p>Ensure that your appsettings.json contains the correct connection string:</p>
                <CodeSnippet language="json" code={`{
"ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MyApiDb;Trusted_Connection=True;"
  }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>The connection string DefaultConnection points to a local SQL Server database.</li>
                    <li>You can replace it with the appropriate connection string for your environment.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Running Migrations to Create the Database</h2>
                <p>Once you have set up your models and DbContext, you can use migrations to create the database
                    schema based on your models.</p>
                <p>5.1. Adding a Migration</p>
                <p>First, add a migration to generate the database schema.
                </p>
                <CodeSnippet language="shell" code={`dotnet ef migrations add InitialCreate`} />
                <br></br>
                <p>This will generate migration files that contain instructions for creating the Products table in
                    the database.</p>
                <p>5.2. Applying the Migration to the Database</p>
                <CodeSnippet language="shell" code={`dotnet ef database update`} />
                <br></br>
                <p>
                    This command will create the database (if it doesn’t exist) and apply the migration to create
                    the Products table in the database.
                </p>
            </Section>

            <Section>
                <h2>Step 6: Performing CRUD Operations Using EF Core</h2>
                <p>Now that your database is set up, you can start performing CRUD operations using EF Core. Let’s
                    add some methods to our controller to interact with the Products table.</p>
                <p>Example: Creating the Products Controller</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;
using MyApiProject.Models;

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
            return await _context.Products.ToListAsync();
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // POST: api/products
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new {id = product.Id}, product);
        }

        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
                if (product == null)
                {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>The controller uses EF Core to interact with the database.</li>
                    <li>GET methods retrieve products.</li>
                    <li>POST adds a new product.</li>
                    <li>PUT updates an existing product.</li>
                    <li>DELETE removes a product.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Entity Framework Core is a powerful tool that allows you to interact with a database using
                    object-oriented models. By setting up a DbContext, defining your models, and configuring
                    migrations, you can easily work with a database in your .NET applications.</p>
                <p>In this post, we've walked through the basics of EF Core setup, defining models, configuring the
                    database context, running migrations, and performing basic CRUD operations. With this knowledge,
                    you can start building more complex applications that interact with databases using EF Core.</p>
            </Section>

        </>
    );
}