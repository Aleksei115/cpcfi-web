import { createContext } from 'react';



interface ContextProps {
    openNavbar: boolean;

    //Methods
    toggleNavbar: () => void;

}

export const UIContext = createContext({} as ContextProps)

