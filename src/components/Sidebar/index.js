import React from "react";
import { Row, Col } from "react-bootstrap";

const Sidebar = (props) => {
  const { cities, setSelectedCity, selectedCity } = props;
  return (
    <div className="profile-sidebar">
      <h5 className="p-2">Sidebar</h5>
      <div className="profile-usermenu">
        <ul className="nav">
          {cities &&
            cities.map((city) => (
              <li
                style={{
                  borderLeft: `4px solid ${city.color}`,
                  background: selectedCity?.id === city.id ? city.color : "#DED8D7",
                }}
                onClick={() => setSelectedCity(city)}
                key={city.id}
              >
                <a
                  href="#"
                  style={{
                    color: selectedCity?.id === city.id ?  "#ffff" : "#000000",
                  }}
                >
                  <Row>
                    <Col md={3}>{city.id}</Col>
                    <Col md={9}>
                      {city.title}
                      <p>{`${city.description.slice(0, 30)}...`}</p>
                    </Col>
                  </Row>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
