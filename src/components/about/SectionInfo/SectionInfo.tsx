import React, { type FC } from 'react';
import styles from './sectionInfo.module.scss';
import { AnimatePresence, motion, type Variants } from "framer-motion";


interface Props {
  info    : string[];
  image   : string;
  title   : string;
}

const infoVariants: Variants = {
  in: { 
    y:10,
    opacity: 0 
  },
  out: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -10,
    opacity: 0 
  }
};


export const SectionInfo: FC<Props> = ({image,info,title }) => {


  return (
    
    
    <AnimatePresence mode='wait'>
      <motion.div
        className={styles['card-container']}
        style={{backgroundImage: `url(${image})`  }}
        key={image}
        initial={"in"}
        animate={"out"}
        exit={"exit"}
        transition={{ duration: 0.2 }}  
        variants={infoVariants}
      >
        <motion.div className={styles['background-filter']}></motion.div>
          <motion.div 
            key={title}
            className={styles['data-container'] }
            initial={"in"}
            animate={"out"}
            exit={"exit"}
            transition={{ duration: 0.2 }}  
            variants={infoVariants}
          >
            <h2 className={styles.title}>
              {title}
            </h2>
            <div className={styles['text-container']}>
              {
                info.map((paragraph)=>{

                  return (
                    <p key={paragraph} className={styles.text}>
                      {paragraph}
                    </p>
                  )
                  
                })
              }
            </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
