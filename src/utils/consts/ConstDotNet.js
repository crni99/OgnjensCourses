import DotNetBasicHome from '../../components/pages/dotnet/basic/DotNetBasicHome.jsx';
import GettinStartedDotNetApi from '../../components/pages/dotnet/basic/GettingStartedDotNetApi.jsx';
import EntityFrameworkCoreSetup from "../../components/pages/dotnet/basic/EntityFrameworkCoreSetup.jsx";
import CreatingApiControllers from "../../components/pages/dotnet/basic/CreatingApiControllers.jsx";
import ManipulatingResourcesValidatingInput from "../../components/pages/dotnet/basic/ManipulatingResourcesValidatingInput.jsx";
import ValidatingInputDataAnnotations from "../../components/pages/dotnet/basic/ValidatingInputDataAnnotations.jsx";
import WorkingWithServicesDependencyInjection from "../../components/pages/dotnet/basic/WorkingWithServicesDependencyInjection.jsx";
import HandlingAsynchronousRequests from "../../components/pages/dotnet/basic/HandlingAsynchronousRequests.jsx";
import SearchingFilteringPagingResources from "../../components/pages/dotnet/basic/SearchingFilteringPagingResources.jsx";
import SecuringApiAuthenticationAuthorization from "../../components/pages/dotnet/basic/SecuringApiAuthenticationAuthorization.jsx";
import AdvancedApiSecurityOauthJwtHttps from "../../components/pages/dotnet/basic/AdvancedApiSecurityOauthJwtHttps.jsx";
import HandlingCorsRequests from "../../components/pages/dotnet/basic/HandlingCorsRequests.jsx";
import LogginExceptionHandlingMiddleware from "../../components/pages/dotnet/basic/LogginExceptionHandlingMiddleware.jsx";
import ErrorResponseStatusCodes from "../../components/pages/dotnet/basic/ErrorResponseStatusCodes.jsx";
import ApiRateLimiting from "../../components/pages/dotnet/basic/ApiRateLimiting.jsx";
import VersioningDocumentingApiSwagger from "../../components/pages/dotnet/basic/VersioningDocumentingApiSwagger.jsx";
import UnitTestingXunit from "../../components/pages/dotnet/basic/UnitTestingXunit.jsx";
import MonitoringApplicationHealthChecks from "../../components/pages/dotnet/basic/MonitoringApplicationHealthChecks.jsx";
import ImprovingPerformancesCaching from "../../components/pages/dotnet/basic/ImprovingPerformancesCaching.jsx";
import ScalingOptimizingApi from "../../components/pages/dotnet/basic/ScalingOptimizingApi.jsx";
import { CoursesNames } from '../const.js';

export const PageNames = {
    NET_API_BASICS: 'Introduction to .NET API',
    GETTING_STARTED_DOTNET_API: 'Getting Started .NET API',
    ENTITY_FRAMEWORK_CORE_SETUP: 'Entity Framework Core Setup',
    CREATING_API_CONTROLLERS: 'Creating API Controllers',
    MANIPULATING_RESOURCES_VALIDATING_INPUT: 'Manipulating Resources Validating Input',
    VALIDATING_INPUT_DATA_ANNOTATIONS: 'Validating Input Data Annotations',
    WORKING_WITH_SERVICES_DEPENDENCY_INJECTION: 'Services & Dependency Injection',
    HANDLING_ASYNCHRONOUS_REQUESTS: 'Handling Asynchronous Requests',
    SEARCHING_FILTERING_PAGING_RESOURCES: 'Searching Filtering Paging Resources',
    SECURING_API_AUTHENTICATION_AUTHORIZATION: 'Securing API: Authentication Authorization',
    ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS: 'Advanced API Security: OAuth, JWT, and HTTPS',
    HANDLING_CORS_REQUESTS: 'Handling CORS Requests',
    LOGGING_EXCEPTION_HANDLING_MIDDLEWARE: 'Logging & Exception Handling (Middleware)',
    ERROR_RESPONSE_STATUS_CODES: 'Error Response and Status Codes',
    API_RATE_LIMITING: 'API Rate Limiting',
    VERSIONING_DOCUMENTING_API_SWAGGER: 'Versioning and Documenting API (Swagger)',
    UNIT_TESTING_XUNIT: 'Unit Testing with xUnit',
    MONITORING_APPLICATION_HEALTHCHECKS: 'Monitoring Application Health',
    IMPROVING_PERFORMANCE_CACHING: 'Improving Performance (Caching)',
    SCALING_OPTIMIZING_API: 'Scaling and Optimizing (Best Practices)',
};

export const PageRoutes = {
    NET_API_BASICS: CoursesNames.NET_API_BASICS,
    GETTING_STARTED_DOTNET_API: '/getting-started-dotnet-api',
    ENTITY_FRAMEWORK_CORE_SETUP: '/entity-framework-core-setup',
    CREATING_API_CONTROLLERS: '/creating-api-controllers',
    MANIPULATING_RESOURCES_VALIDATING_INPUT: '/manipulating-resources-validating-input',
    VALIDATING_INPUT_DATA_ANNOTATIONS: '/validating-input-data-annotations',
    WORKING_WITH_SERVICES_DEPENDENCY_INJECTION: '/working-with-services-dependency-injection',
    HANDLING_ASYNCHRONOUS_REQUESTS: '/handling-asynchronous-requests',
    SEARCHING_FILTERING_PAGING_RESOURCES: '/searching-filtering-paging-resources',
    SECURING_API_AUTHENTICATION_AUTHORIZATION: '/securing-api-authentication-authorization',
    ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS: '/advanced-api-security-oauth-jwt-https',
    HANDLING_CORS_REQUESTS: '/handling-cors-requests',
    LOGGING_EXCEPTION_HANDLING_MIDDLEWARE: '/logging-exception-handling-middleware',
    ERROR_RESPONSE_STATUS_CODES: '/error-response-status-codes',
    API_RATE_LIMITING: '/api-rate-limiting',
    VERSIONING_DOCUMENTING_API_SWAGGER: '/versioning-documenting-api-swagger',
    UNIT_TESTING_XUNIT: '/unit-testing-xunit',
    MONITORING_APPLICATION_HEALTHCHECKS: '/monitoring-application-healthchecks',
    IMPROVING_PERFORMANCE_CACHING: '/improving-performance-caching',
    SCALING_OPTIMIZING_API: '/scaling-optimizing-api',
};

export const RoutePath = {
    NET_API_BASICS: CoursesNames.NET_API_BASICS,
    GETTING_STARTED_DOTNET_API: CoursesNames.NET_API_BASICS + PageRoutes.GETTING_STARTED_DOTNET_API,
    ENTITY_FRAMEWORK_CORE_SETUP: CoursesNames.NET_API_BASICS + PageRoutes.ENTITY_FRAMEWORK_CORE_SETUP,
    CREATING_API_CONTROLLERS: CoursesNames.NET_API_BASICS + PageRoutes.CREATING_API_CONTROLLERS,
    MANIPULATING_RESOURCES_VALIDATING_INPUT: CoursesNames.NET_API_BASICS + PageRoutes.MANIPULATING_RESOURCES_VALIDATING_INPUT,
    VALIDATING_INPUT_DATA_ANNOTATIONS: CoursesNames.NET_API_BASICS + PageRoutes.VALIDATING_INPUT_DATA_ANNOTATIONS,
    WORKING_WITH_SERVICES_DEPENDENCY_INJECTION: CoursesNames.NET_API_BASICS + PageRoutes.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION,
    HANDLING_ASYNCHRONOUS_REQUESTS: CoursesNames.NET_API_BASICS + PageRoutes.HANDLING_ASYNCHRONOUS_REQUESTS,
    SEARCHING_FILTERING_PAGING_RESOURCES: CoursesNames.NET_API_BASICS + PageRoutes.SEARCHING_FILTERING_PAGING_RESOURCES,
    SECURING_API_AUTHENTICATION_AUTHORIZATION: CoursesNames.NET_API_BASICS + PageRoutes.SECURING_API_AUTHENTICATION_AUTHORIZATION,
    ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS: CoursesNames.NET_API_BASICS + PageRoutes.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS,
    HANDLING_CORS_REQUESTS: CoursesNames.NET_API_BASICS + PageRoutes.HANDLING_CORS_REQUESTS,
    LOGGING_EXCEPTION_HANDLING_MIDDLEWARE: CoursesNames.NET_API_BASICS + PageRoutes.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE,
    ERROR_RESPONSE_STATUS_CODES: CoursesNames.NET_API_BASICS + PageRoutes.ERROR_RESPONSE_STATUS_CODES,
    API_RATE_LIMITING: CoursesNames.NET_API_BASICS + PageRoutes.API_RATE_LIMITING,
    VERSIONING_DOCUMENTING_API_SWAGGER: CoursesNames.NET_API_BASICS + PageRoutes.VERSIONING_DOCUMENTING_API_SWAGGER,
    UNIT_TESTING_XUNIT: CoursesNames.NET_API_BASICS + PageRoutes.UNIT_TESTING_XUNIT,
    MONITORING_APPLICATION_HEALTHCHECKS: CoursesNames.NET_API_BASICS + PageRoutes.MONITORING_APPLICATION_HEALTHCHECKS,
    IMPROVING_PERFORMANCE_CACHING: CoursesNames.NET_API_BASICS + PageRoutes.IMPROVING_PERFORMANCE_CACHING,
    SCALING_OPTIMIZING_API: CoursesNames.NET_API_BASICS + PageRoutes.SCALING_OPTIMIZING_API
};

export const RouteList = [
    { path: RoutePath.NET_API_BASICS, component: <DotNetBasicHome /> },
    { path: RoutePath.GETTING_STARTED_DOTNET_API, component: <GettinStartedDotNetApi /> },
    { path: RoutePath.ENTITY_FRAMEWORK_CORE_SETUP, component: <EntityFrameworkCoreSetup /> },
    { path: RoutePath.CREATING_API_CONTROLLERS, component: <CreatingApiControllers /> },
    { path: RoutePath.MANIPULATING_RESOURCES_VALIDATING_INPUT, component: <ManipulatingResourcesValidatingInput /> },
    { path: RoutePath.VALIDATING_INPUT_DATA_ANNOTATIONS, component: <ValidatingInputDataAnnotations /> },
    { path: RoutePath.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION, component: <WorkingWithServicesDependencyInjection /> },
    { path: RoutePath.HANDLING_ASYNCHRONOUS_REQUESTS, component: <HandlingAsynchronousRequests /> },
    { path: RoutePath.SEARCHING_FILTERING_PAGING_RESOURCES, component: <SearchingFilteringPagingResources /> },
    { path: RoutePath.SECURING_API_AUTHENTICATION_AUTHORIZATION, component: <SecuringApiAuthenticationAuthorization /> },
    { path: RoutePath.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS, component: <AdvancedApiSecurityOauthJwtHttps /> },
    { path: RoutePath.HANDLING_CORS_REQUESTS, component: <HandlingCorsRequests /> },
    { path: RoutePath.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE, component: <LogginExceptionHandlingMiddleware /> },
    { path: RoutePath.ERROR_RESPONSE_STATUS_CODES, component: <ErrorResponseStatusCodes /> },
    { path: RoutePath.API_RATE_LIMITING, component: <ApiRateLimiting /> },
    { path: RoutePath.VERSIONING_DOCUMENTING_API_SWAGGER, component: <VersioningDocumentingApiSwagger /> },
    { path: RoutePath.UNIT_TESTING_XUNIT, component: <UnitTestingXunit /> },
    { path: RoutePath.MONITORING_APPLICATION_HEALTHCHECKS, component: <MonitoringApplicationHealthChecks /> },
    { path: RoutePath.IMPROVING_PERFORMANCE_CACHING, component: <ImprovingPerformancesCaching /> },
    { path: RoutePath.SCALING_OPTIMIZING_API, component: <ScalingOptimizingApi /> }
];