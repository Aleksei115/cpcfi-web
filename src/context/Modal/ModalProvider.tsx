import { type FC, useReducer } from 'react';
import { modalReducer, ModalContext, type ModalData } from './';
// import {  } from './UIContext';

export interface ModalProviderProps {
    children: React.ReactNode;
}

export interface ModalState {
    openModal : boolean;
    modalData : ModalData;
}

const Modal_InitialState: ModalState = {
    openModal : false,
    modalData : {
        hasImage: false,
        src: '',
        alt: '',
        info: '',
        title: ''
    }

}


export const ModalProvider:FC<ModalProviderProps> = ({ children }) => {

    const [state,dispatch] = useReducer(modalReducer, Modal_InitialState)


    const toggleModalData = ({ hasImage, src, alt , info, title  } : ModalData) => {
        dispatch({type:'[UI] - Toggle Modal Data', payload: { hasImage , src, alt, info, title }})
    }

    const toggleModal = () => {
        dispatch({type:'[UI] - Toggle Modal'})
    }

  return (
    <ModalContext.Provider 
        value={{
            ...state,
            toggleModalData,
            toggleModal
        }}
    >
        { children }
    </ModalContext.Provider>
  )
}