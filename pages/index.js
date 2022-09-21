import Header from "../component/header"
import Sidebar from "../component/sidebar"
import BarGraph from '../component/barchart';
import Doughnat from '../component/doughnut'
import SalesTable from "../component/salesTable";
import UserTable from "../component/userTable";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isLogin } from "../services/authService";

import styles from '../styles/home.module.css'

export default function Dashboard() {
  const selectedMenu = useSelector((state) => state.selectedMenu.value)
  const router = useRouter()

  // redirect to login page if user unauthorized
  useEffect(() => {
    let auth = isLogin()
    if (!auth) {
      router.push("/login")
    }
  }, [])

  return (
    <div>
      <Header />

      {/* this sidebar component will be hidden at mobile size */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      {/* change content based on active menu */}
      <div className={styles.content}>
        {selectedMenu === "dashboard" ? 
          <div className={styles["dashboard-content"]}>
            <BarGraph />
            <Doughnat />
          </div>
        :
          <div>
            {selectedMenu === "sales" ? 
              <div className={styles["sales-content"]}>
                <SalesTable />
              </div>
              :
              <div className={styles["user-content"]}>
                <UserTable />
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}
