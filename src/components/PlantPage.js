import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsUrl = 'http://localhost:6001/plants'
  const [plants, setPlants] = useState([])
  const [searchParams, setSearchParams] = useState('')
  const [edit, setEdit] = useState({
    id: null,
    status: false
  })

  const handlePlantSubmission = (e, newPlant) => {
    e.preventDefault()
    fetch(plantsUrl,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(resp => {
      if(resp.ok) {
        setPlants([...plants,newPlant])
      }
    })
    .catch(err => console.log(err))

  }

  const handleSearchParams = (search) => {
    setSearchParams(search)
  }

  const handleDelete = (id) => {

    fetch(`${plantsUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      if(resp.ok) {
        const filterPlants = plants.filter((plant) => plant.id !== id)
        setPlants(filterPlants)
      }
    })
    .catch(err => console.log(err))
  }

  const handleEdit = (id) => {
    setEdit({
      id: id,
      status : true,

    })
  }

  const handleEditSubmission = () => {


  }

  useEffect(() => {
    fetch(plantsUrl)
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm handlePlantSubmission={handlePlantSubmission} handleEditSubmission={handleEditSubmission} edit={edit} plants={plants}/>
      <Search handleSearchParams={handleSearchParams}/>
      <PlantList plants={plants} searchParams={searchParams} handleDelete={handleDelete} handleEdit={handleEdit} />
    </main>
  );
}

export default PlantPage;
