import React, { useContext, useEffect } from 'react'
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
        <div className = "mx-2 fetchTrans">
            <div className="row">
                <h1>Your Transactions</h1>
                <div className="container">
                    {trans.length === 0 && <h3 style={{color :'white'}}>No transactions to display</h3>}
                </div>
                {
                    trans.map((tran) => {
                        return <TransData key={tran._id} tran={tran} />
                    })
                }
            </div>
        </div>
    )
}

export default FetchTransactions
