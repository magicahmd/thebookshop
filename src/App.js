import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import OrdersDashboard from './pages/ordersDashboard';
import Order from './pages/order';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/orders' component={OrdersDashboard} />
      <Route path='/orders/:id' component={Order} />
    </div>
  );
}

export default App;
