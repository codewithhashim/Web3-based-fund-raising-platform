import "../components/assets/css/listing/listing.css";

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
        <h2 className="listing-title">Choose your DreamLand!</h2>
      </div>
      <div className="property-grid">
        {info.map((data) => (
          <Frame
            Price={data.Price}
            Title={data.Title}
            Description={data.Description}
            Image={data.Image}
          />
        ))}
      </div>
    </div>
  );
}

// Define how each display entry will be structured
const Frame = ({ Price, Title, Description, Image }) => {
  return (
    <div className="listing-div">
      <img src={Image} alt="" className="property-image" />
      <div className="listing-content">
        <h3 className="property-title"> {Title}</h3>

        <p className="property-desc"> {Description}</p>

        <span className="property-price"> {Price}</span>

        <a
          href="https://calendly.com/thedubaibuilders/property-purchase"
          className="property-purchase-link"
        >
          Book Meeting
        </a>
      </div>
    </div>
  );
};

export default Listing;
