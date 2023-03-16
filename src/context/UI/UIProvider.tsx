import { type FC, useReducer } from 'react';
import { uiReducer,UIContext } from './';
// import {  } from './UIContext';

export interface UIProviderProps {
    children: React.ReactNode;
}

export interface UIState {
    openNavbar: boolean;
}

const UI_InitialState: UIState = {
    openNavbar: false,
}


export const UIProvider:FC<UIProviderProps> = ({ children }) => {

    const [state,dispatch] = useReducer(uiReducer, UI_InitialState)

    const toggleNavbar = () => {
        dispatch({type:'[UI] - Toggle Navbar'})
    }


  return (
    <UIContext.Provider 
        value={{
            ...state,
            toggleNavbar
        }}
    >
        { children }
    </UIContext.Provider>
  )
}