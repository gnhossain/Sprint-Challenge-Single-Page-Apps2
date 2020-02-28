import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';
import SearchForm from './SearchForm';
export default function LocationsList() {
const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response);
        const Locations = response.data.results.filter(obj =>
          obj.name.toLowerCase().includes(location.toLowerCase())
        );
        setData(Locations);
      })
      .catch(err => {
        console.log("get error:", err);
      });
  }, []);
  return(
    <section className="location-list">
      <h2>Location</h2>
      <SearchForm location={location} setLocation={setLocation}/>
      <div className='loc-list'>
        {data.map(item => {
        return <LocationCard name={item.name} type={item.type} />;
      })}
      </div>
      
    </section>
  );
    }

