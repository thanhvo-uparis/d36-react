import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./components/Footer";
import styles from './DefaultLayout.module.scss';

function DefaultLayout() {
    return (
        <div className={styles.defaultLayout}>
            <Header/>
            <div className={styles.container}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
        
    )
}

export default DefaultLayout;