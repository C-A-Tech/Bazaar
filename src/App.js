
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PageNotFound from './components/pages/PageNotFound';
import UserProfilePage from './components/pages/UserProfilePage'
import RequestAStall from './components/pages/RequestAStall'



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/user/:id/request-a-stall" exact component={RequestAStall}/>
        <Route path="/user/:id" exact component={UserProfilePage}/>
        <Route path="/signup" exact component={SignUp}/>  
        <Route path="/signin" exact component={SignIn}/>  
        <Route path="/"  exact component={LandingPage}/>
        <Route path="*" component={PageNotFound}/>  
      </Switch>

        
      </div>
      
    </Router>
  );
}



export default App;
