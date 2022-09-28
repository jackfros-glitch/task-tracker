import { useState } from "react"


const AddTask = ({addTask}) => {

    const [text, setText] =  useState("")
    const [date, setDate] =  useState("")
    const [isCompleted, setCompleted] =  useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log('Submit called')

        if(!text && !date){
            alert("please fill in the form")
            return;
        }
       
        addTask({text, day:date, isCompleted});
        setText("");
        setDate("");
        setCompleted(false);
        
        
        
    }

  return (
    <div>
        <form action="" className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">
                    Task
                </label>
                <input type="text" name="text" value={text} onChange={(e)=>(setText(e.target.value))}/>
            </div>
            <div className="form-control">
                <label htmlFor="date">
                    Day & Time
                </label>
                <input type="text" name="date" value={date} onChange={(e)=>(setDate(e.target.value))}/>
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" name="reminder" value={isCompleted} onChange={(e)=>(setCompleted(e.currentTarget.checked))} />
            </div>
            <input className="btn btn-block" type="submit" value='Save' />
        </form>
    </div>
  )
}

export default AddTask