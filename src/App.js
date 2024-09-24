import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from '@mui/material';
import Dashboard from './components/Dashboard';
import StockDetails from './components/StockDetails'
import Portfolio from './components/Portfolio'
import WatchList from './components/Watchlist'
import Header from './components/Header';

function App() {
  return(
    <Router>
      <div className="app">
        <Header/>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/stocks/:symbol" component={StockDetails}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/watchlist" component={WatchList}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
