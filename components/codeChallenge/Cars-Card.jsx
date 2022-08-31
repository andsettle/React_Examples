import React from "react";
import { PropTypes } from "prop-types";
import debug from "sabio-debug";

const _logger = debug.extend("CarCard");
const CarCard = (props) => {
  _logger("---Firing From CarCard---", props);

  return (
    <React.Fragment>
      <div className="card col-md-3 m-1">
        <div className="card-body">
          <h5 className="card-title">Make: {props.props.make}</h5>
          <h5 className="card-text">Model: {props.props.model}</h5>
          <h5 className="card-text">Year: {props.props.year}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

CarCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  headline: PropTypes.string,
};
export default CarCard;
