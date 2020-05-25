import React, { Component } from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

// prop = {value}
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Levis Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
const businesses = [business,business,business,business,business,business];

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList businesses = {businesses}/>

      </div>
    );
  }
}
export default  App;