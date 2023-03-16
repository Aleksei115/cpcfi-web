/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { type FC } from 'react'
import Image from "next/legacy/image";
import cpcfiBallons from '../../../assets/img/globos.png';
import styles from './banner.module.scss'
import { Slideshow } from '../../ui/Slideshow/Slideshow';


interface Props {

  slides?: string[] | [];

}


export const BannerSection: FC<Props> = ({ slides = []}) => {

  return (
    <div className={styles['container-banner']}>
      <h1 className={`${styles['main-title']} ${slides.length != 0 && styles['baner-margin'] }`}>
        CLUB DE PROGRAMACIÓN COMPETITIVA DE LA FACULTAD DE INGENIERÍA
      </h1>

      <div className={styles.container_slide_img}>
          {
            slides.length == 0 
              ?
              <div className={styles['img-container']}>
                <Image src={cpcfiBallons} alt="cpcfi-ballons" className={styles.img} priority/>
              </div>
              :
              <Slideshow slides={slides}/>
          }
      </div>
    </div>
  )
}
