import React,{ useState } from "react";




function NewPlantForm({handlePlantSubmission,edit,handleEditSubmission,plants}) {
  
  const [newPlant, setNewPlant] = useState({
      name: null,
      image: null,
      price: null
  });

  const [newPlantEdit, setNewPlantEdit] = useState({
    id: edit.id,
    name: null,
    image: null,
    price: null

  })

  const handleSubmissionChange = (e) => {
    const {name,value} = e.target
    setNewPlant({
      ...newPlant,
      [name] : value
    })

  }

  const handleEditChange = () => {


  }


  return (
    <div >
      {edit.status ? 
      <div className='edit-form'>
      <h2>Edit Plant</h2> 
      <form onSubmit={(e) => handleEditSubmission(e, newPlantEdit)} onChange={handleEditChange}>
          <input type="text" name="name" placeholder="Plant name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="number" name="price" step="0.01" placeholder="Price" />
          <button type="submit">Edit Plant</button>
        </form>
      
      </div>
      
      : 
        <div className='new-plant-form'>
       <h2>New Plant</h2>
        <form onSubmit={(e) => handlePlantSubmission(e, newPlant)} onChange={handleSubmissionChange}>
          <input type="text" name="name" placeholder="Plant name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="number" name="price" step="0.01" placeholder="Price" />
          <button type="submit">Add Plant</button>
        </form>
        
        </div>
        
        }
      </div>
  );
}

export default NewPlantForm;
