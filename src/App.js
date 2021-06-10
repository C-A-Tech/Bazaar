
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './components/navbar/index';
import LandingPage from './components/pages/landing-page/LandingPage';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Sections from './components/pages/sections/Sections';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route path="/signup" exact component={SignUp}/>  
            <Route path="/signin" exact component={SignIn}/>  
            <Route path="/"  exact component={LandingPage}/>
            <div className="routes-with-navbar">
              <Navbar />
              <Route path="/sections" exact component={Sections}/> 
            </div>  
            
          </Switch>
        </Router>
      </div>
      
    
  );
}

export default App;
