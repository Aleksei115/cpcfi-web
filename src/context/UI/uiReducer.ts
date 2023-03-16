import { type UIState } from './';

type UIActionType = 
| { type: '[UI] - Toggle Navbar'}


// *Refactor: Maybe you can create a context for modal window to do the code more readable

export const uiReducer = ( state: UIState, action: UIActionType ):UIState => {

    switch (action.type) {
        case '[UI] - Toggle Navbar':
            return {
                ...state,
                openNavbar: !state.openNavbar
            }
        default:
            return state;
    }
}