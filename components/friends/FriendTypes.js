import React from "react";
import { PropTypes } from "prop-types";

const Types = props => {
    return (
        <div className="col-md-3 pb-2">
        <div className="card" style={{ maxWidth: 286 }}>
          <img
            className="card-img-top"
            src={props.friendObj.url}
            alt="..."
            style={{ maxWidth: 286, height: 200 }}
          />
          <div className="card-body">
            <h5 className="card-title center-text">{props.friendObj.title}</h5>
            <p className="card-text">{props.friendObj.headline}</p>
            <div className="row">
              <button
                type="button"
                className="btn btn-danger mx-auto"
                style={{ width: 100 }}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-warning mx-auto"
                style={{ width: 100 }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

Types.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    headline: PropTypes.string
};

export default Types