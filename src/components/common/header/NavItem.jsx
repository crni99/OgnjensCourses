import { Link } from 'react-router-dom';

export default function NavItem({ pageRoute, pageName }) {
    return (
        <li className="nav-item">
            <Link to={pageRoute} className="dropdown-item"> {pageName} </Link>
        </li>
    );
}
