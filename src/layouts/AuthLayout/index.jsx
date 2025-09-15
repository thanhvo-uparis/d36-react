import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import AuthSidebar from './components/AuthSidebar';
import styles from './AuthLayout.module.scss';

function AuthLayout() {
    return (
        <div>
            <Header />
            <main>
                <div className={styles.sidebar}>
                    <AuthSidebar />
                </div>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AuthLayout;