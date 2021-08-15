import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user">
            <AddUser />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
