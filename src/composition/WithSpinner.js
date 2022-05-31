import React from "react";

import "./Spinner.css";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
        loading
      </div> 
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  
  return Spinner;
};

export default WithSpinner;
