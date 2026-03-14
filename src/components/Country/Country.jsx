import React, { useState } from 'react';
import "./Country.css"

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country.area.area);
    // console.log(handleVisitedCountries)
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        //1.
        // if (visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }

        // 2.
        // setVisited(visited ? false : true);

        //3.
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        // <div className={`country ${visited && 'country-visited'}`}>
        <div className={`country ${visited ? 'country-visited' : 'visited-n'}`}>
            <img className='flag' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} || {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>

        </div>
    );
};

export default Country;