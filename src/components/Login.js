import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ phn: "", email: "", password: "" })
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://royalkingbackend.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ phn: credentials.phn, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            //save the auth and redorect
            localStorage.setItem('token', json.authtoken);
            history.push("/user");
            props.showAlert("Logged in successfully", "success")

        }
        else {
            props.showAlert("invalid credentials","danger")
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    var state = false;
    const toggle = () => {
        if (!state) {
            document.getElementById("password").setAttribute("type", "text");
            document.getElementById("eyeSignLogin").style.color = "blue";
            state = true;

        }
        if (state) {
            setTimeout(() => {
                document.getElementById("password").setAttribute("type", "password");
                document.getElementById("eyeSignLogin").style.color = "black";
                state = false;
            }, 400);
        }
    }

    return (
        <div className="container login">
            <h1>Login to continue...</h1>
            <form onSubmit={handleSubmit} >
                {/* <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"  name="name" value={credentials.name} onChange={onChange} />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="phn" className="form-label">Phone no.</label>
                    <input type="number" className="form-control" id="phn" name="phn" value={credentials.phn} onChange={onChange} min="1000000000" max="9999999999" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>

                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex">
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required  />
                        <span id="eyeSignLogin" onClick={toggle} style={{color:'black'}} ><i className="fas fa-eye float-right"></i></span>
                    </div>
                </div>
                <button type="submit" className="btn  userBtn" >Submit</button>
            </form>
        </div>
    )
}

export default Login
