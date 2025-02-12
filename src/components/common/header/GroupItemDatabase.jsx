import {Link} from 'react-router-dom';
import NavItem from './NavItem';
import { CoursesNames, CoursesPaths } from '../../../utils/const';

export default function GroupItemDatabases() {
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
                Databases
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={CoursesPaths.SQL_BASICS} pageName={CoursesNames.SQL_BASICS} />
                <NavItem pageRoute={CoursesPaths.SQL_ADVANCED} pageName={CoursesNames.SQL_ADVANCED} />
            </ul>
        </li>
    );
}
