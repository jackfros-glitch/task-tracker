import Button from "./Button"

export default function Header({title, buttonClick, formState}){
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button title={formState ? "Close" : "Add"} color={formState ? 'red' : 'green'} buttonClick={buttonClick}/>
    </header>
  )

}

Header.defaultProps = {
    title : 'Task Tracker'
}
