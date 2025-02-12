import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { CoursesNames, CoursesPaths } from '../../../utils/const';

export default function GroupItemBackend() {
    return (
        <li className="nav-item dropdown">
            <Link
                to="/databases-courses"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Back-end
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={CoursesPaths.NET_API_BASICS} pageName={CoursesNames.NET_API_BASICS} />
                <NavItem pageRoute={CoursesPaths.NET_API_ADVANCED} pageName={CoursesNames.NET_API_ADVANCED} />
            </ul>
        </li>
    );
}
