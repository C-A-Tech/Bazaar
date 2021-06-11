
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Navbar from './components/navbar/index';
import LandingPage from './components/pages/landing-page/LandingPage';
import SignIn from './components/pages/sign-in/SignIn';
import SignUp from './components/pages/sign-up/SignUp';
import Sections from './components/pages/sections/Sections';
import PageNotFound from './components/pages/PageNotFound';
import UserProfilePage from './components/pages/UserProfilePage';


function App() {
  return (
    /*initial={false}*/
      <div className="App">
        <Router>
          <AnimatePresence  exitBeforeEnter>
            <Switch>
              <Route path="/user/:id" exact component={UserProfilePage}/>
              <Route path="/signup" exact component={SignUp}/>  
              <Route path="/signin" exact component={SignIn}/>  
              <Route path="/"  exact component={LandingPage}/>
              <div className="routes-with-navbar">
                <Navbar />
                <Route path="/sections" exact component={Sections}/> 
              </div> 
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
      
    
  );
}

export default App;
