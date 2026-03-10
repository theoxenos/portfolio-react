import Nav from "react-bootstrap/esm/Nav";
import type {MainMenuItemProps} from "../types.ts";

const MainMenuItem = ({icon, title, url}: MainMenuItemProps) => (
    <li>
        <Nav.Link className="d-flex flex-column justify-content-center align-items-center" href={url}>
            <i className={`bi ${icon} fs-5`} aria-hidden="true"></i>
            <span>{title}</span>
        </Nav.Link>
    </li>
)

export default MainMenuItem