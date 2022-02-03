import "../components/assets/css/listing/listing.css"

import db from "../firebase.config";

import React, { useState, useEffect } from "react";

function Listing() {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the pDescription loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("propertyListing")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  // Display the result on the pDescription
  return (
    <div className="listing-container">
      <div className="listing-header">
            <h2 className="listing-title">
              Choose your DreamLand!
            </h2>
      </div>
      <div className="property-grid">
      

      {info.map((data) => (
        <Frame
          Price={data.Price}
          Title={data.Title}
          Description={data.Description}
          image={data.image}
        />
      ))}
    </div>
    </div>
  );
}

// Define how each display entry will be structured
const Frame = ({ Price, Title, Description, image }) => {
  return (
    <div className="listing-div">
      
        <h3 className="property-title"> {Title}</h3>

      <p className="property-desc"> {Description}</p>

      <span className="property-price"> {Price}</span>

      <img
        src={image}
        alt=""
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          margin: "10px",
        }}
      />
      <a href="#" className="property-purchase-link">
        Click
      </a>
      
    </div>
  );
};

export default Listing;
