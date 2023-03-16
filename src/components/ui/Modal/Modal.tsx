/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useContext, type FC,  useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import styles from './modal.module.scss'
import { CirclePhoto } from '../CirclePhoto/CirclePhoto';
import { ButtonSvg } from '../ButtonSvg/ButtonSvg';
import xmark from '../../../assets/icons/x-solid.svg';
import { ModalContext } from '../../../context';




const backdrop = {
    visible: { opacity: 1},
    hidden : { opacity: 0}
}

const modal ={
    hidden: {
        x: 0,
        opacity: 0
    },
    visible: {
        left: '50%',
        transform: 'translate(-50%, 0)',
        opacity: 1,
        transition: { delay: 0.5 }
    }
}




export const Modal: FC = ( { } ) => {
    const { openModal, modalData, toggleModal } = useContext(ModalContext)
    // const backdropRef = useRef< HTMLDivElement | undefined >(undefined)

    useEffect(() => {

        if(openModal){
            window.addEventListener('keypress',(e)=>{
                if(e.key == 'Escape'){
                    toggleModal()                
                }
            })
        }


      return () => {
        window.removeEventListener('keypress',(e)=>{
            if(e.key === 'Escape')
                toggleModal()
        })
      }

    }, [openModal, toggleModal])
    

  return (
    <AnimatePresence mode='wait'> 
        {
            openModal &&
            (
                <motion.div 
                    className={styles.brackdrop}
                    variants={ backdrop }
                    initial="hidden"
                    animate="visible"
                    exit='hidden'
                    // ref={ backdropRef }
                >
                    <motion.div 
                        className={`${modalData.hasImage && styles['modal-with-img']} ${styles.modal}`}
                        variants={modal}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <motion.div 
                            className={styles.exit}                         
                        >
                            <ButtonSvg src={xmark} onClickFunc={toggleModal}/>
                        </motion.div>
                        <h3 className={styles.title}>
                            {
                                modalData.title
                            }
                        </h3>
                        <motion.div className={styles['modal-container-text']}>
                            {
                                modalData.hasImage &&
                                    <div className={styles.image}>
                                        <CirclePhoto size='S' hasborderPhoto={false} dataSimple={{ img: modalData.src , name: modalData.alt }}/>
                                    </div>
                            }
                            <p className={styles.text}>
                                {
                                    modalData.info
                                }
                            </p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            )
                
        }
    </AnimatePresence>
  )
}
