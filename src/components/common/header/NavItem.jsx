export default function NavItem({ pageRoute, pageName }) {
    return (
        <li className="nav-item">
            <a className="dropdown-item" href={pageRoute}>{pageName}</a>
        </li>
    );
}
