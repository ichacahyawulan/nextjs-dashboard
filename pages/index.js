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

export default function Dashboard() {
  const selectedMenu = useSelector((state) => state.selectedMenu.value)
  const router = useRouter()

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
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* change content based on active menu */}
      <div className="content">
        {selectedMenu === "dashboard" ? 
          <div className="dashboard-content">
            <BarGraph />
            <Doughnat />
          </div>
        :
          <div>
            {selectedMenu === "sales" ? 
              <div className="sales-content">
                <SalesTable />
              </div>
              :
              <div className="user-content">
                <UserTable />
              </div>
            }
          </div>
        }
      </div>

      <style jsx>{`
        .content {
          position: relative;
          left: 280px;
          top: 80px;
          padding: 20px 50px;
          width: calc(100% - 280px);
          background-color: #F6F6F9;
        }

        .sidebar {
          position: absolute;
          top: 80px;
        }

        .sales-content, .dashboard-content, .user-content {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: row;
          gap: 30px;
          justify-content: center;
          align-items: center;
        }

        @media only screen and (max-width: 1200px) {
          .content {
            width: 100%;
            left: 0px;
          }
        }

        @media only screen and (max-width: 992px) {
          .content {
            width: 100%;
            left: 0px;
          }
          .sales-content, .dashboard-content, .user-content {
            flex-direction: column;
          }
          .sidebar {
            display: none;
          }
        }

        @media only screen and (max-width: 768px) {
          .content {
            width: 100%;
            left: 0px;
            padding: 20px 20px;
          }
          .sales-content, .dashboard-content, .user-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
