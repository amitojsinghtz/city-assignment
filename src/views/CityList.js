import React from "react";
import City from "./City";

const CityList = ({ cities, setCities }) => {

  return (
    <>
      <div className="city-container">
        <table className="city-list table tabel-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cities &&
              cities.map((city) => (
                <City
                  cities={cities}
                  setCities={setCities}
                  key={city.id}
                  city={city}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CityList;
