
"use client";

import { useState } from "react";

function page() {
  const [hatchNumber, setHatchNumber] = useState(1); // Hatch Number (should increment)
  const [identification, setIdentification] = useState(""); // Identification
  const [speciesHatch, setSpeciesHatch] = useState(""); // Species
  const [breedHatch, setBreedHatch] = useState(""); // Breed
  const [cockIdentifier, setCockIdentifier] = useState(""); // Cock Identifier (cross reference to Bird Tracker Database)
  const [henIdentifier, setHenIdentifier] = useState(""); // Hen Identifier (cross reference to Bird Tracker Database)
  const [setDate, setSetDate] = useState(""); // Set (Date)
  const [lockdownDate, setLockdownDate] = useState(""); // Lockdown (date)
  const [hatchDate, setHatchDate] = useState(""); // Hatch (date)
  const [numberSet, setNumberSet] = useState(""); // # Set
  const [numberFertile, setNumberFertile] = useState(""); // # Fertile
  const [numberHatch, setNumberHatch] = useState(""); // # Hatch
  const [fertilityRate, setFertilityRate] = useState(0); // Fertility Rate (calculated field)
  const [hatchRate, setHatchRate] = useState(0); // Hatch Rate (calculated field)
  const [hatchabilityRate, setHatchabilityRate] = useState(0); // Hatchability Rate (calculated field)
  const [location, setLocation] = useState(""); // Location (free text)
  const [notes, setNotes] = useState(""); // Notes (free text)

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form values as needed, e.g., send them to a server or perform calculations.
    // For simplicity, let's just log the values to the console for now.
    console.log({
      hatchNumber, identification, speciesHatch, breedHatch, cockIdentifier,
      henIdentifier, setDate, lockdownDate, hatchDate, numberSet, numberFertile,
      numberHatch, fertilityRate, hatchRate, hatchabilityRate, location, notes
    });
  };

  return (
    <>
      <h1>Hatch</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Hatch Number:
          <input type="number" value={hatchNumber} onChange={(e) => setHatchNumber(e.target.valueAsNumber)} />
        </label>
        <label>
          Identification:
          <input type="text" value={identification} onChange={(e) => setIdentification(e.target.value)} />
        </label>

        <label>
          Species:
          <input type="text" value={speciesHatch} onChange={(e) => setSpeciesHatch(e.target.value)} />
        </label>

        <label>
          Breed:
          <input type="text" value={breedHatch} onChange={(e) => setBreedHatch(e.target.value)} />
        </label>

        <label>
          Cock Identifier:
          <input type="text" value={cockIdentifier} onChange={(e) => setCockIdentifier(e.target.value)} />
        </label>

        <label>
          Hen Identifier:
          <input type="text" value={henIdentifier} onChange={(e) => setHenIdentifier(e.target.value)} />
        </label>

        <label>
          Set (Date):
          <input type="date" value={setDate} onChange={(e) => setSetDate(e.target.value)} />
        </label>

        <label>
          Lockdown (Date):
          <input type="date" value={lockdownDate} onChange={(e) => setLockdownDate(e.target.value)} />
        </label>

        <label>
          Hatch (Date):
          <input type="date" value={hatchDate} onChange={(e) => setHatchDate(e.target.value)} />
        </label>

        <label>
          # Set:
          <input type="number" value={numberSet} onChange={(e) => setNumberSet(e.target.valueAsNumber)} />
        </label>

        <label>
          # Fertile:
          <input type="number" value={numberFertile} onChange={(e) => setNumberFertile(e.target.valueAsNumber)} />
        </label>

        <label>
          # Hatch:
          <input type="number" value={numberHatch} onChange={(e) => setNumberHatch(e.target.valueAsNumber)} />
        </label>

        <label>
          Fertility Rate:
          <input type="number" value={fertilityRate} onChange={(e) => setFertilityRate(e.target.valueAsNumber)} />
        </label>

        <label>
          Hatch Rate:
          <input type="number" value={hatchRate} onChange={(e) => setHatchRate(e.target.valueAsNumber)} />
        </label>

        <label>
          Hatchability Rate:
          <input type="number" value={hatchabilityRate} onChange={(e) => setHatchabilityRate(e.target.valueAsNumber)} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <label>
          Notes:
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>


        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default page;
