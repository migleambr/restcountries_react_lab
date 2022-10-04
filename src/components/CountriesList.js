import { useState } from "react";
import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {

    const [isChecked, setIsChecked] = useState([]);
    
    const handleCheckBoxChange = (event) => {
        let checkedList = [...isChecked];
        if (event.target.checked) {
            checkedList = [...isChecked, event.target.value];
        } else {
            checkedList.splice(isChecked.indexOf(event.target.value), 1);
          }
        setIsChecked(checkedList);
    }


    return(
        <>
            {/* <h2>CountriesList here!</h2> */}
            <h2>Countries of the World:</h2>
            {
                countries.map((country, index) => {
                    return (
                        <div className="countryItem">
                            <CountryListItem key={index} countryName={country} />
                            <input value={country} type="checkbox" onChange={handleCheckBoxChange} />
                        </div>
                    )
                })
            }
            <br></br>
            <h2>All the countries I've visited!</h2>
            {
            isChecked.map((checkedCountry) => {
                return (
                    <div className="visitedCountryItem">
                        <li>{checkedCountry}</li>
                    </div>
                )
            })
            }
        </>
    );
}

export default CountriesList;