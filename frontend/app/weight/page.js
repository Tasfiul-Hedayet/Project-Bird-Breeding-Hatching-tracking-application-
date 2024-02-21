"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";

function page() {
  const [legTag, setLegTag] = useState(""); // legtag
  const [date, setDate] = useState(""); // date
  const [weight, setWeight] = useState(""); // weight
  //   const [weightcrd, setweightCRD] = useState(""); //Object

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the form values as needed, e.g., send them to a server or perform calculations.
    // For simplicity, let's just log the values to the console for now.
    console.log({
      legTag,
      date,
      weight,
    });
  };

  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Hatch</h1>
        <form onSubmit={handleSubmit}>
          <label>Leg Tag:</label>
          <input
            type="text"
            value={legTag}
            onChange={(e) => setLegTag(e.target.value)}
          />
          <label>Date:</label>
          <input
            type="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button className="Submit-btn" type="submit">
          Submit
        </button>
        </form>
        
      </div>
    </>
  );
}

export default page;
