import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    return(
        <>
            {/* <h2>CountriesList here!</h2> */}
            <h2>Countries of the World:</h2>
            {
                countries.map((country, index) => {
                    return <CountryListItem key={index} countryName={country}/>
                })
            }
        </>
    );
}

export default CountriesList;