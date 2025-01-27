import NavItem from './NavItem';
import { PageRoutes, PageNames } from "../../../utils/const";

export default function GroupItemNetApi() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href={PageRoutes.GETTING_STARTED_DOTNET_API} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                .NET API
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={PageRoutes.GETTING_STARTED_DOTNET_API} pageName={PageNames.GETTING_STARTED_DOTNET_API} />
                <NavItem pageRoute={PageRoutes.ENTITY_FRAMEWORK_CORE_SETUP} pageName={PageNames.ENTITY_FRAMEWORK_CORE_SETUP} />
                <NavItem pageRoute={PageRoutes.CREATING_API_CONTROLLERS} pageName={PageNames.CREATING_API_CONTROLLERS} />
                <NavItem pageRoute={PageRoutes.MANIPULATING_RESOURCES_VALIDATING_INPUT} pageName={PageNames.MANIPULATING_RESOURCES_VALIDATING_INPUT} />
                <NavItem pageRoute={PageRoutes.VALIDATING_INPUT_DATA_ANNOTATIONS} pageName={PageNames.VALIDATING_INPUT_DATA_ANNOTATIONS} />
                <NavItem pageRoute={PageRoutes.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION} pageName={PageNames.WORKING_WITH_SERVICES_DEPENDENCY_INJECTION} />
                <NavItem pageRoute={PageRoutes.HANDLING_ASYNCHRONOUS_REQUESTS} pageName={PageNames.HANDLING_ASYNCHRONOUS_REQUESTS} />
                <NavItem pageRoute={PageRoutes.SEARCHING_FILTERING_PAGING_RESOURCES} pageName={PageNames.SEARCHING_FILTERING_PAGING_RESOURCES} />
                <NavItem pageRoute={PageRoutes.SECURING_API_AUTHENTICATION_AUTHORIZATION} pageName={PageNames.SECURING_API_AUTHENTICATION_AUTHORIZATION} />
                <NavItem pageRoute={PageRoutes.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS} pageName={PageNames.ADVANCED_API_SECURITY_OAUTH_JWT_HTTPS} />
                <NavItem pageRoute={PageRoutes.HANDLING_CORS_REQUESTS} pageName={PageNames.HANDLING_CORS_REQUESTS} />
                <NavItem pageRoute={PageRoutes.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE} pageName={PageNames.LOGGING_EXCEPTION_HANDLING_MIDDLEWARE} />
                <NavItem pageRoute={PageRoutes.ERROR_RESPONSE_STATUS_CODES} pageName={PageNames.ERROR_RESPONSE_STATUS_CODES} />
                <NavItem pageRoute={PageRoutes.API_RATE_LIMITING} pageName={PageNames.API_RATE_LIMITING} />
                <NavItem pageRoute={PageRoutes.VERSIONING_DOCUMENTING_API_SWAGGER} pageName={PageNames.VERSIONING_DOCUMENTING_API_SWAGGER} />
                <NavItem pageRoute={PageRoutes.UNIT_TESTING_XUNIT} pageName={PageNames.UNIT_TESTING_XUNIT} />
                <NavItem pageRoute={PageRoutes.MONITORING_APPLICATION_HEALTHCHECKS} pageName={PageNames.MONITORING_APPLICATION_HEALTHCHECKS} />
                <NavItem pageRoute={PageRoutes.IMPROVING_PERFORMANCE_CACHING} pageName={PageNames.IMPROVING_PERFORMANCE_CACHING} />
                <NavItem pageRoute={PageRoutes.SCALING_OPTIMIZING_API} pageName={PageNames.SCALING_OPTIMIZING_API} />
            </ul>
        </li>
    );
}
