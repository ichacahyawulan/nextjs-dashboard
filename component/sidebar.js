import styles from '../styles/sidebar.module.css'
import { AiOutlineDashboard, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiLineChart } from 'react-icons/bi'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const [dashboard, setDashboard] = useState(true)
  const [sales, setSales] = useState(false)
  const [management, setManagement] = useState(false)
  const router = useRouter()

  // useEffect(() => {
  //   let btn = document.getElementsByClassName(`${styles.btn_menu}`);

  //   // console.log(btn)
  //   for (let i = 0; i < btn.length; i++) {
  //     btn[i].addEventListener("click", function() {
  //       var current = document.getElementsByClassName(`${styles.active_menu}`);
  //       console.log(current[0].className)
  //       current[0].className = current[0].className.replace(` ${styles.active_menu}`, "");
  //       // this.className += `${styles.active_menu}`;
  //     });
  //   }
  // })

  const getDashboardStyle = () => {
    if (dashboard) return styles.active_menu;
    else return styles.btn_menu;
  };

  const getSalesStyle = () => {
    if (sales) return styles.active_menu;
    else return styles.btn_menu;
  };

  const getManagementStyle = () => {
    if (management) return styles.active_menu;
    else return styles.btn_menu;
  };

  const handleDashboardClick = () => {
    setDashboard(true)
    setSales(false)
    setManagement(false)
    router.push("/dashboard")
  };

  const handleSalesClick = () => {
    setDashboard(false)
    setSales(true)
    setManagement(false)
    router.push("/sales")
  };

  const handleManagementClick = () => {
    setDashboard(false)
    setSales(false)
    setManagement(true)
    router.push("/user_management")
  };

  return (
    <div className={styles.sidebar}>
      <p className={styles.section_name}>Analysis</p>
      <button className={getDashboardStyle()} onClick={handleDashboardClick}>
        <AiOutlineDashboard size={25}></AiOutlineDashboard>
        Dashboard
      </button>
      <button className={getSalesStyle()} onClick={handleSalesClick}>
        <BiLineChart size={25}></BiLineChart>
        Sales
      </button>
      <p className={styles.section_name}>Admin Access</p>
      <button className={getManagementStyle()} onClick={handleManagementClick}>
        <AiOutlineUsergroupAdd size={25}></AiOutlineUsergroupAdd>
        User Management
        {management ? 
          <IoIosArrowDown size={25}></IoIosArrowDown>
        :
          <IoIosArrowForward size={25}></IoIosArrowForward>
        }
      </button>
      {management ? 
        <button className={styles.active_menu}>
          User
        </button>
      :
        null
      }
      
    </div>
  )
}
