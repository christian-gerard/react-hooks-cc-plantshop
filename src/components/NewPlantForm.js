import React,{ useState } from "react";




function NewPlantForm({handlePlantSubmission}) {
  
  const [newPlant, setNewPlant] = useState({
      name: null,
      image: null,
      price: null
  });

  const handleChange = (e) => {
    const {name,value} = e.target
    setNewPlant({
      ...newPlant,
      [name] : value
    })

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handlePlantSubmission(e, newPlant)} onChange={handleChange}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
