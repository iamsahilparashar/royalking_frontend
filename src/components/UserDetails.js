import React, { useContext, useEffect } from 'react'
import tranContext from '../context/transaction/tranContext';
import { Link } from 'react-router-dom'

const UserDetails = (props) => {
    const context = useContext(tranContext);
    const { details, userData ,updatebalance } = context;
    useEffect(() => {
        userData();
        // updatebalance();
        // eslint-disable-next-line
    }, [])

    const handlebalance = (e) => {
        e.preventDefault();
        let amountAdded = document.getElementById("amountAdded").value;
        console.log(amountAdded);
        updatebalance(details._id,parseInt(details.balance) + parseInt(amountAdded));
        props.showAlert("Amount successfully added","success");
    }
    
    return (
        <div className="container userDetails">
            <h1>Your Details</h1>
            <h3> <span id="details"> Name : </span> {details.name}</h3> <br />
            <h3> <span id="details"> Phone no.: </span> {details.phn}</h3> <br />
            <h3> <span id="details"> Address :  </span>{details.address}</h3> <br />
            <h3> <span id="details"> Email :  </span>{details.email}</h3> <br />
            <h3> <span id="details"> Created On :  </span>{details.date}</h3> <br />

            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel" style={{ fontFamily: `'Carattere', cursive`, fontSize: "27px" }}><i className="fas fa-university"></i>&nbsp;&nbsp;Royal King of India</h5>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'green' }}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handlebalance}>
                                <div className="mb-3">
                                    <label htmlFor="amountAdded" className="form-label">Amount to Deposits : </label>
                                    <input type="number" className="form-control" id="amountAdded" name="amountAdded" min="0" required />
                                </div>
                                <div className="d-grid gap-2 modal-footer">
                                    <button type="submit" className="btn " data-bs-toggle="modal" to="#exampleModalToggle" style={{ backgroundColor: 'green', fontSize: "20px", fontWeight: 'bold', color: 'black' }}>Deposit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid">
                <h3 className="btn  btn-danger">Current Balance : {details.balance}</h3>
                <div className="mainBtn">
                    <Link role="button" className="btn btn-warning btn-lg mx-4" data-bs-toggle="modal" to="#exampleModalToggle">Add Balance</Link>
                    <Link role="button" className="btn btn-warning btn-lg mx-3" to="/fetchTransactions">Show all transactions</Link>
                </div>
            </div>
        </div >
    )
}

export default UserDetails
