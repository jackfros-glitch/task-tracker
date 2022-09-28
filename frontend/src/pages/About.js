import React from 'react'
import img from '../images/manasseh.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='container card text-center' ><h1>About Me </h1>
    <div className='flex card-bg-gray' style={{padding:'10px',marginTop:'15px', border:'1px solid gray', borderRadius:'10px'}}>
        <img src={img} alt="a pics of me" className='card-img' style={{}} />
        <div style={{width:'300px', marginLeft:'5px'}}>
            <p style={{opacity:'0.5'}}>Manasseh Hirekaan</p>
            <p style={{marginTop:"15px", paddingLeft:'5px'}}>Hi There Am Manasseh Hirekaan and am a fullstack Developer</p>
        </div>
    </div>

    <Footer to='/' title='Home Page'/>
    </div>
  )
}

export default About