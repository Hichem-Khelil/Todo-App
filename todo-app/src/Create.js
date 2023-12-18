import React,{useState} from 'react'
import axios from 'axios'
function Create({ handleAdd }) {
    const [task, setTask] = useState('');
  
    const addTask = () => {
      axios
        .post('http://localhost:3001/add', { task })
        .then((result) => {
          handleAdd(result.data);
          console.log(result);
          setTask('');
        })
        .catch((error) => console.log(error));}

  return (
    <div className='create_form'>
      <input  type='text' name='' id='' placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={addTask}>Add</button>
    </div>
  )
}

export default Create
