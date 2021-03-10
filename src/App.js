import './App.css';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Products from './pages/Products';
import Nav from './components/Nav';
import EditProduct from './pages/EditProduct';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/edit/:id' exact component={EditProduct}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
