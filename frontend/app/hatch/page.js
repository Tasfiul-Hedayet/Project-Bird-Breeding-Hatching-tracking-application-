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

  return (
    <>
      <h1>Hatch</h1>
    </>
  );
}

export default page;
