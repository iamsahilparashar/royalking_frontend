import TranContext from "./tranContext";
import { useState } from "react";

const TranState = (props) => {
  const host = "https://royalkingbackend.vercel.app" ;
  const transInitial = [];
  const [trans, setTrans] = useState(transInitial)
  const [details, setDetails] = useState({
    name: "sahil",
  });

  const getTrans = async () => {
    const response = await fetch(`${host}/api/transaction/fetchalltransactions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    console.log(json);
    setTrans(json);
  }


  const makeTran = async (name, account, bank, branch, amount) => {
    const response = await fetch(`${host}/api/transaction/maketransaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, account, bank, branch, amount })
    });

    let tran = await response.json();
    console.log(tran);
    setTrans(trans.concat(tran));
  }

  const userData = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    // console.log(json);   
    setDetails(json);
  }

  const updatebalance = async (id, balance) => {
    const response = await fetch(`${host}/api/auth/updatebalance/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({balance})
    });

    const json = await response.json();
    console.log(json);
    setDetails(json);
  }

  return (
    <TranContext.Provider value={{ trans, setTrans, makeTran, getTrans,userData,details,updatebalance }} >
      {props.children}
    </TranContext.Provider>
  )
}

export default TranState;