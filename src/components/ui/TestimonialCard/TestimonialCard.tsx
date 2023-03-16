import React, { type FC, useEffect ,useState, useContext } from 'react'
import { motion } from "framer-motion"
import styles from './testimonialCard.module.scss'
import { CirclePhoto } from '../CirclePhoto/CirclePhoto';
import { ModalContext } from '../../../context';
import { type testimonie_aux } from "@prisma/client";


interface TestimonialCardProps {
  activeTestimonie : testimonie_aux ;
}

export const TestimonialCard: FC<TestimonialCardProps> = ( { activeTestimonie  } ) => {
   
    const [showCard, setShowCard] = useState(true);
    
    const { toggleModalData } = useContext(ModalContext)

    useEffect(()=>{
      setShowCard(() => window.innerWidth > 795)
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize",resize)
      }
    },[])



    const resize = () => {
      if(window.innerWidth < 795)
        setShowCard(false)
      else
        setShowCard(true)
    }


    return (
      <motion.div 
        className={styles.testimonial}
        layout
      >
        <motion.div layout className={styles.photo}>

        {

          showCard == false ? 
            <CirclePhoto 
              size='L'
              hasborderPhoto={true}
              dataTestimonie={activeTestimonie}
              isClickable={true}
              onClickPhoto={()=>{toggleModalData({ hasImage: false, alt: '', src: '', info: activeTestimonie.description, title: activeTestimonie.name})}}
            />  
            :
            <CirclePhoto 
            size='L'
            hasborderPhoto={true}
            dataTestimonie={activeTestimonie}
            isClickable={false}
          />        

        }


        </motion.div>

        {
          showCard && 
            <>
              <p className={styles.quote}>&#8220;</p>
              <blockquote className={styles.text}>
                <motion.p layout style={{margin:0}}>{ activeTestimonie.description }</motion.p>
              </blockquote>
            </>
        }

        <p className={styles['blockquote-footer']}>{`- ${activeTestimonie.name}, generation #${activeTestimonie.generation_id}`}</p>
      </motion.div>
    )
}
