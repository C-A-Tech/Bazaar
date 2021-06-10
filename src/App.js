
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './components/navbar/index';
import LandingPage from './components/pages/LandingPage';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Sections from './components/pages/sections/Sections';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="Nav-bar">
          <Navbar />
        </div>
        <div className="Routes">
          <Switch>
            <Route path="/sections" exact component={Sections}/>  
            <Route path="/signup" exact component={SignUp}/>  
            <Route path="/signin" exact component={SignIn}/>  
            <Route path="/"  exact component={LandingPage}/>
            <Route path="*" component={PageNotFound}/>  

            
          </Switch>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
