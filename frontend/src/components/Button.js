import React from 'react'

const Button = ({title, color, buttonClick}) => {
  return (
   <button className='btn' style={{backgroundColor:color}} onClick={buttonClick}>
    {title}
   </button> 
  )
}

export default Button