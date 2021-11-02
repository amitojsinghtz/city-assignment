import React, { useState, useEffect } from "react";
import Form from "./views/CityForm";
import CityList from "./views/CityList";
import StyledModal from "./components/StyledModal";
import CityForm from "./views/CityForm";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import CityDescription from "./views/CityDescription";
function App() {
  const [cities, setCities] = useState([]);

  const [showFormView, setShowFormView] = useState(false);

  const [formViewMode, setFormViewMode] = useState(false);

  const [selectedCity, setSelectedCity] = useState(false);

  useEffect(() => {
    getLocalCities();
  }, []);

  useEffect(() => {
    saveLocalCities();
  }, [cities]);

  const saveLocalCities = () => {
    localStorage.setItem("cities", JSON.stringify(cities));
  };

  const getLocalCities = () => {
    if (localStorage.getItem("cities") === null) {
      localStorage.setItem("cities", JSON.stringify([]));
    } else {
      const cityLocal = JSON.parse(localStorage.getItem("cities"));
      setCities(cityLocal);
    }
  };

  const handleActiveFormView = (view) => {
    setFormViewMode(view);
    setShowFormView(true);
  };

  const handleHideFormView = () => {
    setFormViewMode("undefined");
    setShowFormView(false);
  };

  const getFormView = () => {
    switch (formViewMode) {
      case "Add":
        return (
          <CityForm
            handleFormSubmit={setCities}
            handleFormClose={handleHideFormView}
            cities={cities}
          />
        );
      default:
        setShowFormView(false);
        return;
    }
  };

  return (
    <div className="App">
      {showFormView && (
        <StyledModal
          show={showFormView}
          handleClose={handleHideFormView}
          title="Add City"
        >
          {getFormView()}
        </StyledModal>
      )}
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar cities={cities} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
          </Col>
          <Col md={8}>
            <div className="main-content">
              <Row>
                <Col md={12} className="text-right">
                  <Button
                    className="m-3"
                    variant="primary"
                    onClick={() => handleActiveFormView("Add")}
                  >
                    Add City
                  </Button>
                </Col>
              </Row>
              <CityList cities={cities} setCities={setCities} />
              {selectedCity && (
                <Row>
                  <Col md={12}>
                    <CityDescription
                      selectedCity={selectedCity}
                      cities={cities}
                      setCities={setCities}
                      setSelectedCity={setSelectedCity}
                    />
                  </Col>
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
