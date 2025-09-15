import { Link } from 'react-router-dom';
import styles from './AuthSidebar.module.scss';

function AuthSidebar() {
    return (
        <div className={styles.container}>
            <Link to='/login'><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
            <Link to='/register'><i class="fa-solid fa-user-plus"></i> Sign Up</Link>
            <Link><i class="fa-solid fa-key"></i> Forgot the password</Link>
        </div>  
    )
}

export default AuthSidebar;