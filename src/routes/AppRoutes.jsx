import React from "react";
import { Route } from "react-router-dom";
import { PageRoutes } from '../utils/const.js';
import GettinStartedDotNetApi from '../components/pages/GettingStartedDotNetApi.jsx';
import EntityFrameworkCoreSetup from "../components/pages/EntityFrameworkCoreSetup.jsx";
import CreatinApiControllers from "../components/pages/CreatingApiControllers.jsx";
import ManipulatingResourcesValidatingInput from "../components/pages/ManipulatingResourcesValidatingInput.jsx";
import ValidatingInputDataAnnotations from "../components/pages/ValidatingInputDataAnnotations.jsx";
import WorkingWithServicesDependencyInjection from "../components/pages/WorkingWithServicesDependencyInjection.jsx";
import HandlingAsynchronousRequests from "../components/pages/HandlingAsynchronousRequests.jsx";
import SearchingFilteringPagingResources from "../components/pages/SearchingFilteringPagingResources.jsx";
import SecuringApiAuthenticationAuthorization from "../components/pages/SecuringApiAuthenticationAuthorization.jsx";
import AdvancedApiSecurityOauthJwtHttps from "../components/pages/AdvancedApiSecurityOauthJwtHttps.jsx";

const AppRoutes = (
    <>
        <Route path={PageRoutes.GETTING_STARTED_DOTNET_API} element={<GettinStartedDotNetApi />} />
        <Route path={PageRoutes.ENTITY_FRAMEWORK_CORE_SETUP} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.CREATING_API_CONTROLLERS} element={<CreatinApiControllers />} />
        <Route path={PageRoutes.MANIPULATING_RESOURCES_VALIDATING_INPUT} element={<ManipulatingResourcesValidatingInput />} />
        <Route path={PageRoutes.VALIDATING_INPUT_DATA_ANNOTATIONS} element={<ValidatingInputDataAnnotations />} />
        <Route path={PageRoutes.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION} element={<WorkingWithServicesDependencyInjection />} />
        <Route path={PageRoutes.HANDLING_ASYNCHRONOUS_REQUESTS} element={<HandlingAsynchronousRequests />} />
        <Route path={PageRoutes.SEARCHING_FILTERING_PAGING_RESOURCES} element={<SearchingFilteringPagingResources />} />
        <Route path={PageRoutes.SECURING_API_AUTHENTICATION_AUTHORIZATION} element={<SecuringApiAuthenticationAuthorization />} />
        <Route path={PageRoutes.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS} element={<AdvancedApiSecurityOauthJwtHttps />} />
        <Route path={PageRoutes.HANDLING_CORS_REQUESTS} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.ERROR_RESPONSE_STATUS_CODES} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.API_RATE_LIMITING} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.VERSIONING_DOCUMENTING_API_SWAGGER} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.UNIT_TESTING_XUNIT} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.MONITORING_APPLICATION_HEALTHCHECKS} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.IMPROVING_PERFORMANCE_CACHING} element={<EntityFrameworkCoreSetup />} />
        <Route path={PageRoutes.SCALING_OPTIMIZING_API} element={<EntityFrameworkCoreSetup />} />
    </>
);

export default AppRoutes;