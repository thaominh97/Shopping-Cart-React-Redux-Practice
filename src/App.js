import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
