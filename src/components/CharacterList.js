import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import SearchForm from './SearchForm';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[character,setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then (response => {
      const character = response.data.results;
      console.log('Rick and Morty', character);
      setCharacter(character);
    })
    .catch (error => {
      console.log('get error', error);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>Character</h2>
      <SearchForm character={character} setCharacter={setCharacter}/>
      <div className='card-list'>
        {character.map(item => {
          return <CharacterCard name={item.name} status={item.status} gender={item.gender} image={item.image}/>
          
        })}
      </div>
    </section>
  );
}
