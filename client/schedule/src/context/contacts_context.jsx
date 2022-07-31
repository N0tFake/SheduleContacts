import { createContext, useReducer } from "react"

export const initialState = {
    reload: true
}

export const ContactContext = createContext(initialState)

export const reducer = (state, action) => {
    switch(action.type){
        case 'reload':
            return { reload: !state.reload }
        default:
            return state
    }
}
export const Store = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <ContactContext.Provider value={[ state, dispatch ]}>
            {children}
        </ContactContext.Provider>
    )
} 

