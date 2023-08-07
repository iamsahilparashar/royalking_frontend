import React from 'react'

const TransData = (props) => {
    const { tran } = props;
    return (
        <div className="col-md-4 my-1">
            <div className="card cardTrans mx-1">
                <div className="card-body">
                    <p className="card-text"> <span> Receiver's Name : </span> {tran.name}</p>
                    <p className="card-text"> <span> Receiver's Account : </span> {tran.account}</p>
                    <p className="card-text"> <span> Bank : </span> {tran.bank}</p>
                    <p className="card-text"> <span> Branch : </span> {tran.branch}</p>
                    <p className="card-text"> <span> Money Transfered : </span> {tran.amount}</p>
                </div>
            </div>
        </div>
    )
}

export default TransData
