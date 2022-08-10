// import { Link } from "react-router-dom";
// Link creates an anchor link, captures the click and prevent the browser default.

// NavLink do the same as Link but more than that with NavLink, we can also set css class on the active anchor item to show user whick link is active. We just need to tell NavLink 'which class to add'.
import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        {/* <a href=""></a> results in reloading a new page when we navigate to a different page. */}
                        {/* <a href='/welcome'>Welcome><a/> */}
                        {/* <Link to='/welcome'>Welcome</Link> */}
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;