import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = (props) => {
  const deleteContext = useContext(GlobalContext)

  // Get Sign
  const sign = props.transaction.amount<0?'-':'+';
    return (
        <li className={props.transaction.amount<0?'minus':'plus'}>
        {props.transaction.text} <span>{sign}₹{Math.abs(props.transaction.amount)}</span><button onClick={()=>deleteContext.deletetransaction(props.transaction.id)} className="delete-btn">x</button>
      </li>
    )
}
