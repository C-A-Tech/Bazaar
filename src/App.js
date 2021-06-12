
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/pages/landing-page/LandingPage';
import SignIn from './components/pages/sign-in/SignIn';
import SignUp from './components/pages/sign-up/SignUp';
import Home from './components/pages/home/Home';
import PageNotFound from './components/pages/PageNotFound';
import UserProfilePage from './components/pages/UserProfilePage';



function App() {
  return (
    /*initial={false}*/
      <div className="App">
        <Router>
          <AnimatePresence  exitBeforeEnter>
            <Switch>
              <Route path="/signup" exact component={SignUp}/>  
              <Route path="/signin" exact component={SignIn}/>  
              <Route path="/"  exact component={LandingPage}/>
              <div className="routes-with-navbar">
                <Navbar />
                <Route path="/home" exact component={Home}/>              
                <Route path="/user/:id" exact component={UserProfilePage}/>
              </div> 
            </Switch>
          </AnimatePresence>
        </Router>
       
      </div>
      
    
  );
}

export default App;
