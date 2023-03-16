import { type ModalState, type ModalData } from './';

type ModalActionType = 
| { type: '[UI] - Toggle Modal'}
| { type: '[UI] - Toggle Modal Data', payload : ModalData}


export const modalReducer = ( state: ModalState, action: ModalActionType ):ModalState => {

    switch (action.type) {
        case '[UI] - Toggle Modal':
            return {
                ...state,
                openModal: !state.openModal,
            }
        case '[UI] - Toggle Modal Data':
            return {
                ...state,
                openModal: !state.openModal,
                modalData : { 
                    ...state.modalData,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}