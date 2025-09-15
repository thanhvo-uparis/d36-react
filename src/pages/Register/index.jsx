import styles from './Register.module.scss';

function Register() {
    return (
        <div className={styles.container}>
            <div  className={styles.body}>
                <h3 className={styles.title}>Sign Up</h3>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="">Email</label>
                    <input className={styles.input} name="email" type="text" />
                    <br/>
                    <label className={styles.label}  htmlFor="">Password</label>
                    <input className={styles.input} name="password" type="text" />
                    <br/>
                    <label className={styles.label}  htmlFor="">Confirm password</label>
                    <input className={styles.input} name="password" type="text" />
                    <br/>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
