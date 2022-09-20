import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/login.module.css'
import Script from 'next/script'
import { useState, useEffect } from 'react'

export default function Login() {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");

  useEffect(() => {
    let forms = document.getElementsByClassName('needs-validation');
    console.log(forms)
    
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
  }, [])

  function submitLogin(e){
    e.preventDefault();

    try {
      const user = {
        email: userEmail,
        password: userPass
      }

    } catch (error) {
      console.log(error.message)
    }
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.form}>
          <div className={styles.title}>
            <h1 className={styles.login}>
              Login
            </h1>

            <p className={styles.description}>
              Welcome back, enter your credentials to continue.
            </p>
          </div>
          
          <form action="/examples/actions/confirmation.php" className={`${styles.input} needs-validation`} method="post" noValidate>
            <div className={`${styles.form_input}`}>
              <label className={styles.form_label} htmlFor="inputEmail">Email</label>
              <input className={styles.form_control} id="inputEmail" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
              <div className="invalid-feedback">This field is required.</div>
            </div>
            <div className={`${styles.form_input}`}>
              <label className={styles.form_label} htmlFor="inputPassword">Password</label>
              <input type="password" className={styles.form_control} id="inputPassword" placeholder="Enter password" required onChange={(e) => setPass(e.target.value)} />
              <div className="invalid-feedback">This field is required.</div>
            </div>
            <button className={`${styles.button_input}`} onClick={(e) => submitLogin(e)}>Login</button>
          </form>
        </div>
      </main>

    </div>
  )
}
