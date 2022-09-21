import styles from '../styles/login.module.css'
import { useState } from 'react'
import LoginService from '../services/LoginService';
import { useRouter } from "next/router";

export default function Login() {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const Router = useRouter()

  function submitLogin(event){
    try {
      const user = {
        email: userEmail,
        password: userPass
      }

      let forms = document.getElementsByClassName('needs-validation');
    
    // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');

        LoginService.login(user).then((res) => {
          switch (res.status) {
            case 200:
              localStorage.removeItem("user");
              let user = {
                "email": res.data.email,
                "employee": res.data.employee,
                "token": res.data.token
              }
              localStorage.setItem("user", JSON.stringify(user));
              Router.push("/");
              break;
            default:
              break
          }                
        })
      });
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
          
          <form className={`${styles.input} needs-validation`} method="post" noValidate>
            <div className={styles.form_input}>
              <label className={styles.form_label} htmlFor="inputEmail">Email</label>
              <input className={styles.form_control} id="inputEmail" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
              <div className="invalid-feedback">This field is required.</div>
            </div>
            <div className={styles.form_input}>
              <label className={styles.form_label} htmlFor="inputPassword">Password</label>
              <input type="password" className={styles.form_control} id="inputPassword" placeholder="Enter password" required onChange={(e) => setPass(e.target.value)} />
              <div className="invalid-feedback">This field is required.</div>
            </div>
            <button type="button" className={styles.button_input} onClick={(e) => submitLogin(e)}>Login</button>
          </form>
        </div>
      </main>

    </div>
  )
}
