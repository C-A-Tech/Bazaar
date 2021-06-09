
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import SignIn from './components/pages/SignIn';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        
        <Route path="/signin" component={SignIn}/>  
        <Route path="/"  exact component={LandingPage}/>
        <Route path="*" component={PageNotFound}/>  

        
      </Switch>

      </div>
      
    </Router>
  );
}

export default App;
