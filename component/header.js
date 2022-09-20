import styles from '../styles/dashboard.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export default function Header() {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.burger_logo}>
          <AiOutlineMenu size={30} color="black"></AiOutlineMenu>
          <p className={styles.logo}>LOGO</p>
        </div>

        <div className={styles.account}>
          <FaUserCircle size={30} color="black"></FaUserCircle>
          <div className={styles.account_detail}>
            <p className={styles.user_name}>Rian Andra</p>
            <p className={styles.user_role}>Administrator</p>
          </div>
          <IoIosArrowDown size={30} color="#03050B"></IoIosArrowDown>
        </div>
      </header>
    </div>
  )
}
