import React from "react";
import { Route } from "react-router-dom";
import { PageRoutes } from '../utils/const.js';
import GettinStartedDotNetApi from '../components/pages/GettingStartedDotNetApi.jsx';
import EntityFrameworkCoreSetup from "../components/pages/EntityFrameworkCoreSetup.jsx";
import CreatingApiControllers from "../components/pages/CreatingApiControllers.jsx";
import ManipulatingResourcesValidatingInput from "../components/pages/ManipulatingResourcesValidatingInput.jsx";
import ValidatingInputDataAnnotations from "../components/pages/ValidatingInputDataAnnotations.jsx";
import WorkingWithServicesDependencyInjection from "../components/pages/WorkingWithServicesDependencyInjection.jsx";
import HandlingAsynchronousRequests from "../components/pages/HandlingAsynchronousRequests.jsx";
import SearchingFilteringPagingResources from "../components/pages/SearchingFilteringPagingResources.jsx";
import SecuringApiAuthenticationAuthorization from "../components/pages/SecuringApiAuthenticationAuthorization.jsx";
import AdvancedApiSecurityOauthJwtHttps from "../components/pages/AdvancedApiSecurityOauthJwtHttps.jsx";
import HandlingCorsRequests from "../components/pages/HandlingCorsRequests.jsx";
import LogginExceptionHandlingMiddleware from "../components/pages/LogginExceptionHandlingMiddleware.jsx";
import ErrorResponseStatusCodes from "../components/pages/ErrorResponseStatusCodes.jsx";
import ApiRateLimiting from "../components/pages/ApiRateLimiting.jsx";
import VersioningDocumentingApiSwagger from "../components/pages/VersioningDocumentingApiSwagger.jsx";
import UnitTestingXunit from "../components/pages/UnitTestingXunit.jsx";
import MonitoringApplicationHealthChecks from "../components/pages/MonitoringApplicationHealthChecks.jsx";
import ImprovingPerformancesCaching from "../components/pages/ImprovingPerformancesCaching.jsx";
import ScalingOptimizingApi from "../components/pages/ScalingOptimizingApi.jsx";

const routeList = [
    { path: PageRoutes.GETTING_STARTED_DOTNET_API, component: <GettinStartedDotNetApi /> },
    { path: PageRoutes.ENTITY_FRAMEWORK_CORE_SETUP, component: <EntityFrameworkCoreSetup /> },
    { path: PageRoutes.CREATING_API_CONTROLLERS, component: <CreatingApiControllers /> },
    { path: PageRoutes.MANIPULATING_RESOURCES_VALIDATING_INPUT, component: <ManipulatingResourcesValidatingInput /> },
    { path: PageRoutes.VALIDATING_INPUT_DATA_ANNOTATIONS, component: <ValidatingInputDataAnnotations /> },
    { path: PageRoutes.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION, component: <WorkingWithServicesDependencyInjection /> },
    { path: PageRoutes.HANDLING_ASYNCHRONOUS_REQUESTS, component: <HandlingAsynchronousRequests /> },
    { path: PageRoutes.SEARCHING_FILTERING_PAGING_RESOURCES, component: <SearchingFilteringPagingResources /> },
    { path: PageRoutes.SECURING_API_AUTHENTICATION_AUTHORIZATION, component: <SecuringApiAuthenticationAuthorization /> },
    { path: PageRoutes.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS, component: <AdvancedApiSecurityOauthJwtHttps /> },
    { path: PageRoutes.HANDLING_CORS_REQUESTS, component: <HandlingCorsRequests /> },
    { path: PageRoutes.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE, component: <LogginExceptionHandlingMiddleware /> },
    { path: PageRoutes.ERROR_RESPONSE_STATUS_CODES, component: <ErrorResponseStatusCodes /> },
    { path: PageRoutes.API_RATE_LIMITING, component: <ApiRateLimiting /> },
    { path: PageRoutes.VERSIONING_DOCUMENTING_API_SWAGGER, component: <VersioningDocumentingApiSwagger /> },
    { path: PageRoutes.UNIT_TESTING_XUNIT, component: <UnitTestingXunit /> },
    { path: PageRoutes.MONITORING_APPLICATION_HEALTHCHECKS, component: <MonitoringApplicationHealthChecks /> },
    { path: PageRoutes.IMPROVING_PERFORMANCE_CACHING, component: <ImprovingPerformancesCaching /> },
    { path: PageRoutes.SCALING_OPTIMIZING_API, component: <ScalingOptimizingApi /> }
];

const AppRoutes = (
    <>
        {routeList.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </>
);

export default AppRoutes;