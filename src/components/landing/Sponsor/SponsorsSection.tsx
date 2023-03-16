/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type FC, useState } from 'react'
import Image from "next/legacy/image";
import { motion } from 'framer-motion';
import styles from './sponsors.module.scss'
import FILogo from '../../../assets/img/escudo_fi.png'
import DIELogo from '../../../assets/testimoniesImg/image21.png'
import ICLogo from '../../../assets/testimoniesImg/image27.png'
import OMEGALogo from '../../../assets/testimoniesImg/image24.png'
import paperPlane from '../../../assets/icons/paper-plane.svg'
// import wave from '../../../assets/img/wave2.svg'
import { TitleSection } from '../../ui';
import { api } from '../../../utils/api';

export const SponsorsSection: FC = () => {

  const [emailSponsor, setEmailSponsor] = useState("")

  function isWhiteSpace(valor: string) {
    if (/\s/.test(valor)){
      return true;
    } 
    return false;
  }

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    if(isWhiteSpace(e.currentTarget.value) == false)
      setEmailSponsor(e.currentTarget.value)
  }

  const addSponsor = api.sponsor.addProspectSponsor.useMutation({
    onSuccess() {
      alert("Email Sent!")
    },
    onError(){
      alert("Incorrect format!")
    }
  });

  const onClickSend = (email: string) => {

    addSponsor.mutate({ email })
    return false
    
  }


  return (
    <div className={styles['container-sponsors']}>
      
      <TitleSection title='our sponsors'/>

      <div className={styles['container-logos']}>
        <div className={styles['container-logo']}>
          <Image className={styles.logo} src={FILogo} alt="img" width={100} height={100}/>
        </div>
        <div className={styles['container-logo']}>
          <Image className={styles.logo} src={DIELogo} alt="img" width={100} height={100}/>
        </div>
        <div className={styles['container-logo-ic']}>
          <Image className={styles.logo} src={ICLogo} alt="img" width={100} height={100}/>
        </div>
        <div className={styles['container-logo']}>
          <Image className={styles.logo} src={OMEGALogo} alt="img" width={100} height={100}/>
        </div>
      </div>

      <div className={styles['container-wave']}>

        <div className={styles.wave}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill']}></path>
          </svg>
        </div>

        <div className={styles['container-form-sponsors']}>
          <p>We aren&apos;t just talk. We are in the game, in a big way, and are ready to partner with you.</p>
          <form name='mailForm' onSubmit={(e)=>{e.preventDefault()}}>
            <input 
              type="text" 
              name="mailText" 
              placeholder='Your email' 
              value={emailSponsor} 
              onChange={onChangeInput}
            />
            <motion.button type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{onClickSend(emailSponsor)}}
            >
              <Image className={styles['img-button-submit']} src={paperPlane} alt="plane"/>
            </motion.button>
          </form>
        </div>

      </div>


    </div>
  )
}
