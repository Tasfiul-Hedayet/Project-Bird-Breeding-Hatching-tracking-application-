"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

function Page() {
  const [identifier, setIdentifier] = useState(1); //Identifier
  const [name, setName] = useState(""); // Name
  const [species, setSpecies] = useState(""); // Species
  const [breed, setBreed] = useState(""); // Breed
  const [status, setStatus] = useState(""); // Status
  const [sex, setSex] = useState(""); // Sex
  const [breeder, setBreeder] = useState(""); // Breeder
  const [owner, setOwner] = useState(""); // Owner
  const [cock, setCock] = useState(""); // Cock
  const [hen, setHen] = useState(""); // Hen
  const [hatch, setHatch] = useState(""); // Hatch
  const [sold, setSold] = useState(""); // Sold
  const [deceased, setDeceased] = useState(""); // Deceased
  const [age, setAge] = useState(""); // Age
  const [weightDate, setWeightDate] = useState(""); // Weight Date
  const [weight, setWeight] = useState(""); // Weight
  const [location, setLocation] = useState(""); // Location
  const [color, setColor] = useState(""); // Color
  const [healthEvents, setHealthEvents] = useState(""); // Health Events
  const [showPlacing, setShowPlacing] = useState(""); // Show Placing

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted:", {
      identifier,
      name,
      species,
      breed,
      status,
      sex,
      breeder,
      owner,
      cock,
      hen,
      hatch,
      sold,
      deceased,
      age,
      weightDate,
      weight,
      location,
      color,
      healthEvents,
      showPlacing,
    });
  };

  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Bird Page</h1>

        <form onSubmit={handleSubmit}>
          {/* <label>Identifier:</label>
          <input
            type="number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          /> */}

          <label>Name:</label>
          <input
            className="pr-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

              <label>Species:</label>
              <input
                type="text"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
              />


            <label>Breed:</label>
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />



          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <label>Sex:</label>
          <input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />

          <label>Breeder:</label>
          <input
            type="text"
            value={breeder}
            onChange={(e) => setBreeder(e.target.value)}
          />

          <label>Owner:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />

          <label>Cock:</label>
          <input
            type="text"
            value={cock}
            onChange={(e) => setCock(e.target.value)}
          />

          <label>Hen:</label>
          <input
            type="text"
            value={hen}
            onChange={(e) => setHen(e.target.value)}
          />

          <label>Hatch:</label>
          <input
            type="text"
            value={hatch}
            onChange={(e) => setHatch(e.target.value)}
          />

          <label>Sold:</label>
          <input
            type="text"
            value={sold}
            onChange={(e) => setSold(e.target.value)}
          />

          <label>Deceased:</label>
          <input
            type="text"
            value={deceased}
            onChange={(e) => setDeceased(e.target.value)}
          />

          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Weight Date:</label>
          <input
            type="text"
            value={weightDate}
            onChange={(e) => setWeightDate(e.target.value)}
          />

          <label>Weight:</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Color:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <label>Health Events:</label>
          <input
            type="text"
            value={healthEvents}
            onChange={(e) => setHealthEvents(e.target.value)}
          />

          <label>Show Placing:</label>
          <input
            type="text"
            value={showPlacing}
            onChange={(e) => setShowPlacing(e.target.value)}
          />
          <button className="Submit-btn" type="submit">Submit</button>
        </form>
        
      </div>
    </>
  );
}

export default Page;
