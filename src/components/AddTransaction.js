import React, {useState} from 'react'

export const AddTransaction = () => {
    const[description,setdescription]=useState();
    const[transactionamount,settransactionamount]=useState();

    return (
        <div>
            <h4>Add New Transaction</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Detail of Transaction" 
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" placeholder="Enter Transaction Amount"
                     value={transactionamount}
                     onChange={(e) => settransactionamount(e.target.value)}
                     />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
