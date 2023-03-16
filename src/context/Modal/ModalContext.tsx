import { createContext } from 'react';

export type ModalData = {
    hasImage : boolean,
    src      : string,
    alt      : string,
    info     : string,
    title    : string
} 


interface ModalContextProps {
    openModal : boolean;
    modalData : ModalData;

    //Methods
    toggleModal : () => void;
    toggleModalData : (value: ModalData) => void;

}

export const ModalContext = createContext({} as ModalContextProps)

