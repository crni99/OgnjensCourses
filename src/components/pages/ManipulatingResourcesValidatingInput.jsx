import Lead from "../common/Lead";
import Section from "../common/Section";
import CodeSnippet from '../common/CodeSnippet';

export default function ManipulatingResourcesValidatingInput() {

    return (
        <>
            <Lead
                title="Manipulating Resources and Validating Input: Ensuring Data Integrity
                    in .NET Web APIs"
                paragraph1="Learn how to manipulate resources effectively and ensure data integrity by
                    validating input in your .NET Web APIs."
                paragraph2="When building APIs, ensuring data integrity is crucial. Properly validating input, managing
                    resources, and handling errors can help avoid unexpected behaviors, improve security, and create
                    reliable systems. In this post, we’ll cover how to manipulate resources effectively and ensure data
                    integrity by validating input in a .NET Web API."
            />

            <Section>
                <h2>Why is Data Integrity Important?</h2>
                <p>Data integrity ensures that data remains accurate, consistent, and reliable over time. In the
                    context of APIs, this includes:</p>
                <ul>
                    <li><strong>Validating Input:</strong> Ensuring that incoming data is correct and meets the
                        expected structure.</li>
                    <li><strong>Handling Errors Properly:</strong> Managing exceptions and returning the appropriate
                        HTTP status codes and error messages.</li>
                    <li><strong>Preventing Invalid Operations:</strong> Making sure users can’t perform actions that
                        might corrupt the system or lead to unintended consequences.</li>
                </ul>

                <h2>1. Validating Input in .NET Web API</h2>
                <p>In any application, you need to verify that the data users send to your API is valid before
                    processing it. .NET provides built-in tools to help validate input, ensuring data integrity
                    before it reaches your application logic.</p>

                <h3>Using Data Annotations</h3>
                <p>One of the simplest ways to validate data is by using data annotations. These are attributes you
                    can apply to your model’s properties to enforce validation rules.</p>

                <h4>Example: Defining a Product Model with Validation</h4>
                <CodeSnippet language="csharp" code={`using System.ComponentModel.DataAnnotations;

namespace MyApiProject.Models
{
    public class Product
    {
        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        [Range(0.01, 9999.99)]
        public decimal Price { get; set; }

        [StringLength(500)]
        public string Description { get; set; }
    }
}`} />
                <br></br>
                <p>Here’s what the annotations do:</p>
                <ul>
                    <li><strong>[Required]:</strong> Ensures that the field is not null or empty.</li>
                    <li><strong>[StringLength]:</strong> Limits the number of characters a string can have.</li>
                    <li><strong>[Range]:</strong> Ensures the Price is within a valid range (greater than 0 and less
                        than 10,000).</li>
                </ul>

                <h3>Applying Model Validation in Controller Actions</h3>
                <p>When data is sent in a POST or PUT request, it is automatically bound to the corresponding model
                    in the controller method. You can then validate the model using the ModelState.IsValid property.
                </p>
                <CodeSnippet language="csharp" code={`[HttpPost]
public ActionResult<Product> CreateProduct([FromBody] Product product)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);  // Return 400 Bad Request if validation fails
    }

    // Simulate adding the product to a data store (e.g., in-memory list)
    Products.Add(product);

    return CreatedAtAction(nameof(GetProduct), new {id = Products.Count - 1}, product);
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>If the Product model is invalid (e.g., if Name is missing or Price is out of range), the API
                        will respond with a 400 Bad Request and include details about the validation errors.</li>
                    <li>If the model is valid, the product is added to the collection, and a 201 Created response is
                        returned.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>2. Handling Resource Manipulation with Validation</h2>
                <p>Validating Input on Updates (PUT/PATCH)</p>
                <CodeSnippet language="csharp" code={`[HttpPut("{id}")]
public IActionResult UpdateProduct(int id, [FromBody] Product product)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound();  // Return 404 if product with given ID doesn't exist
    }

    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);  // Return 400 if validation fails
    }

    // Update the product
    Products[id] = product;
    return NoContent();  // Return 204 No Content to indicate success
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>Validate the ID to ensure the product exists.</li>
                    <li>Validate the input using ModelState.IsValid.</li>
                    <li>Update the product only if both validations pass.</li>
                </ul>
                <br></br>
                <h3>Ensuring Valid Data with PATCH</h3>
                <p>In case of partial updates, you should also ensure that the data being patched is valid.</p>
                <CodeSnippet language="csharp" code={`[HttpPatch("{id}")]
public IActionResult PartiallyUpdateProduct(int id, [FromBody] JsonPatchDocument&lt;Product&gt; patchDoc)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound();  // Return 404 if product with given ID doesn't exist
    }

    if (patchDoc == null)
    {
        return BadRequest();  // Return 400 if patch document is null
    }

    var productToUpdate = Products[id];
    patchDoc.ApplyTo(productToUpdate, ModelState);  // Apply the patch

    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);  // Return 400 if validation fails
    }

    return NoContent();  // Return 204 No Content to indicate success
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>The JsonPatchDocument is used to apply partial changes to the product.</li>
                    <li>We validate both the patch document and the resulting model using ModelState.</li>
                </ul>
            </Section>

            <Section>
                <h2>3. Handling Errors and Data Integrity</h2>
                <p>Ensuring data integrity doesn’t stop at validation. You also need to handle errors properly,
                    especially when dealing with database transactions or external resources.</p>

                <h3>Centralized Error Handling with Middleware</h3>
                <p>In .NET, you can use middleware to handle errors globally across your API. This can simplify
                    error management and ensure that your API always returns a consistent error response format.</p>
                <CodeSnippet language="csharp" code={`public static IApplicationBuilder UseGlobalExceptionHandler(this IApplicationBuilder app)
{
    app.UseExceptionHandler(builder =>
    {
        builder.Run(async context =>
        {
            context.Response.StatusCode = 500;  // Internal Server Error status code
            context.Response.ContentType = "application/json";

            var exception = context.Features.Get&lt;IExceptionHandlerFeature&gt;()?.Error;
            if (exception != null)
            {
                var errorResponse = new { message = exception.Message };
                await context.Response.WriteAsJsonAsync(errorResponse);
            }
        });
    });

    return app;
}`} />
                <br></br>
                <p>Then, call this method in the Configure method:</p>
                <CodeSnippet language="csharp" code={`public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseGlobalExceptionHandler();  // Use the global error handler
    app.UseRouting();
    app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
}`} />
                <br></br>
                <p>
                    This middleware will catch all unhandled exceptions and return a 500 Internal Server Error
                    response, along with a basic error message.
                </p>
            </Section>

            <Section>
                <h2>4. Using Transactions for Data Integrity</h2>
                <p>When manipulating resources, especially in scenarios that involve database operations, you must
                    ensure data integrity in case of errors during processing. Using transactions ensures that
                    either all changes are committed or none at all.</p>

                <h3>Example: Using Transactions in Entity Framework</h3>
                <p>Let’s say you have a Product entity in a database and want to perform multiple operations, such
                    as creating a product and updating an existing one, in a single transaction.
                </p>
                <CodeSnippet language="csharp" code={`public async Task<ActionResult<Product>> CreateAndUpdateProductAsync(Product newProduct, int updateProductId)
{
    using (var transaction = await _context.Database.BeginTransactionAsync())
    {
        try
        {
            // Create a new product
            _context.Products.Add(newProduct);
            await _context.SaveChangesAsync();

            // Update another product
            var existingProduct = await _context.Products.FindAsync(updateProductId);
            if (existingProduct == null)
            {
                return NotFound();
            }
            existingProduct.Name = "Updated Product Name";
            await _context.SaveChangesAsync();

            // Commit the transaction
            await transaction.CommitAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = newProduct.Id }, newProduct);
        }
        catch (Exception)
        {
            // Rollback the transaction in case of an error
            await transaction.RollbackAsync();
            return StatusCode(500, "Internal server error while processing the request.");
        }
    }
}`} />
                <br></br>
                <p>
                    In this example:
                </p>
                <ul>
                    <li>A transaction is used to ensure that both operations (creating and updating) either succeed
                        or fail together.</li>
                    <li>If an exception occurs, the transaction is rolled back to maintain data integrity.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Validating input and handling resource manipulation effectively is key to maintaining data
                    integrity in your APIs. .NET provides powerful tools such as data annotations, ModelState
                    validation, and middleware for error handling to ensure the robustness of your API.
                    Additionally, using transactions for database operations helps maintain data consistency.</p>
                <p>By following these practices, you:</p>
                <ul>
                    <li>Ensure that your API can handle incorrect or malicious data input gracefully.</li>
                    <li>Maintain the integrity of your system through proper error handling and validation.</li>
                    <li>Provide your users with a more reliable, secure, and predictable API experience.</li>
                </ul>
            </Section>

        </>
    );
}