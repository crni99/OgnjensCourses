import NavItem from './NavItem';
import { CoursesNames, CoursesPaths } from '../../../utils/const';

export default function GroupItemDatabases() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/databases-courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Databases
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={CoursesPaths.SQL_BASICS} pageName={CoursesNames.SQL_BASICS} />
                <NavItem pageRoute={CoursesPaths.SQL_ADVANCED} pageName={CoursesNames.SQL_ADVANCED} />
            </ul>
        </li>
    );
}
