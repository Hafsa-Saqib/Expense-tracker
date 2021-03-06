import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h4>Transaction History</h4>
            <ul className= "list">
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>
            )}
            </ul>
        </div>
    )
}
