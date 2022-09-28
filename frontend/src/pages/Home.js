import Header  from "../components/Header"
import Footer from "../components/Footer"
import Tasks from "../components/Tasks"
import { useState } from "react"
import AddTask from "../components/AddTask"

const Home = () => {
  const [tasks , setTasks] = useState([
    {
      "id": 1,
      "text": "Take out the trash",
      "day": "04-20-2022",
      "isCompleted": true
    },
    {
      "id": 2,
      "text": "Meeting with Wendy",
      "day": "10-2-2022",
      "isCompleted": true
    },
    {
      "text": "Doctors Appointment",
      "day": "feb 6th at 1:30pm",
      "isCompleted": false,
      "id": 3
    }
  ])

  const [addForm, setAddForm] = useState(false)


  const doubleClick = (id) =>{
    setTasks(tasks.map((task)=>(task.id !== id ? task : {...task, isCompleted : !task.isCompleted})))
  }

  const showAdd = ()=>{
    setAddForm(!addForm);
  }
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id ,...task}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }

  return (
   
      <div className="container">
        <Header  title='Task Tracker' buttonClick={showAdd} formState={addForm}/>
        <Tasks tasks ={tasks} onClick ={doubleClick} onDelete={deleteTask}/>
        {addForm && <AddTask addTask={addTask} />}
        <Footer/>
      </div>
  )
}

export default Home