import { Link } from 'react-router-dom'

export default function Footer({to, title}){
  return (
    <footer className='footer'>
        <p>Copyright &copy; 2022</p>
        <Link to={to}>{title}</Link>
    </footer>
  )
}


