import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/login' exact component={Login}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
