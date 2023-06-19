import React from 'react'
import './Card2.css'

const Card2 = ({icons, image, name, department}) => {
  return (
    <div>
      <div className='c-img'>
        <img src={image} alt="" width={350}  style={{borderRadius:'1.2rem'}}/>
      </div>
      <div className='text-container'>
      <div className='c-text'>
            <h2>{name}</h2>
            <p>{department}</p>
      </div>
        <p className='c-paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Maxime minus pariatur magnam magni laborum dolor ab! 
            Fugiat commodi nam quaerat aliquam explicabo. 
            Magni blanditiis alias aliquid quia quisquam vero saepe.
        </p>
        
        <div className='c-icon'>
            <span>{icons}</span>
        </div>
      </div>
    </div>
  )
}

export default Card2
