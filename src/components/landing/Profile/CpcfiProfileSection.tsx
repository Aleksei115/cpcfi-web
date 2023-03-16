/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type FC } from 'react'
import Image from "next/legacy/image";
import defaultProfile from '../../../assets/icons/default_profile.svg'
import styles from './cpcfiprofile.module.scss'
import { Counter } from '../../ui';


const arrayProfile = [
  { title: 'internships', number: 5 },
  { title: 'sponsors', number: 4 },
  { title: 'members', number: 20 },
]

export const CpcfiProfile: FC = () => {

  return (
    <div className={styles['container-cpcfi-profile']}>
      <div className={styles['container-info-profile']}>
        {
          arrayProfile.map((profile)=>{
            return(
              <div className={styles['container-data']} key={profile.title}>
                <Image src={defaultProfile} alt='logo-profile' className={styles['logo-default-profile']} width={100}/>
                <Counter to={profile.number} symbol={""}/>
                <h3 className={styles.subtitle}>{profile.title}</h3>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
