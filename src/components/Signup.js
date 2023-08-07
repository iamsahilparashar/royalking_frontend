import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", phn: "", email: "", address: "", password: "", cpassword: "" })
    let history = useHistory();

    let matchPass = false;
    const matchPasswords = () => {
        let pass = document.getElementById("password").value;
        let cpass = document.getElementById("cpassword").value;
        if (pass !== cpass) {
            alert("Confirm password doesn't match with password", "danger");
            document.getElementById("cpassword").value = "";
            matchPass = true;
        }

    }

    const handleSubmit = async (e) => {
        const { name, phn, email, address, password } = credentials;
        e.preventDefault();
        matchPasswords();
        // console.log(matchPass);
        if (!matchPass) {
            const response = await fetch("https://royalkingbackend.vercel.app/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phn, email, address, password })
            });
            const json = await response.json();
            // console.log(json);


            if (json.success) {
                //save the auth and redorect
                localStorage.setItem('token', json.authtoken);
                props.showAlert("Account created successfully", "success")
                history.push("/user");
            }
            else {
                props.showAlert("Invalid Details ,plz try with another email or phn no.","danger")
            }
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    var state = false;
    const toggle = () => {
        if (!state) {
            document.getElementById("password").setAttribute("type", "text");
            document.getElementById("eyeSignSignup").style.color = "blue";
            state = true;

        }
        if (state) {
            setTimeout(() => {
                document.getElementById("password").setAttribute("type", "password");
                document.getElementById("eyeSignSignup").style.color = "black";
                state = false;
            }, 400);
        }
    }


    return (
        <div className=" container mt-2 signup ">
            <h1>Create a account to continue...</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phn" className="form-label">Phone no.</label>
                    <input type="number" className="form-control" id="phn" name="phn" onChange={onChange}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" aria-describedby="emailHelp" name="address" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex">
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                        <span id="eyeSignSignup" onClick={toggle} style={{color:'black'}}><i className="fas fa-eye float-right"></i></span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <button disabled={credentials.name.length<3 || credentials.phn.length<10 || credentials.password.length<5} type="submit" className="btn userBtn" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
