import HomeSection from "../../../common/HomeSection";
import Lead from "../../../common/Lead";
import { CoursesNames } from "../../../../utils/const";
import { PageRoutes } from "../../../../utils/consts/ConstDotNet";

export default function DotNetBasicHome() {
    return (
        <>
            <Lead
                title="Mastering .NET API Development"
                paragraph1="Your journey to building efficient, secure, and scalable .NET Web APIs
                    starts here."
                paragraph2="In this guide, we'll take you step-by-step through the key concepts and best practices needed to
                    build robust APIs with .NET. From setting up the project environment to securing your endpoints,
                    you'll learn how to create powerful APIs that are easy to maintain and scale."
            />

            <br></br>

            <HomeSection
                title="Getting Started: Setting Up a .NET Project for API Development"
                paragraph1="Begin your journey by setting up the development environment and creating the initial project
                        template. Learn how to use the .NET CLI to start a new Web API project and organize your file
                        structure for easy scalability."
                paragraph2="Set up the .NET environment, create a new Web API project, and
                        run your API locally to test the basic setup."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.GETTING_STARTED_DOTNET_API}`}
            />

            <HomeSection
                title="Getting Acquainted with Entity Framework Core: ORM Basics and Setup"
                paragraph1="Learn how to integrate Entity Framework Core into your project to manage your database
                        interactions. You'll understand how to define models, configure the DbContext, and perform
                        migrations to set up your data layer."
                paragraph2="Understand ORM basics, set up Entity Framework Core, and
                        configure your database context."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.ENTITY_FRAMEWORK_CORE_SETUP}`}
            />

            <HomeSection
                title="Creating the API and Returning Resources: Structuring Your Controllers"
                paragraph1="Explore how to structure your controllers to handle HTTP requests and return data to your
                        clients. Learn about RESTful conventions and how to organize your code for better
                        maintainability."
                paragraph2="Create API controllers, return data, and manage HTTP methods like
                        GET, POST, PUT, and DELETE."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.CREATING_API_CONTROLLERS}`}
            />

            <HomeSection
                title="Manipulating Resources and Validating Input: Ensuring Data Integrity"
                paragraph1="Ensure that your API handles incoming data safely. Learn how to validate input and manage
                        resources to ensure your API remains consistent and secure."
                paragraph2="Perform input validation, work with resources, and ensure safe
                        data handling in your API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.MANIPULATING_RESOURCES_VALIDATING_INPUT}`}
            />

            <HomeSection
                title="Validating Input Data: Using Data Annotations and Custom Validators"
                paragraph1="Learn how to use built-in data annotations and implement custom validation logic to ensure that
                        the data coming into your API is valid and secure."
                paragraph2="Use data annotations for simple validation and create custom
                        validators for more complex cases."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.VALIDATING_INPUT_DATA_ANNOTATIONS}`}
            />

            <HomeSection
                title="Working with Services and Dependency Injection: Decoupling Business Logic"
                paragraph1="Improve your API's testability and maintainability by decoupling business logic from controllers.
                        Learn how to use dependency injection to manage services in your application."
                paragraph2="Set up services using dependency injection and decouple business
                        logic from controllers for better code organization."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION}`}
            />

            <HomeSection
                title="Handling Asynchronous Requests: Writing Efficient Non-blocking Code"
                paragraph1="Learn how to write asynchronous code to ensure your API performs efficiently, especially when
                        handling I/O-bound tasks like database calls or external API requests."
                paragraph2="Write non-blocking, async methods to improve the responsiveness
                        of your API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.HANDLING_ASYNCHRONOUS_REQUESTS}`}
            />

            <HomeSection
                title="Searching, Filtering, and Paging Resources: Enhancing API Efficiency"
                paragraph1="Optimize how data is retrieved and presented to improve the client-side experience and the overall performance of your API."
                paragraph2="Implement searching, filtering, and pagination to enhance the efficiency of your API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.SEARCHING_FILTERING_PAGING_RESOURCES}`}
            />

            <HomeSection
                title="Securing Your API: Implementing Authentication and Authorization"
                paragraph1="Learn the basics of securing your API using authentication and authorization mechanisms, ensuring
                        that only authorized users can access sensitive data."
                paragraph2="Implement authentication strategies and restrict access to
                        resources based on user roles and permissions."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.SECURING_API_AUTHENTICATION_AUTHORIZATION}`}
            />

            <HomeSection
                title="Advanced API Security: Implementing OAuth, JWT, and HTTPS"
                paragraph1="Take security to the next level by learning how to implement OAuth for delegated access, use JWT
                        for token-based authentication, and enforce HTTPS for encrypted communication."
                paragraph2="Implement OAuth, JWT, and HTTPS to create a highly secure API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS}`}
            />

            <HomeSection
                title="Handling Cross-Origin Requests (CORS): Enabling Secure External Communication"
                paragraph1="Configure Cross-Origin Resource Sharing (CORS) to allow or restrict access to your API from different domains while maintaining security."
                paragraph2="Set up CORS to securely enable external communication with your API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.HANDLING_CORS_REQUESTS}`}
            />

            <HomeSection
                title="Logging and Exception Handling: Managing Errors with Custom Middleware"
                paragraph1="Set up proper logging and error handling to improve debugging and ensure that your API remains reliable."
                paragraph2="Implement logging and custom middleware to catch and handle exceptions."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE}`}
            />

            <HomeSection
                title="Error Response and Status Codes: Designing Effective API Feedback"
                paragraph1="Ensure that your API provides meaningful and consistent error responses, following best practices for HTTP status codes and messages."
                paragraph2="Design effective error handling with appropriate status codes and detailed messages."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.ERROR_RESPONSE_STATUS_CODES}`}
            />

            <HomeSection
                title="API Rate Limiting: Protecting Your Resources from Overuse"
                paragraph1="Prevent abuse and ensure fair usage of your API by implementing rate limiting mechanisms."
                paragraph2="Apply API rate limiting to safeguard your resources and maintain stability."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.API_RATE_LIMITING}`}
            />

            <HomeSection
                title="Versioning and Documenting Your API: Leveraging Swagger for Transparency"
                paragraph1="Learn how to add versioning to your API and use Swagger to auto-generate interactive API
                        documentation, making it easier for developers to understand and consume your API."
                paragraph2="Implement API versioning and auto-generate documentation with
                        Swagger for better API transparency."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.VERSIONING_DOCUMENTING_API_SWAGGER}`}
            />

            <HomeSection
                title="Unit Testing with xUnit: Writing Testable Code and Ensuring Quality"
                paragraph1="Ensure your API is bug-free and maintainable by writing unit tests using xUnit, covering your
                        core logic and ensuring that each component works as expected."
                paragraph2="Write unit tests with xUnit, ensuring your API remains reliable
                        and maintainable over time."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.UNIT_TESTING_XUNIT}`}
            />

            <HomeSection
                title="Monitoring Application Health: Implementing HealthChecks for System Reliability"
                paragraph1="Set up health checks to monitor the uptime and health of your API, ensuring that your application remains reliable."
                paragraph2="Implement health checks to provide real-time monitoring and insights into system reliability."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.MONITORING_APPLICATION_HEALTHCHECKS}`}
            />

            <HomeSection
                title="Improving Performance: Caching Strategies for Your API"
                paragraph1="Implement caching strategies to optimize the performance of your API by reducing the load on your backend and speeding up responses."
                paragraph2="Use caching to improve performance and reduce response times for your API."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.IMPROVING_PERFORMANCE_CACHING}`}
            />

            <HomeSection
                title="Scaling and Optimizing Your API: Performance Best Practices"
                paragraph1="Learn best practices to scale and optimize your API to handle increased load and ensure high performance under stress."
                paragraph2="Scale your API to handle more users and optimize its performance with the right techniques."
                targetURL={`${CoursesNames.NET_API_BASICS}${PageRoutes.SCALING_OPTIMIZING_API}`}
            />
        </>
    );
}