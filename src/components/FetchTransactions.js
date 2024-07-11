import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import transContext from '../context/transaction/tranContext'
import TransData from './TransData';

const FetchTransactions = () => {
    const context = useContext(transContext);
    const { trans, getTrans } = context;
    useEffect(() => {
        getTrans();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="mx-2 fetchTrans">
            <Link className="left-arrow" to="/user"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-return-left">
                <path fillRule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5" />
            </svg>Back
            </Link>
            <div className="row">
                <h1>Your Transactions</h1>
                <div className="container">
                    {trans.length === 0 && <h3 style={{ color: 'black' }}>No transactions to display</h3>}
                </div>
                {
                    trans.map((tran) => {
                        return <TransData key={tran._id} tran={tran} />
                    })
                }
            </div>
        </div >
    )
}

export default FetchTransactions
