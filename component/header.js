import {useEffect, useState} from 'react';
import styles from '../styles/dashboard.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import Sidebar from './sidebar';
import LoginService from '../services/LoginService';
import UserService from '../services/UserService';

import { isLogin } from '../services/authService';

import { useRouter } from "next/router";

export default function Header() {
  const [user, setUser] = useState({})
  const Router = useRouter();

  // get user data for header detail account
  useEffect(() => {
    let auth = isLogin()
    if (auth) {
      let userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData)
    }
  }, [])
  
  // remove token from local storage and direct route to login
  function submitLogout(){
    try {
      localStorage.removeItem("user");
      Router.replace("/login");
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.burger_logo}>
          {/* hamburger button can clicked on page that have max-width 1200px */}
          <AiOutlineMenu size={30} color="black" className="burger"></AiOutlineMenu>
          <button type="button" className="btn btn-light burger-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><AiOutlineMenu size={30} color="black"></AiOutlineMenu></button>
          <p className={styles.logo}>LOGO</p>
        </div>

        <div className={styles.account}>
          <FaUserCircle size={30} color="black"></FaUserCircle>
          <div className={styles.account_detail}>
            <p className={styles.user_name}>{user == null ? "Rian Andra" : user.email}</p>
            <p className={styles.user_role}>{user == null ? "Administrator" : user.employee}</p>
          </div>
          <button type="button" className="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false"><IoIosArrowDown size={30} color="#03050B"></IoIosArrowDown></button>
          <div className="dropdown-menu">
            <button type="button" className="btn btn-light btn-logout" onClick={submitLogout}>Logout</button>
          </div>
        </div>
      </header>
      
      {/* offcanvas for sidebar on mobile version */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <Sidebar />
        </div>
      </div>

      <style jsx>{`        
        .offcanvas {
          width: 290px;
          background: #F6F6F9;
        }
        .offcanvas-header {
          height: 15px;
        }
        .dropdown-menu {
          padding: 0px;
        }
        .btn-logout {
          width: 100%;
        }
        
        @media only screen and (min-width: 1201px) { 
          .burger-btn {
            display: none;
          }
        }
        @media only screen and (max-width: 1200px) { 
          .burger {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
