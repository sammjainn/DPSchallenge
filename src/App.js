import './App.css';
import User from './components/User';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={User}></Route>
          <Route path='/add' exact component={AddContact}></Route>
          <Route path='/contacts' exact component={ContactList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
