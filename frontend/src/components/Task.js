

const Task = ({task, onClick}) => {
  return (
    <div className={`task ${task.isCompleted ? 'reminder' : ''}`} onDoubleClick={()=>(onClick(task.id))}>
        <h3>{task.text}</h3>
        <p>{task.day}</p></div>
  )
}

export default Task