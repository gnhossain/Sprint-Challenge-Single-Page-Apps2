import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcompePage from './components/WelcomePage.js';
import LocationsList from './components/LocationsList'


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcompePage}/>
      <Route path='/character' component={CharacterList}/>
      <Route path='/location' component={LocationsList}/>

      
    </main>
  );
}
