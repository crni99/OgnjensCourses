import {Link} from 'react-router-dom';
import NavItem from './NavItem';
import { CoursesNames, CoursesPaths } from '../../../utils/const';

export default function GroupItemFrontend() {
    return (
        <li className="nav-item dropdown">
            <Link
                to="/frontend-courses"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Front-end
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavItem pageRoute={CoursesPaths.REACT_BASICS} pageName={CoursesNames.REACT_BASICS} />
                <NavItem pageRoute={CoursesPaths.REACT_ADVANCED} pageName={CoursesNames.REACT_ADVANCED} />
            </ul>
        </li>
    );
}
