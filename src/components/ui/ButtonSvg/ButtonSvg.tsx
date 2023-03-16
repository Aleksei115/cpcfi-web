import { type FC } from 'react';
import Image from "next/legacy/image";
import styles from './buttonSvg.module.scss'

interface ButtonSvgProps {
  src     : string;
  onClickFunc : () => void;
} 


// ?Add more sizes, like small, medium, large

export const ButtonSvg: FC<ButtonSvgProps> = ({ src , onClickFunc }) => {
  return (
    <button className={styles.btn} onClick={()=> onClickFunc()}>
      <Image src={src} alt='button' className={styles.img} layout="fill" />
    </button>
  )
}
