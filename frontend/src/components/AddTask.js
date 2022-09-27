

const AddTask = () => {
  return (
    <div>
        <form action="" className="add-form">
            <div className="form-control">
                <label htmlFor="text">
                    Task
                </label>
                <input type="text" name="text"/>
            </div>
            <div className="form-control">
                <label htmlFor="date">
                    Day & Time
                </label>
                <input type="text" name="date" />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" name="reminder" />
            </div>
            <input className="btn btn-block" type="submit" value='Save' />
        </form>
    </div>
  )
}

export default AddTask