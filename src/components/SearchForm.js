import React, { useState } from "react";

export default function SearchForm(props) {
  
  const characters = props.characters;
  console.log(props);
  const [name, setName] = useState('')
  
  const handleChanges = event => {
    setName(event.target.value);
    console.log(name);
  };
  const submitForm = event => {
    event.preventDefalt();
    console.log(name);

    console.log(characters.filter(character => character.name === name));
    props.setCharacters(characters.filter(character => character.name === name));
  };
  return (
    <section className="search-form">
     {/* // Add a search form here */}
     Search Character by Name
     <form onSubmit={submitForm}>
       <label htmlFor='Name'>Name</label>
       <input
       id='name'
       type='text'
       name='name'
       onChange={handleChanges}
       value={name}
       />
       <button type='submit'>Search</button>
     </form>
    </section>
  );
}
