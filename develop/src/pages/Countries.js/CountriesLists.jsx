import React from "react";
import CountriesTable from "./CountriesTable";
import { useDispatch } from "react-redux";
import axios from "axios";
import { countries } from "../../redux/actions";
const CountriesLists = () => {
  const dispatch = useDispatch();

  const fetchCountries = async () => {
    try {
      dispatch(countries.fetchCountriesRequest());
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      //console.log(data);
      dispatch(countries.fetchCountriesSuccess(data));
    } catch (error) {
      dispatch(countries.fetchCountriesError(error.message));
    }
  };

  fetchCountries();

  return (
    <>
      <CountriesTable />
    </>
  );
};

export default CountriesLists;
