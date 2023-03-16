/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { type FC, useState } from 'react';
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { type TypeSectionData } from '../../../pages/about'
import { SectionInfo } from '../';
import styles from './containerSections.module.scss';



interface Props {
  sectionsInfo:  TypeSectionData[]
}


export const ContainerSections: FC<Props> = ({ sectionsInfo }) => {

  const [selectedTab, setSelectedTab] = useState(sectionsInfo[0]);

  return (
    <div className={styles['container-sections']}>=
      <SectionInfo image={selectedTab?.image.src || ''} info={selectedTab?.info || ['']} title={selectedTab?.title || ''} />

      <nav 
        className={styles['container-options']}
      >
        <ul className={styles.list}>
            {sectionsInfo.map((option) => (
                <li
                key={option.sectionTitle}
                className={`${styles['list-item']} ${option === selectedTab ? styles.selected : ""}`}
                onClick={() => setSelectedTab(option)}
                >
                <Image src={option.svg} alt={option.sectionTitle} width={16}/>
                <h3 className={styles['section-title']}>{option.sectionTitle}</h3>
                {
                    option === selectedTab 
                    ? 
                    <motion.div className={styles.underline} layoutId="underline" />
                    : 
                    null
                }
                </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
 