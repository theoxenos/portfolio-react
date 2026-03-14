import {NavLink} from 'react-router';
import type {MainMenuItemProps} from '../types.ts';

const MainMenuItem = ({icon, title, url}: MainMenuItemProps) => (
    <li>
        <NavLink
            to={url}
            className={({isActive}) =>
                `d-flex flex-column justify-content-center align-items-center text-decoration-none ${isActive ? 'text-nord-8' : 'text-nord-6'}`
            }
        >
            <i className={`bi ${icon} fs-5`} aria-hidden="true"></i>
            <span>{title}</span>
        </NavLink>
    </li>
);

export default MainMenuItem;