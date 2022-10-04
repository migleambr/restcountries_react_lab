// import { useState } from "react";
import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({countries}) => {

    return(
        <>
            <h2>All the countries I've visited!</h2>
            {/* {
                countries.map((country, index) => {
                    return <CountryListItem key={index} countryName={country} />
                })
            } */}

            <CountryListItem />


        </>
    );
}

export default VisitedCountriesList;