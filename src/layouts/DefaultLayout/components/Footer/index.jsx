import { Link } from "react-router-dom";
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer>
            <div className={styles.infos}>
                <p>© 2025 ThanhVo. All rights reserved.</p>
                <p>Contact: thanhvo.itconsultant@gmail.com</p>
            </div>
            <div className={styles.btnSocial}> 
                <Link to={"https://github.com/thanhvo-uparis"}><i class="fa-brands fa-square-github"></i></Link>
                <Link><i class="fa-solid fa-envelope"></i></Link>
            </div>
        </footer>
    )
}

export default Footer;