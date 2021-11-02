import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

const City = ({ city, cities, setCities }) => {
  const [cityData, setCityData] = useState({ ...city });

  useEffect(() => {
    const cityList = [...cities];
    const dataIndex = cityList.findIndex((city) => city.id === cityData.id);
    cityList[dataIndex] = cityData;
    setCities(cityList);
  }, [cityData]);

  const handleCityDataChange = (data, field) => {
    setCityData({ ...cityData, [field]: data });
  };

  const handleCityDataDelete = () => {
    const cityList = [...cities];
    const dataIndex = cityList.findIndex((city) => city.id === cityData.id);
    cityList.splice(dataIndex, 1);
    setCities(cityList);
  };


  return (
    <>
      <tr>
        <td>{city.id}</td>
        <td>
          <Form.Control
            type="text"
            onChange={(e) => handleCityDataChange(e.target.value, "title")}
            value={cityData.title}
          />
        </td>
        <td>
          {" "}
          <Form.Control
            type="text"
            onChange={(e) => handleCityDataChange(e.target.value, "color")}
            value={cityData.color}
          />
        </td>
        <td>
          <BsFillTrashFill onClick={handleCityDataDelete} />
        </td>
      </tr>
    </>
  );
};

export default City;
