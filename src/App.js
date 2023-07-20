import { useState, useEffect } from 'react';
import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from './Component/Login';
import Navbar from './Component/Navabar'
import Alert from './Component/Alert';
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-calendar/dist/Calendar.css';
import ThankYou from './Component/ThankYou';

function App() {

  const [alert, setAlert] = useState(null);
 
  const showAlret = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="bg">
          <Navbar />
          <Alert alert={alert} />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/thanks">
              <ThankYou/>
              </Route>
              <Route exact path="/login">
                <Login showAlret={showAlret} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}


export default App;