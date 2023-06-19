import React from 'react'
import './Mentors.css'
import Card2 from '../Card2/Card2'
import image1 from '../../assets/Images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg'
import image2 from '../../assets/Images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg'
import image3 from '../../assets/Images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg'
import Airbnb from '../../assets/Images/companies/airbnb.png'
import Google from '../../assets/Images/companies/google.png'
import Grab from '../../assets/Images/companies/grab.png'
// import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
const Mentors = () => {
  return (
    <div className='mentor-container'>

      <h1>Our Expert Mentors</h1>
      
      <div className='Card-container'>
        <div className='Cards '>
            <Card2 image={image1} icons={Airbnb} name={'John Dwirian'} department={'UI/UX Design'}/>
        </div>
        <div className='Cards '>
            <Card2 image={image2 } icons={Google} name={'leon S Kennedy'} department={'Machine learnimg'}/>
        </div>
        <div className='Cards '>
            <Card2 image={image3} icons={Grab} name={'Nguyen Thuy'} department={'Andriod Development'}/>
        </div>
      </div>
      {/* <div className='icons-mentor'>
        <button className='icon-mentor'>
          <AiOutlineArrowRight size={20} />
        </button>
              
        <button className='icon-mentor'>
            <AiOutlineArrowLeft size={20} />
        </button>
                
      </div> */}


    </div>
  )
}

export default Mentors
