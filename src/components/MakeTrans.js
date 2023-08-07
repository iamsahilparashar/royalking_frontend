import React, { useContext, useState } from 'react'
import tranContext from '../context/transaction/tranContext';

const MakeTrans = (props) => {
    const context = useContext(tranContext);
    const { details ,makeTran ,updatebalance } = context;
    const [tran, setTran] = useState({ name: "", account: "", bank: "", branch: "", amount: "" });

    const handleClick = (e) => {
        e.preventDefault();
        if (details.balance >= tran.amount) {
            makeTran(tran.name, tran.account, tran.bank, tran.branch, tran.amount);
            // setTran({name:"" ,account:"",bank:"",branch:"",amount:""});
            updatebalance(details._id ,parseInt(details.balance) - parseInt(tran.amount));
            props.showAlert("Transaction Successful", 'success');

        }
        else{
            props.showAlert("Transaction Failed! Not enough Balance", "danger");
        }
    }

    const onChange = (e) => {
        setTran({ ...tran, [e.target.name]: e.target.value })
    }

    return (
        <div className="makeTrans">
            <h1>Make  a transaction</h1>
            <hr />
            <div className="container ">
                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Receiver's Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={tran.name} onChange={onChange} minLength="3" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="account" className="form-label">Receiver's Account No.</label>
                        <input type="number" className="form-control" id="account" name="account" value={tran.account} onChange={onChange} max="999999999999999" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bank" className="form-label">Bank Name</label>
                        <input type="text" className="form-control" id="bank" name="bank" value={tran.bank} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="branch" className="form-label">Branch Address</label>
                        <input type="text" className="form-control" id="branch" name="branch" value={tran.branch} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount to transfer </label>
                        <input type="number" className="form-control" id="amount" name="amount" value={tran.amount} min="1" onChange={onChange}  required />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default MakeTrans
