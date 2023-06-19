import React from 'react'
import './Testimonial.css'
import passport1 from '../../assets/Images/avatars/1.jpg'
import hometestimonial from '../../assets/Images/home-testimonial.png'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className='inner-testimonial'>
            <h1 className='head-testimonial'>Testimonial What our <span style={{color: '#127C71'}}>Students</span> Say</h1>
            <h3>Detailed Learning Materials</h3>
            <p className='p-testimonial'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui assumenda sequi veritatis debitis blanditiis 
                distinctio voluptatibus labore velit animi exercitationem obcaecati, 
                temporibus voluptatum, quidem eaque minima veniam. Iure nesciunt exercitationem, ad natus libero illo est.
            </p>
            <div className='small-testimonial'>
                <div className='img-testimonial' > 
                    <img src={passport1} alt="" style={{width:'70px', height:'70px', borderRadius:'50%'}} />
                   <div>
                   <h5>Luis sera</h5> 
                    <p>UI/UX Engineer</p>
                   </div>
                </div>
                
                <div className='testimonial-icon'>
                   
                    <button className='icon-test'>
                    <AiOutlineArrowRight size={20} />
                    </button>
              
                    <button className='icon-test'>
                    <AiOutlineArrowLeft size={20} />
                    </button>
                </div>
            </div>
      </div>
      <div>
         <img src={hometestimonial} alt="" />
      </div>
    </div>
  )
}

export default Testimonial
