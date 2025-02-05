import NavItem from './NavItem';
import { CoursesNames, CoursesPaths } from '../../../utils/const';

export default function GroupItemBackend() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/backend-courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Back-end
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={CoursesPaths.NET_API_BASICS} pageName={CoursesNames.NET_API_BASICS} />
                <NavItem pageRoute={CoursesPaths.NET_API_ADVANCED} pageName={CoursesNames.NET_API_ADVANCED} />
            </ul>
        </li>
    );
}
