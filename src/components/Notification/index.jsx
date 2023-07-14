import React from "react";
import "../../styles/SuccessfulNotification.scss";
const SuccessfulNotification = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

export default SuccessfulNotification;
