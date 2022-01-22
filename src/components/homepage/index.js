import React, {useState, useEffect} from 'react';
import './index.css';
import ContentContainer from './../content-container';

const API_URL = 'https://restcountries.eu/rest/v2/name/argentina';

const HomePage = () => {
    const [country, setCountry] = useState(null);
    
    useEffect(() => {
        loadData();
    },  []);

const loadData = async ()=> {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCountry(data[0]);
    }   

    return (
        <div className= "home-page">
            <ContentContainer/>
            { country ? <p>{country.name}, {country.alpha3Code}</p> : null}
        </div>
    );
}

export default  HomePage;