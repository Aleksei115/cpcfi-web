import { type FC, useState, useEffect } from 'react';
import { TestimonialCard, CirclePhoto } from '../../ui'
import styles from './testimonies.module.scss'
import { type testimonie_aux } from '@prisma/client'



interface Props {
  testimonies: testimonie_aux[]
}


export const TestimoniesSection: FC<Props> = ({ testimonies }) => {


  const [activeTestimonie, setActiveTestimonie] = useState<testimonie_aux | undefined>(testimonies[0])
  const [backgroundTestimonies, setBackgroundTestimonies] = useState<testimonie_aux[]>([])

  useEffect(()=>{

    const newArray = testimonies.filter( ( testimonie ) => {
        if (testimonie.id != activeTestimonie?.id)
          return testimonie
      })

    setBackgroundTestimonies(newArray)

  },[activeTestimonie,testimonies])


  return (
    <div className={styles['container-section']}>
      <div className={styles['container-title-section']}>
        <h3 className={styles['title-section']}>Don&apos;t take our word of it</h3>
        <h3 className={styles['title-section-gradient']}>Trust our team</h3>
      </div>


      {
        activeTestimonie !== undefined 
        
          &&
        <div className={styles['container-cards-section']}>
          {
            backgroundTestimonies.map((testimonie)=>{
              return(
                <CirclePhoto 
                  key={testimonie.id} 
                  size="S" 
                  hasborderPhoto={true}
                  dataTestimonie={testimonie} 
                  onClickPhoto={setActiveTestimonie}
                />
              )
            })
          }
          <TestimonialCard activeTestimonie={activeTestimonie}/>
        </div>
          
      }

      
    </div>
  )
}

