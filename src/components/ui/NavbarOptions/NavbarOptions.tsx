/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from 'react';
import Image, { type StaticImageData } from "next/legacy/image";
import { motion } from "framer-motion";
import styles from './navbarOptions.module.scss';

// Cuando queremos usar este componente, siempre debemos proporcionar un svg y un titulo para las pestañas


type OptionType = {
    sectionTitle    : string,
    svg             : StaticImageData,
}

interface Props {
    options             : OptionType[],
    optionSelected      : OptionType  ,
    setOptionSelected   : (a : OptionType)=>undefined,
    bottomPosition      : number
}

export const NavbarOptions: FC<Props> = ({ options, optionSelected, setOptionSelected, bottomPosition}) => {

  return (
    <nav 
        className={styles['container-options']}
        style={{bottom: `${bottomPosition}px`}}
    >
        <ul className={styles.list}>
            {options.map((option) => (
                <li
                key={option.sectionTitle}
                className={`${styles['list-item']} ${option === optionSelected ? styles.selected : ""}`}
                onClick={() => setOptionSelected(option)}
                >
                <Image src={option.svg} alt={option.sectionTitle} width={16}/>
                <h3 className={styles['section-title']}>{option.sectionTitle}</h3>
                {
                    option === optionSelected 
                    ? 
                    <motion.div className={styles.underline} layoutId="underline" />
                    : 
                    null
                }
                </li>
            ))}
        </ul>
    </nav>
  )
}
