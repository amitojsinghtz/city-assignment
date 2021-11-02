import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const CityDescription = (props) => {
  const { selectedCity, setSelectedCity, cities, setCities } = props;

  useEffect(() => {
    const cityList = [...cities];
    const dataIndex = cityList.findIndex((city) => city.id === selectedCity.id);
    cityList[dataIndex] = selectedCity;
    setCities(cityList);
    setSelectedCity(selectedCity)
  }, [selectedCity]);

  const handleCityDescriptionChange = (data) => {
    setSelectedCity({ ...selectedCity, description: data });
  };

  return (
    <Form.Control
      type="text"
      onChange={(e) => handleCityDescriptionChange(e.target.value)}
      value={selectedCity.description}
      as="textarea"
    />
  );
};

export default CityDescription;
