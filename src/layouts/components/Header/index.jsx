import { Link, NavLink } from "react-router-dom";
import styles from './Header.module.scss';

function Header() {
    const listsMenu = [
        {
            to: '/',
            name: "Home"
        },
        {
            to: '/about',
            name: "About"
        },
        {
            to: '/posts',
            name: "Posts"
        },
        {
            to: '/contact',
            name: "Contact"
        },
        {
            to: '/privacy',
            name: "Privacy"
        },
    ]
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <img className={styles.logo} src="https://avatars.githubusercontent.com/u/18712667?v=4" alt="logo" />
            </div>
            <ul className={styles.nav}>
                {listsMenu.map((item) => <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to={item.to}>{item.name}</NavLink></li>)}
                
            </ul>
            <div className={styles.account}>
                <button className={styles.signIn}><Link to="/login">Login</Link></button>
                <button className={styles.signUp}><Link to="/register">Sign Up</Link></button>
                <button className={styles.user}>User</button>
            </div>
        </div>
    )
}

export default Header;
