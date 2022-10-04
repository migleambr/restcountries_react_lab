import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        console.log("Getting some country data");
        // fetch data from the RESTCountries API
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        // set the countries state to the result of the API call
        .then((response) => setCountries(response.map((country) => country.name.common)));
        // pass it down to relevant components
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    return(
        <>
            {/* <h1>I'm a country container!</h1> */}
            <CountriesList countries={countries} />
            {/* <VisitedCountriesList countries={countries}/> */}
        </>
    );
}

export default CountriesContainer;