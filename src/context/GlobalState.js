import React, {createContext,useReducer} from 'react'
import {AppReducer} from './AppReducer'

// Initial State
const initialState = {
    transactions:[
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext()

// Provider Component
export const GlobalState = (props)=> {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Action
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    })
  }

  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    })
  }

  console.log(props.children)

  return(
      <GlobalContext.Provider value={{
          transactions:state.transactions,
          deletetransaction:deleteTransaction,
          addtransaction:addTransaction
      }}>
         {props.children}
      </GlobalContext.Provider>
  )
}

