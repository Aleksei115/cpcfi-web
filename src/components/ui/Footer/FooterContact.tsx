/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from 'react'
import Image from "next/legacy/image";
import { ModalContext } from '../../../context';
import logoUNAM from '../../../assets/img/escudo_unam1.png'
import logoFi from '../../../assets/img/escudo_fi.png'
import facebookBrand from '../../../assets/icons/facebook.svg'
import githubBrand from '../../../assets/icons/github-brands.svg'
import instagramBrand from '../../../assets/icons/instagram.svg'
import youtubeBrand from '../../../assets/icons/youtube.svg'
import styles from './footerContact.module.scss'

export const FooterContact = () => {

  const { toggleModalData } = useContext(ModalContext)


  const footerItems = [
    { name:'Terms of use', info:'La Facultad de Ingeniería de la UNAM, es responsable del tratamiento de sus datos personales para el registro de usted en calidad de alumno, docente, personal de la entidad académica, conferencista o invitado externo (nacional o extranjero), visitante, proveedor o cliente de servicios universitarios.Para cumplir las finalidades necesarias anteriormente descritas u otras aquellas exigidas legalmente o por las autoridades competentes podrá transferir sus datos personales. Podrá ejercer sus derechos ARCO en la Unidad de Transparencia de la UNAM, o a través de la Plataforma Nacional de Transparencia (http://www.plataformadetransparencia.org.mx).'},
    // { name:'Privacy police', info: '/' },
    // { name:'Cookie preference', info: '/' },
  ]

  const contactMedia = [
    { href:'https://github.com/CPCFI-org', alt:'github', src: githubBrand },
    { href:'https://www.facebook.com/profile.php?id=100078644310892', alt:'facebook', src: facebookBrand },
    { href:'https://www.instagram.com/cpcfi.unam/', alt:'instagram', src: instagramBrand },
    { href:'https://www.youtube.com/channel/UCbO49RzpwIa5_I3x-EDlpug', alt:'youtube', src: youtubeBrand },

  ]

  return (
    <div className={styles['container-footer']}>
      <div className={styles['container-options']}>
        <div className={styles['container-logos']}>
          <a target="_blank" href="https://www.ingenieria.unam.mx/" rel="noopener noreferrer" className={styles['container-logo']}>
            <Image src={logoFi} alt={"FI"} className={styles.logo} width={100} height={100}/>
          </a>
          <a target="_blank" href="https://www.ingenieria.unam.mx/" rel="noopener noreferrer" className={styles['container-logo']}>
            <Image src={logoUNAM} alt={"UNAM"} className={styles.logo} width={100} height={100}/>          
          </a>
        </div>
        <ol>
          {
            footerItems.map((item)=>{
              return(
                <li key={item.name} onClick={()=>{ toggleModalData({ hasImage: false, alt: '', src: '', info: item.info, title: item.name})}}> 
                  {item.name}
                </li>
              )
            })
          }
        </ol>
      </div>
      <div className={styles['container-footer-connect']}>
        <h4>CONNECT WITH US:</h4>
        <div className={styles['container-brands']}>
          {
            contactMedia.map(( media )=>{
              return(
                <a className={styles.brands} href={media.href} target="_blank" rel='noreferrer' key={media.href}>
                  <Image src={media.src} alt={media.alt} className={styles['brand-img']} width={100} height={100}/>
                </a>
              )
            })
          }
        </div>
      </div>
      <div className={styles['container-email']}>
          <h4>cpcfi.unam@gmail.com</h4>
      </div>
    </div>
  )
}
