import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h4>Transaction History</h4>
            <ul id="list" className="list">
                <li className="minus">
                    Cash<span>-PKR400</span><button className="delete-btn">x</button>

                </li>
                <li className="minus">
                    Fees<span>-PKR1000</span><button className="delete-btn">x</button>

                </li>
                <li className="plus">
                    Part Time Income<span>+PKR1500</span><button className="delete-btn">x</button>
                    
                </li>
            </ul>
        </div>
    )
}
