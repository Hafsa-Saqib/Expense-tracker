import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState ={
    transactions: [
        {id:1 , description:"Income1", transactionAmount:1500},
        {id:2 , description:"Expense1", transactionAmount:-1000},
        {id:3 , description:"Income2", transactionAmount:2500},
        {id:4 , description:"Expense1", transactionAmount:-1550}

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer , initialState)
    return(
        <GlobalContext.Provider value={
            {
            transactions:state.transactions
        }
    }>
        {children}
        </GlobalContext.Provider>
    )

}