import React, { useState } from "react";

const Card = (props) => {
  const [popup, setPopup] = useState(false);
  const toggleModel = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={props.images} alt="" />
          <i className="fas fa-image" onClick={toggleModel}></i>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
      {popup && (
        <div className="popup">
          <div className="hide"></div>
          <div className="popup-content">
            <button onClick={toggleModel}>Close</button>
            <img src={props.images} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
