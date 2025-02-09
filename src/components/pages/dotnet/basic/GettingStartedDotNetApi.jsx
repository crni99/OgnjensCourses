import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNet";

export default function GettingStartedDotNetApi() {

    return (
        <>
            <Lead
                title="Getting Started: Setting Up a .NET Project for API Development"
                paragraph1="Learn how to set up a .NET project for creating APIs, from installation to
                    developing custom endpoints."
                paragraph2="When it comes to web development, creating APIs (Application Programming Interfaces) is a crucial
                    skill. .NET, Microsoft’s powerful framework, provides all the necessary tools to build efficient and
                    scalable APIs. Whether you’re new to API development or transitioning from a different tech stack,
                    setting up a .NET project for API development is a straightforward process."
            />

            <Section>
                <h2>Prerequisites</h2>
                <ul>
                    <li><a href="https://visualstudio.microsoft.com/" target="_blank" rel="noreferrer" className="link-custom">
                        Visual Studio 2022</a> (or later) installed – the IDE we will be using.</li>
                    <li>.NET SDK installed on your machine.</li>
                    <li>A basic understanding of C# programming and HTTP concepts.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Installing .NET SDK</h2>
                <p>First things first, you need to install the .NET SDK. Follow these steps:</p>
                <ol>
                    <li>Visit the <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noreferrer"
                        className="link-custom">official .NET download page</a>.</li>
                    <li>Select the latest stable release of the SDK (e.g., .NET 7).</li>
                    <li>Download and install it for your operating system (Windows, macOS, or Linux).</li>
                    <li>After installation, you can verify that .NET is installed by running the following command
                        in your terminal:</li>
                </ol>
                <CodeSnippet language="shell" code={`dotnet --version`} />
                <p>This should return the version of .NET that you installed.</p>
            </Section>

            <Section>
                <h2>Step 2: Create a New .NET Web API Project</h2>
                <p>Now that you have the .NET SDK set up, you can create a new Web API project using the .NET CLI.
                </p>
                <ol>
                    <li>Open a terminal/command prompt.</li>
                    <li>Navigate to the directory where you want to create your project.</li>
                    <li>Run the following command to create a new Web API project:</li>
                </ol>
                <CodeSnippet language="shell" code={`dotnet new webapi -n MyApiProject`} />
                <p>This will generate a new folder named MyApiProject with the basic structure of a Web API.
                    Navigate to your project directory:</p>
                <CodeSnippet language="shell" code={`cd MyApiProject`} />
            </Section>

            <Section>
                <h2>Step 3: Open the Project in Visual Studio</h2>
                <p>Now, let’s open the newly created project in Visual Studio.</p>
                <ol>
                    <li>Open Visual Studio.</li>
                    <li>Click File &gt; Open &gt; Project/Solution.</li>
                    <li>Navigate to your MyApiProject folder and open the .csproj file.</li>
                    <li>Alternatively, you can open the project from the terminal using:</li>
                </ol>
                <CodeSnippet language="shell" code={`start MyApiProject.sln`} />
                <p>This will launch Visual Studio and load your Web API project.</p>
            </Section>

            <Section>
                <h2>Step 4: Understand the Project Structure</h2>
                <p>Once your project is loaded in Visual Studio, let’s take a quick look at the important files and
                    folders:</p>
                <ul>
                    <li><strong>Program.cs</strong>: This file contains the entry point for your application. It
                        configures and starts the Web API services.</li>
                    <li><strong>Startup.cs</strong>: If your project targets .NET Core, this file configures your
                        middleware, services, and routing. For .NET 6+ projects, this logic is integrated into
                        Program.cs.</li>
                    <li><strong>Controllers/WeatherForecastController.cs</strong>: This is a default controller
                        generated by the template. It contains a simple example of an API endpoint that returns
                        weather data.</li>
                    <li><strong>appsettings.json</strong>: The configuration file that contains settings for your
                        application (such as connection strings, app keys, etc.).</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 5: Run the API Locally</h2>
                <p>Now that you have your project set up, it’s time to run it.</p>
                <ul>
                    <li>Press F5 or click on Run in Visual Studio. This will start the development server and launch
                        the API locally.</li>
                    <li>By default, the API will run at <code>http://localhost:5000</code> (or&nbsp;
                        <code>https://localhost:5001</code> for HTTPS).
                    </li>
                </ul>
                <p>Open your browser and navigate to <code>https://localhost:5001/weatherforecast</code> to see the
                    default API in action. You should see a JSON response with mock weather data.</p>
            </Section>

            <Section>
                <h2>Step 6: Create Your Own API Endpoints</h2>
                <p>Next, let’s create a new controller and define custom API endpoints.</p>
                <p>In the Controllers folder, right-click and select Add &gt; Controller. Select API Controller -
                    Empty and name it ProductsController.</p>
                <p>Replace the default content in <code>ProductsController.cs</code> with the following code:</p>
                <CodeSnippet language="csharp" code={`using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // Sample product data
        private static readonly List<string> Products = new List<string>
        {
            "Laptop",
            "Smartphone",
            "Tablet",
            "Smartwatch"
        };

        // GET api/products
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(Products);
        }

        // GET api/products/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            if (id < 0 || id >= Products.Count)
            {
                return NotFound();
            }
            return Ok(Products[id]);
        }
    }
}`} />
                <p>Here’s what the code does:</p>
                <ul>
                    <li>The ProductsController class inherits from ControllerBase, which provides necessary methods
                        for API functionality.</li>
                    <li>The Get methods return product data as JSON responses.</li>
                    <li>HttpGet attributes define the HTTP methods for the endpoints.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 7: Test the API Endpoints</h2>
                <p>After adding the new controller, run the application again (press F5).</p>
                <p>Open your browser or a tool like Postman.</p>
                <ul>
                    <li>To retrieve the list of products, make a GET request to&nbsp;
                        <code>https://localhost:5001/api/products</code>.
                    </li>
                    <li>To retrieve a single product by ID, use a GET request like&nbsp;
                        <code>https://localhost:5001/api/products/1</code>.
                    </li>
                </ul>
                <p>You should see the respective JSON responses.</p>
            </Section>

            <Section>
                <h2>Step 8: Debug and Refine the API</h2>
                <p>As you develop your API, debugging is an essential step. Visual Studio provides excellent
                    debugging tools:</p>
                <ul>
                    <li><strong>Breakpoints:</strong> Click on the left margin next to the line of code where you
                        want to pause execution.</li>
                    <li><strong>Watch Variables:</strong> View and inspect variables while debugging.</li>
                    <li><strong>Call Stack:</strong> Inspect the call stack to see the execution flow.</li>
                </ul>
                <p>Additionally, you can refine the API by adding features like error handling, logging,
                    authentication, and more.</p>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Setting up a .NET Web API project is quick and straightforward with Visual Studio and the .NET
                    CLI. In this guide, we covered everything from installation to creating your first custom API
                    endpoint. As you continue to develop your API, you can explore more advanced topics such as
                    database integration, authentication, and building RESTful services.</p>
            </Section>

            <PageNavigation prevPage={undefined} nextPage={RoutePath.ENTITY_FRAMEWORK_CORE_SETUP} />

        </>
    );
}