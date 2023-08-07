import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import TranState from './context/transaction/tranState';
import User from './components/User';
import Alert from './components/Alert';
import NotFound from './components/NotFound';
import FetchTransactions from './components/FetchTransactions';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Navbar showAlert={showAlert}/> */}
      <TranState >
        <Router>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert} />
          <div>
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About showAlert={showAlert} />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert} />
              </Route>
              <Route exact path="/user">
                <User showAlert={showAlert} />
              </Route>
              <Route exact path="/notfound">
                <NotFound/>
              </Route>
              <Route exact path="/fetchTransactions">
                <FetchTransactions/>
              </Route>
            </Switch>
          </div>
        </Router>
      </TranState>
    </>
  );
}

export default App;
