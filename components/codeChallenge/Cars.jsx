import React, { useState } from "react";
import CarCard from "./Cars-Card";
import debug from "sabio-debug";

const _logger = debug.extend("Car");
function Cars() {
  const [cars] = useState([
    {
      make: "Kia",
      model: "Sorento",
      year: 2020,
    },
    {
      make: "Kia",
      model: "Optima",
      year: 2019,
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2019,
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2018,
    },
    {
      make: "Volkswagen",
      model: "Jetta",
      year: 2021,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2021,
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2019,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2019,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2020,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2021,
    },
  ]);

  const mapCar = (car) => {
    _logger(car);
    return (
      <React.Fragment key={"car-container" + cars.index}>
        <CarCard key={cars.index} props={car}></CarCard>
      </React.Fragment>
    );
  };

  const carsContent = () => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">{cars.map(mapCar)}</div>
        </div>
      </React.Fragment>
    );
  };
  //moving the showCars fragment into where the button tag is will allow for the cars to be rendered
  //I was trying to get the conditional rendering to work, but I don't know how to add that feature
  //I saw on the react docs you could use index as a key as a last resort so I tried that but I don't understand it.
  //I believe I'm supposed to use setState to give the array an id prop to be used as key, but I wasn't able to figure that out
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <h1>Cars</h1>
          <button
            onClick={cars.length > 0 && carsContent}
            className="btn btn-primary"
          >
            Show Cars
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cars;
