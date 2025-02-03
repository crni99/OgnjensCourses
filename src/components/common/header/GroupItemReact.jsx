import NavItem from './NavItem';
import { PageNames, RouteList } from "../../../utils/consts/ConstReact";

export default function GroupItemNetApi() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href={RouteList[0].path} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {RouteList.map((route) => {
                    const routeKey = route.path.split('/').pop().toUpperCase().replace(/-/g, '_');
                    return (
                        <NavItem
                            key={route.path}
                            pageRoute={route.path}
                            pageName={PageNames[routeKey] || routeKey}
                        />
                    );
                })}
            </ul>
        </li>
    );
}
