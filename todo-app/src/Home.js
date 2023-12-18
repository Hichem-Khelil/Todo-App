import React,{useState,useEffect} from 'react'
import Create from './Create'
import './App.css'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {
    const[todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodos(result.data))
        .catch(error=>console.log(error))
    },[])
    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then((result) => {
            setTodos((prevTodos) =>
              prevTodos.map((todo) =>
                todo._id === id ? { ...todo, done: !todo.done } : todo
              )
            );console.log(result);})
        .catch(error=>console.log(error))  
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
            console.log(result);})
        .catch(error=>console.log(error))  
    }
    const handleAdd = (newTask) => {
        // Fonction pour ajouter une nouvelle tâche à la liste des tâches
        setTodos((prevTodos) => [...prevTodos, newTask]);
      };
  return (
    <div className="home">
    
      <h2>🌟ToDo-List🌟</h2>
    
      <Create handleAdd={handleAdd}/> 
    
      {
        todos.length ===0?
        <div><h2>No Tasks</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
                <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                    {todo.done?
                        <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill> 
                        :<BsCircleFill className='icon'/>
                        }
                    
                    <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div>
                    <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}></BsFillTrashFill></span>
                </div>
            </div>
        ))
      }
    </div>
    
    
  )
}

export default Home
