import Lead from "../../../common/Lead";
import Section from "../../../common/Section";
import CodeSnippet from '../../../common/CodeSnippet';
import PageNavigation from "../../../common/PageNavigation";
import { RoutePath } from "../../../../utils/consts/ConstDotNetBasic";

export default function UnitTestingXunit() {

    return (
        <>
            <Lead
                title="Unit Testing with xUnit: Writing Testable Code and Ensuring Quality in
                    .NET"
                paragraph1="Learn how to write testable code using xUnit and create unit tests to ensure
                    your .NET application's reliability."
                paragraph2="Unit testing is a key component of maintaining high-quality, maintainable code in any software
                    development process. It helps ensure that individual components of your application work as
                    expected, and it can prevent regressions when changes are made to the codebase."
            />

            <Section>
                <h2>Why Unit Testing is Important</h2>
                <ul>
                    <li><strong>Ensuring Correctness:</strong> Unit tests verify that individual components of your
                        application perform their intended function.</li>
                    <li><strong>Preventing Bugs:</strong> By writing tests before or alongside your code, you can
                        prevent bugs early in the development cycle.</li>
                    <li><strong>Refactoring with Confidence:</strong> Unit tests allow you to confidently refactor
                        your code since you can immediately detect if a change causes any issues.</li>
                    <li><strong>Documentation:</strong> Unit tests act as living documentation for the expected
                        behavior of your code.</li>
                    <li><strong>Encouraging Best Practices:</strong> Writing testable code often leads to better
                        software design, with more modular, decoupled components.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 1: Setting Up xUnit for Unit Testing in .NET</h2>
                <p>To begin, you'll need to add xUnit to your project and set up your testing environment.</p>

                <h3>Step 1: Install xUnit and Test Runner</h3>
                <p>Create a Test Project: If you don’t already have a test project, create one using the following
                    command:</p>
                <CodeSnippet language="shell" code={`dotnet new xunit -n MyApi.Tests`} />

                <p>Add xUnit and Test Runner NuGet Packages: In your test project, install the necessary NuGet
                    packages for xUnit.</p>
                <CodeSnippet language="shell" code={`dotnet add package xunit
dotnet add package xunit.runner.visualstudio`} />

                <p>Add Reference to Your Main Project: Your test project needs to reference your main project to be
                    able to access the code you’re testing.</p>
                <CodeSnippet language="shell" code={`dotnet add reference ../MyApi/MyApi.csproj`} />

                <h3>Create the Test Class</h3>
                <p>Inside the MyApi.Tests project, create test classes that will hold your unit tests.</p>
                <CodeSnippet language="csharp" code={`public class ProductServiceTests
{
    [Fact]
    public void GetProduct_ReturnsCorrectProduct()
    {
        // Arrange
        var productService = new ProductService();

        // Act
        var result = productService.GetProduct(1);

        // Assert
        Assert.Equal("Product 1", result.Name);
    }
}`} />
                <h4>Explanation:</h4>
                <ul>
                    <li><strong>Fact:</strong> This attribute indicates that the method is a test case. You can also
                        use <code>[Theory]</code> for parameterized tests.</li>
                    <li><strong>Arrange:</strong> Set up your test data and initialize any necessary objects.</li>
                    <li><strong>Act:</strong> Execute the method under test.</li>
                    <li><strong>Assert:</strong> Verify that the results match the expected outcome.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 2: Writing Testable Code</h2>
                <p>To write good unit tests, it's important that your code is testable. Here are some principles and
                    tips to help you write code that's easier to test.</p>

                <h3>1. Dependency Injection</h3>
                <p>Minimize tight coupling by using Dependency Injection (DI) to inject dependencies rather than
                    hard-coding them. This makes it easier to mock or replace dependencies in your tests.</p>
                <CodeSnippet language="csharp" code={`public class ProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public Product GetProduct(int id)
    {
        return _productRepository.GetById(id);
    }
}`} />
                <h3>2. Avoid Static Methods and Global State</h3>
                <p>Static methods and global state can make testing difficult because they introduce shared state
                    that can’t be isolated. Where possible, prefer instance methods with clearly defined inputs and
                    outputs.</p>
                <CodeSnippet language="csharp" code={`public class Configuration
{
    public string GetSetting() => "SomeSetting";
}`} />
                <h3>3. Separation of Concerns</h3>
                <p>Ensure that your classes are single-purpose. A class that handles too many responsibilities
                    (e.g., interacting with a database, sending emails, processing business logic) is harder to
                    test.</p>
                <CodeSnippet language="csharp" code={`public class ProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public Product GetProduct(int id) => _productRepository.GetById(id);
}`} />
            </Section>

            <Section>
                <h2>Step 3: Writing Tests for Your Code</h2>
                <p>Now let’s explore how you can write unit tests using xUnit.</p>

                <h3>Example: Unit Test for ProductService</h3>
                <p>Suppose you have a service that fetches products from a repository. Here’s how you might test it:
                </p>

                <h4>Create an Interface for the IProductRepository</h4>
                <CodeSnippet language="csharp" code={`public interface IProductRepository
{
    Product GetById(int id);
}`} />
                <h4>Create the ProductService Class</h4>
                <CodeSnippet language="csharp" code={`public class ProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public Product GetProduct(int id)
    {
        return _productRepository.GetById(id);
    }
}`} />
                <h4>Create a Unit Test with a Mock Repository</h4>
                <p>Using a mocking liary like Moq, you can set up your tests:</p>
                <CodeSnippet language="csharp" code={`public class ProductServiceTests
{
    [Fact]
    public void GetProduct_ReturnsCorrectProduct()
    {
        // Arrange
        var mockRepository = new Mock<IProductRepository>();
        mockRepository.Setup(repo => repo.GetById(1)).Returns(new Product { Id = 1, Name = "Product 1" });
        var productService = new ProductService(mockRepository.Object);

        // Act
        var result = productService.GetProduct(1);

        // Assert
        Assert.Equal("Product 1", result.Name);
    }
}`} />
                <h4>Explanation:</h4>
                <ul>
                    <li><strong>Mocking:</strong> We use Moq to create a mock version of IProductRepository. This
                        allows us to control the behavior of the repository without needing to access an actual
                        database.</li>
                    <li><strong>Setup:</strong> <code>mockRepository.Setup(repo =&gt; repo.GetById(1))</code> specifies
                        what should happen when the GetById method is called with an argument of 1.</li>
                    <li><strong>Assertion:</strong> The <code>Assert.Equal</code> method checks if the returned
                        Product's name matches the expected value.</li>
                </ul>
            </Section>

            <Section>
                <h2>Step 4: Running Your Tests</h2>
                <p>To run your tests, you can use the built-in test runner:</p>
                <ul>
                    <li>Run from the command line: <code>dotnet test</code></li>
                    <li>Run from Visual Studio: Simply use the Test Explorer to run your unit tests.</li>
                    <li>Continuous Integration (CI): Integrate unit tests into your CI/CD pipeline to automatically
                        run tests on every commit or pull request, ensuring the reliability of your application.
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Conclusion</h2>
                <p>Unit testing is an essential practice for writing reliable, maintainable, and testable code. By
                    using xUnit and following best practices such as dependency injection, separation of concerns,
                    and mocking dependencies, you can ensure your code works as expected and catch issues early in
                    the development process.</p>
                <p>In this post, we’ve covered:</p>
                <ul>
                    <li>Setting up xUnit in a .NET project and creating basic unit tests.</li>
                    <li>Writing testable code that is decoupled, modular, and easy to test.</li>
                    <li>Creating and running unit tests with Moq for mocking dependencies.</li>
                    <li>The benefits of unit testing for code quality, refactoring, and bug prevention.</li>
                </ul>
                <p>By writing thorough unit tests, you help ensure that your code is robust and that new features or
                    changes won’t introduce bugs into your system.</p>
            </Section>

            <PageNavigation prevPage={RoutePath.VERSIONING_DOCUMENTING_API_SWAGGER} nextPage={RoutePath.MONITORING_APPLICATION_HEALTHCHECKS} />

        </>
    );
}