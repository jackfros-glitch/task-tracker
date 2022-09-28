import { FaTimes } from 'react-icons/fa'

const Task = ({task, onClick, onDelete}) => {
  return (
    <div className={`task ${task.isCompleted ? 'reminder' : ''}`} onDoubleClick={()=>(onClick(task.id))}>
        <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:'red', cursor:'pointer'}} /></h3>
        <p>{task.day}</p></div>
  )
}

export default Task