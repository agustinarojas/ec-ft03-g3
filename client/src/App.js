import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Products from './components/producto';

function App() {
  return (
    <div className = "product">
    <Route 
    path="/product/:id"
    render = {({match}) => <Products producto =   {match.params.id} />}
    />
    </div>
  );
}
export default App;
