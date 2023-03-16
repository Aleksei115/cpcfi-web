/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from 'react';
import Image from "next/legacy/image";
import styles from './circlePhoto.module.scss'
import { type testimonie_aux } from "@prisma/client"


type DataSimpleType = { img: string, name: string }
  

type SizePhoto = 'S' | 'M' | 'L';

interface CirclePhotoProps {
    size            : SizePhoto;
    hasborderPhoto  : boolean;
    isFloating     ?: boolean;
    dataTestimonie ?: testimonie_aux;
    dataSimple     ?: DataSimpleType;
    isClickable    ?: boolean;
    onClickPhoto   ?: Function; 
    
}

export const CirclePhoto : FC<CirclePhotoProps> = ({ size, hasborderPhoto, dataTestimonie, dataSimple ={ img: '', name: ''} , isFloating = false, onClickPhoto = () => 0, isClickable = true }) => {

    const urlImage = dataTestimonie?.testimonie_img

  return (
    <div 
        className = {`
            ${ hasborderPhoto ? styles['container-circle-img'] : styles['container-circle-img-no-boder'] }
            ${ isFloating && styles.floating }
            ${ size == 'S' && styles.small }
            ${ size == 'M' && styles.medium }
            ${ size == 'L' && styles.large }
            ${ isClickable && styles.clickable }
        `}

        onClick={()=>{
            // If we need to change the state of the image, we can do it by change the dataTestimonie, maybe it will need a refactoring
            onClickPhoto(dataTestimonie)    
        }} 

    >
        {
            dataSimple?.img != '' 
            ?
                <Image
                    layout='fill'
                    src={dataSimple?.img || ''} 
                    alt={`${dataSimple?.name}`} 
                    className={styles['card-img']}
                />
            :
            <Image
                layout='fill'
                src={urlImage || ''} 
                alt={`${dataTestimonie?.name}`} 
                className={styles['card-img']}
            />
        }


    </div>   
  )
}
