import { type FC } from 'react';
import styles from './titleSection.module.scss';

interface Props {
    title: string
}

export const TitleSection : FC<Props> = ({ title }) => {
  return (
    <h3 className={styles['title-sponsors']}>{title}</h3>
  )
}
