import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <div>
             <li className="list">
                 {transaction.description}
                 <span>{transaction.transactionAmount}</span>
                 <button className="delete-btn">x</button>

            </li>
        </div>
    )
}
