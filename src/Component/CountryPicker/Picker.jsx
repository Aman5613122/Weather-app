import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../API";
import "./pick.css";

const Picker = ({ handelCountryPicker }) => {
  const [fetchCountry, setFetchCountry] = useState([]);

  useEffect(() => {
    const fetchedCountry = async () => {
      setFetchCountry(await fetchCountries());
    };
    fetchedCountry();
  }, [setFetchCountry]);

  return (
    <FormControl className="form_control">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handelCountryPicker(e.target.value)}
      >
        <option value="">Global</option>
        {fetchCountry.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Picker;
