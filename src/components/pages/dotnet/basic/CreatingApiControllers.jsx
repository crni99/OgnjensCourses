import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function CreatingApiControllers() {

    return (
        <>
            <Lead
                title="Creating the API and Returning Resources: Structuring Your Controllers
                    in .NET"
                paragraph1="Learn how to structure your controllers in a .NET Web API project, handle
                    resources, and return appropriate HTTP status codes, following RESTful principles."
                paragraph2="When building APIs, structuring your controllers correctly is essential for maintainability,
                    scalability, and clarity. Controllers are the backbone of your API endpoints, and how you organize
                    them can make a big difference in the readability and performance of your application."
            />

            <Section>
                <h2>Prerequisites</h2>
                <p>Before you begin, ensure you have the following:</p>
                <ul>
                    <li>A <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noreferrer" className="link-custom">.NET
                        project created for API development</a> (if you followed our previous post, you’ll
                        already have this set up).</li>
                    <li>Familiarity with the basic concepts of REST APIs and HTTP methods (GET, POST, PUT, DELETE).
                    </li>
                    <li>Basic knowledge of how to create and structure classes in C#.</li>
                </ul>
            </Section>

            <Section>
                <h2>Structuring Your Controllers in .NET</h2>
                <p>Controllers in .NET are responsible for handling incoming HTTP requests and returning appropriate
                    responses. They are typically placed in the <code>Controllers</code> directory of your project.
                </p>

                <p>A basic controller in .NET Web API typically inherits from <code>ControllerBase</code>, which
                    provides built-in methods to return responses. Each method in the controller corresponds to an
                    endpoint of the API.</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // Simulate a data store
        private static readonly List<string> Products = new List<string>
        {
            "Laptop", "Smartphone", "Tablet", "Smartwatch"
        };

        // GET api/products
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetProducts()
        {
            return Ok(Products); // Return the list of products with a 200 OK status
        }
    }
}`} />
                <br></br>
                <p>In this example:</p>
                <ul>
                    <li><strong>[Route("api/[controller]")]:</strong> Defines the base route for the controller. The
                        <code>[controller]</code> part is automatically replaced by the controller name (without
                        "Controller").
                    </li>
                    <li><strong>[ApiController]:</strong> Simplifies controller logic, enabling automatic response
                        formatting, model validation, and more.</li>
                </ul>
            </Section>

            <Section>
                <h2>Returning Resources: Common HTTP Methods</h2>
                <p>RESTful APIs use various HTTP methods to interact with resources. These methods include:</p>
                <ul>
                    <li><strong>GET:</strong> Retrieve data (read).</li>
                    <li><strong>POST:</strong> Create new data (create).</li>
                    <li><strong>PUT:</strong> Update existing data (replace).</li>
                    <li><strong>PATCH:</strong> Partially update existing data (modify).</li>
                    <li><strong>DELETE:</strong> Delete data (remove).</li>
                </ul>

                <p>Let’s explore how these methods are implemented in a controller for a resource, such as
                    <code>Product</code>.
                </p>
            </Section>

            <Section>
                <h2>GET - Retrieving Resources</h2>
                <CodeSnippet language="csharp" code={`// GET api/products
[HttpGet]
public ActionResult<IEnumerable<string>> GetProducts()
{
    return Ok(Products); // Return the list of products with a 200 OK status
}

// GET api/products/1
[HttpGet("{id}")]
public ActionResult<string> GetProduct(int id)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound(); // Return 404 if the product is not found
    }
    return Ok(Products[id]); // Return 200 OK with the product at index id
}`} />
                <br></br>
                <p>The GET method is used to retrieve resources. You can return a list of resources or a single
                    resource.</p>
                <p><code>Ok()</code> returns a 200 OK status with the data, while <code>NotFound()</code> returns a
                    404 status when the resource doesn't exist.</p>
            </Section>
            <h2>POST - Creating Resources</h2>
            <CodeSnippet language="csharp" code={`// POST api/products
[HttpPost]
public ActionResult<string> CreateProduct([FromBody] string product)
{
    Products.Add(product);
    return CreatedAtAction(nameof(GetProduct), new {id = Products.Count - 1}, product);
}`} />
            <br></br>
            <p>The POST method is used to create a new resource on the server.</p>
            <p><code>CreatedAtAction()</code> returns a 201 Created status and includes the URL to the newly
                created resource.</p>
            <p>
                <code>[FromBody]</code> binds the product parameter to the request body, meaning it expects data
                to be passed in the body of the request.
            </p>
            <Section>
                <h2>PUT - Updating Resources</h2>
                <CodeSnippet language="csharp" code={`// PUT api/products/1
[HttpPut("{id}")]
public IActionResult UpdateProduct(int id, [FromBody] string product)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound(); // Return 404 if the product does not exist
    }
    Products[id] = product;
    return NoContent(); // Return 204 No Content indicating the update was successful
}`} />
                <br></br>
                <p>
                    The PUT method is used for updating an existing resource. This method replaces the entire
                    resource.
                </p>
                <p><code>NoContent()</code> returns a 204 No Content status, indicating that the update was
                    successful with no additional content in the response.</p>
            </Section>

            <Section>
                <h2>PATCH - Partially Updating Resources</h2>
                <CodeSnippet language="csharp" code={`// PATCH api/products/1
[HttpPatch("{id}")]
public IActionResult PartiallyUpdateProduct(int id, [FromBody] string product)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound();
    }
    Products[id] = product; // Assuming only one field (name) is updated
    return NoContent();
}`} />
                <br></br>
                <p>The PATCH method is used for partial updates. You only update specific fields rather than
                    replacing the entire resource.
                </p>
                <p>The <code>PATCH</code> method is for partial updates. If you want to update just a single
                    property (like the product name), this method is ideal.</p>
            </Section>

            <Section>
                <h2>DELETE - Removing Resources</h2>
                <CodeSnippet language="csharp" code={`// DELETE api/products/1
[HttpDelete("{id}")]
public IActionResult DeleteProduct(int id)
{
    if (id < 0 || id >= Products.Count)
    {
        return NotFound();
    }
    Products.RemoveAt(id);
    return NoContent(); // Return 204 to indicate the product was deleted
}`} />
                <br></br>
                <p>The DELETE method is used to remove a resource from the server.
                </p>
                <p><code>RemoveAt(id)</code> removes the product from the list at the specified index, and&nbsp;
                    <code>NoContent()</code> indicates that the resource was successfully deleted.
                </p>
            </Section>

            <Section>
                <h2>Best Practices for Structuring Controllers</h2>
                <ul>
                    <li><strong>Keep Controllers Thin:</strong> Each controller should focus on a single resource or
                        closely related resources. Avoid large controllers with unrelated entities.</li>
                    <li><strong>Use Route Parameters Wisely:</strong> Routes should clearly indicate the resource
                        being manipulated. For example, use <code>api/products/id</code> for accessing individual
                        products.</li>
                    <li><strong>Consistent Naming Conventions:</strong> Use plural names for collections (e.g.,
                        <code>api/products</code>) and singular for individual resources (e.g.,
                        <code>api/products/id</code>).
                    </li>
                    <li><strong>Error Handling:</strong> Always handle errors gracefully with appropriate HTTP
                        status codes like 404 (Not Found), 400 (Bad Request), or 500 (Internal Server Error).</li>
                    <li><strong>Use ActionResult&lt;T&gt;:</strong> Returning <code>ActionResult&lt;T&gt;&nbsp;</code>
                        instead of just <code>T</code> allows you to return different HTTP status codes (e.g.,
                        NotFound, BadRequest) with the response data.</li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>By structuring your controllers effectively, you can create clear, maintainable, and scalable
                    APIs. This post covered the main HTTP methods (GET, POST, PUT, PATCH, DELETE) and demonstrated
                    how to implement them in .NET Web API controllers. We also discussed best practices for naming
                    conventions, error handling, and organizing your controller methods for efficiency and
                    readability.</p>
                <p>Keep these practices in mind as you continue to expand your API. A well-structured API is easy to
                    understand, use, and extend.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.ENTITY_FRAMEWORK_CORE_SETUP} nextPage={RoutePath.MANIPULATING_RESOURCES_VALIDATING_INPUT} />

        </>
    );
}