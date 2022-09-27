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

  const doubleClick = (id) =>{
    setTasks(tasks.map((task)=>(task.id !== id ? task : {...task, isCompleted : !task.isCompleted})))
  }


  return (
   
      <div className="container">
        <Header  title='Task Tracker'/>
        <Tasks tasks ={tasks} onClick ={doubleClick}/>
        <AddTask/>
        <Footer/>
      </div>
  )
}

export default Home