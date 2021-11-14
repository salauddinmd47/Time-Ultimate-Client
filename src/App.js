import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Explore from './components/Explore/Explore';
import BuyNow from './components/BuyNow/BuyNow';
import Login from './components/Login/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashborad/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/explore'>
               <Explore></Explore>
          </Route>
          <Route path='/login'>
               <Login></Login>
          </Route>
          <PrivateRoute path='/dashboard'>
               <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/products/:productId'>
                <BuyNow></BuyNow>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
