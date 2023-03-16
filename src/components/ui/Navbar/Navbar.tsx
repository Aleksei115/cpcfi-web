/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useContext } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { type StaticImageData } from "next/legacy/image";
import cpcfiLetters from '../../../assets/img/logo_letras.png';
import cpcfiBallons from '../../../assets/img/globos.png';
import bars from '../../../assets/icons/bars-solid.svg'
import { UIContext } from '../../../context/UI';
import styles from './navbar.module.scss'



const navbarItems = [
  { name:'About us', route: '/about' },
  // { name:'Compiler', route: '/compiler' },

]


export const Navbar = () => {

  const { openNavbar, toggleNavbar } = useContext(UIContext)

  return (
    <div className={styles.container}>      
      <div className={styles['container-collapse']}>
        <div className={styles['container-logos']}>
          <span className={styles['img-container']}>
            <Link href={'/'}>
                <Image src={cpcfiBallons} alt="ballons cpcfi" className={`${styles['img-ballons']} ${styles.img}`}/>
            </Link>
          </span>
          <span className={styles['img-container']}>
            <Link href={'/'}>
              <Image src={cpcfiLetters} alt="CPCFI" className={styles.img}/>
            </Link>
          </span>
        </div>
        <button onClick={toggleNavbar}>
          <Image src={bars as StaticImageData} alt='bars' className={styles.img}/>
        </button>
        <ul className={`${openNavbar ? styles['nav-active'] : ''} ${styles['list-container']}`}>
          {
            navbarItems.map(( item )=>{
              return(
                <li key={item.name} className={styles.li}>
                  <a className={styles.link} href={item.route} onClickCapture={toggleNavbar}>
                    {item.name}
                  </a>
                </li>
              )
            })    
          }
        </ul>
      </div>
    </div>
  )
}
