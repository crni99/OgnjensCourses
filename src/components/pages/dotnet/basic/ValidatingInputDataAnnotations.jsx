import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNetBasic";

export default function ValidatingInputDataAnnotations() {

    return (
        <>
            <Lead
                title="Validating Input Data Using Data Annotations and Custom Validators in
                    .NET"
                paragraph1="Learn how to validate input data effectively using Data Annotations and
                    Custom Validators in .NET, ensuring data integrity and preventing erroneous input."
                paragraph2="Data validation is a crucial aspect of ensuring data integrity and preventing malicious or erroneous
                    input in applications. In .NET, input validation can be easily handled using Data Annotations and
                    Custom Validators. This ensures that the data entering your system meets the expected criteria,
                    whether it’s user input from a web form or API request."
            />

            <Section>
                <h2>What are Data Annotations?</h2>
                <p>Data Annotations are attributes in .NET that can be applied to model properties to enforce
                    validation rules. These attributes help define how data should be validated when it’s entered
                    and can be used for both server-side and client-side validation in ASP.NET applications.</p>
                <p>Common built-in Data Annotations include:</p>
                <ul>
                    <li><strong>[Required]:</strong> Ensures the field is not empty.</li>
                    <li><strong>[StringLength]:</strong> Specifies the maximum length of a string.</li>
                    <li><strong>[Range]:</strong> Validates if a numeric value falls within a specified range.</li>
                    <li><strong>[EmailAddress]:</strong> Validates if the string is a valid email format.</li>
                    <li><strong>[RegularExpression]:</strong> Validates the string using a custom regular
                        expression.</li>
                </ul>
                <p>
                    These annotations are simple to apply and provide a quick and effective way to validate model
                    data in your application.
                </p>
            </Section>

            <Section>
                <h2>Step 1: Using Built-In Data Annotations</h2>
                <p>Let’s apply some common built-in data annotations to a model in a .NET application.</p>
                <h3>Example: Product Model with Data Annotations</h3>
                <CodeSnippet language="csharp" code={`using System.ComponentModel.DataAnnotations;

namespace MyApiProject.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Product name cannot be longer than 100 characters.")]
        public string Name { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10,000.")]
        public decimal Price { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string Description { get; set; }

        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string ManufacturerEmail { get; set; }
    }
}`} />
                <p>In this example:</p>
                <ul>
                    <li><strong>[Required]:</strong> Ensures the Name field is not empty with a custom error
                        message.</li>
                    <li><strong>[StringLength]:</strong> Limits the length of Name and Description properties.</li>
                    <li><strong>[Range]:</strong> Validates that the Price is between 0.01 and 10,000.</li>
                    <li><strong>[EmailAddress]:</strong> Ensures the ManufacturerEmail is in a valid email format.
                    </li>
                </ul>

                <h3>Example: Validation in Controller</h3>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using MyApiProject.Models;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreateProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Add the product to the database (simulated here)
            return CreatedAtAction(nameof(CreateProduct), new {id = product.Id}, product);
        }
    }
}`} />
                <p>
                    In this controller:
                </p>
                <ul>
                    <li>The <code>[FromBody]</code> attribute binds the incoming request data to the Product model.
                    </li>
                    <li>We use ModelState.IsValid to check if the model passes all validation rules defined by the
                        data annotations.</li>
                    <li>If the model is invalid, BadRequest(ModelState) will return a 400 status code along with a
                        detailed error message.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Creating Custom Validators</h2>
                <p>Sometimes, the built-in Data Annotations don’t provide enough flexibility, so you may need to
                    create custom validators. In .NET, custom validation can be achieved by creating a new class
                    that inherits from the <code>ValidationAttribute</code> class.</p>
                <p>
                    Let’s create a custom validation attribute to ensure that the price of a product is not only
                    positive but also a valid multiple of 0.5 (for example, price should be in 0.50 increments).
                </p>
                <h3>Example: Custom Validator for Price Validation</h3>
                <CodeSnippet language="csharp" code={`using System;
using System.ComponentModel.DataAnnotations;

namespace MyApiProject.Validation
{
    public class PriceMultipleOfHalfAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            if (value is decimal decimalValue)
            {
                return decimalValue % 0.5m == 0;
            }
            return false;
        }

        public override string FormatErrorMessage(string name)
        {
            return $"{name} must be a multiple of 0.5.";
        }
    }
}`} />
                <p>In this example:</p>
                <ul>
                    <li>The <code>PriceMultipleOfHalfAttribute</code> class inherits from&nbsp;
                        <code>ValidationAttribute</code>.
                    </li>
                    <li>We override the <code>IsValid</code> method to ensure the price is a multiple of 0.5.</li>
                    <li>The <code>FormatErrorMessage</code> method formats the error message to return if validation
                        fails.</li>
                </ul>

                <h3>Applying Custom Validator to Model</h3>
                <CodeSnippet language="csharp" code={`namespace MyApiProject.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Product name cannot be longer than 100 characters.")]
        public string Name { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10,000.")]
        [PriceMultipleOfHalf(ErrorMessage = "Price must be a multiple of 0.5.")]
        public decimal Price { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string Description { get; set; }

        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string ManufacturerEmail { get; set; }
    }
}`} />
                <p>Here, the <code>Price</code> property is validated with both the built-in <code>[Range]</code>
                    &nbsp;annotation and the custom <code>[PriceMultipleOfHalf]</code> annotation. If the price is not a
                    multiple of 0.5, the custom error message will be shown.</p>
            </Section>

            <Section>
                <h2>Step 3: Validating Input with Custom Validators in the Controller</h2>
                <p>Custom validators work just like the built-in ones in the controller. We will use the same
                    controller example to demonstrate this.</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using MyApiProject.Models;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreateProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Simulate adding product to the database
            return CreatedAtAction(nameof(CreateProduct), new { id = product.Id }, product);
        }
    }
}`} />
                <p>In this controller, <code>ModelState.IsValid</code> will validate both the built-in and custom
                    rules. If any validation fails, it will return a 400 response with the error message.</p>
            </Section>

            <Section>
                <h2>Step 4: Custom Client-Side Validation</h2>
                <p>For better user experience, client-side validation can also be implemented using JavaScript or
                    jQuery. In ASP.NET Core MVC with Razor views, data annotations will automatically generate HTML5
                    validation attributes. For custom client-side validation, you can add JavaScript to check the
                    custom validation logic.</p>
                <h3>Example: JavaScript Custom Validation</h3>
                <CodeSnippet language="javascript" code={`$(document).ready(function () {
    $('form').submit(function (event) {
        var price = $('#Price').val();
        if (price % 0.5 !== 0) {
            alert('Price must be a multiple of 0.5.');
            event.preventDefault();
        }
    });
});`} />
                <p>This JavaScript code checks the price before submitting the form. If it’s not a multiple of 0.5,
                    an alert will be shown and the form submission will be prevented.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Validating input data is vital for maintaining data integrity in your application. With Data
                    Annotations, you can easily implement common validation rules like required fields, string
                    lengths, and range checks. For more complex validation scenarios, custom validation attributes
                    provide flexibility. By leveraging both server-side and client-side validation, you can ensure
                    your application handles input data reliably and securely.</p>
                <p>In this post, we covered how to:</p>
                <ul>
                    <li>Use built-in data annotations to validate model properties.</li>
                    <li>Create custom validation attributes for more complex validation needs.</li>
                    <li>Validate input data in the controller and handle validation errors.</li>
                    <li>Implement custom client-side validation for a smoother user experience.</li>
                </ul>
            </Section>

            <PageNavigation prevPage={RoutePath.MANIPULATING_RESOURCES_VALIDATING_INPUT} nextPage={RoutePath.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION} />

        </>
    );
}