/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type FC, useState} from 'react'
import { ButtonSvg } from '../';
import arrowLeft from '../../../assets/icons/arrow-left-solid.svg';
import arrowRight from '../../../assets/icons/arrow-right-solid.svg';
import styles from './slideshow.module.scss';
// import imf from "../../../assets/img/profile_background.jpg";
import { AnimatePresence, motion } from 'framer-motion';


interface Props {

    slides?: string[]
  
}
  

const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        // scale: 0.5,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }

export const Slideshow: FC<Props> = ({ slides = []}) => {

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)


    const nextImage = () => {
        setDirection(1)
        if(index == slides.length - 1){
            setIndex(0)
            return
        }
        setIndex(index+1)
    }

    const prevImage = () => {
        setDirection(-1)
        if(index == 0){
            setIndex(slides.length-1)
            return
        }
        setIndex(index-1)
    }


  return (
    <div className={styles.slideshow}>
        
        <AnimatePresence initial={false} custom={direction}>
            <motion.img 
                variants={variants}
                animate='animate'
                initial='initial'
                exit='exit'
                className={styles.slides} 
                src={slides[index]} 
                alt={"slides"} 
                key={slides[index]}
                custom={direction}
                />
        </AnimatePresence>

        <div className={styles.nextButton}>
            <ButtonSvg src={arrowRight} onClickFunc={nextImage}/>
        </div>
        <div className={styles.prevButton}>
            <ButtonSvg src={arrowLeft} onClickFunc={prevImage}/>
        </div>
    </div>
  )
}
