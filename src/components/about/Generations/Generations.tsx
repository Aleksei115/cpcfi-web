/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC, useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { TitleSection } from '../../ui';
import { type TypeGenerationData } from '../../../pages/about'
import styles from './generations.module.scss';




interface Props {
  generationsInfo : TypeGenerationData[]
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


export const Generations : FC<Props> = ({ generationsInfo }) => {

  const [selectedTab, setSelectedTab] = useState(generationsInfo[0]);

  return (
    <div className={styles.section}>
      <TitleSection title='Generations' />
      <AnimatePresence mode='wait'>
        <motion.div
          className={styles['photo-container']}
          style={{backgroundImage: `url(${selectedTab?.photo.src})`  }}
          key={selectedTab?.photo.src}
          initial={"in"}
          animate={"out"}
          exit={"exit"}
          transition={{ duration: 0.2 }}  
          variants={infoVariants}
        >
        </motion.div>
      </AnimatePresence>
      <nav 
        className={styles['container-options']}
      >
        <ul className={styles.list}>
          {
            generationsInfo.map((option) => (
                <li
                key={`Generation${option.generationNumber}`}
                className={`${styles['list-item']} ${option === selectedTab ? styles.selected : ""}`}
                onClick={() => setSelectedTab(option)}
                >
                <h3 className={styles['section-title']}>{`Generation ${option.generationNumber}`}</h3>
                {
                    option === selectedTab 
                    ? 
                    <motion.div className={styles.underline} layoutId="underline" />
                    : 
                    null
                }
                </li>
            ))
          }
        </ul>
      </nav>


    </div>
  )
}
