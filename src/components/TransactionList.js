import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = (props) => {
  const context = useContext(GlobalContext)
  console.log(context.transactions)
    return (
        <>
        <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction)=>(<Transaction key={transaction.id} transaction={transaction} />))}    
      </ul>    
        </>
    )
}
