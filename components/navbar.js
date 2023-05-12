import navStyles from './navbar.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className={navStyles.topnav}>
      <div className={navStyles.logo}>
        <img
          src="/images/accent l.svg"
          className={navStyles.logoimg}
        />
        <div  className={utilStyles.headingLg}>Accent Coach</div>
      </div>

      <input id="menu-toggle" className={navStyles.menutoggle} type="checkbox" />
      <label className={navStyles.menubuttoncontainer} for="menu-toggle">
        <div className={navStyles.menubutton}></div>
      </label>
     
      <ul className={navStyles.menu}>

        <li> <Link key="canonical" href="/">首頁</Link></li>
        <li> <Link href="/searchbooking">查詢</Link></li>
        <li> <Link href="/booking">預約</Link></li>
      </ul>
  
    </div>
  )
}