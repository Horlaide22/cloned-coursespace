import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='sub-wrapper'>
      <div className='inner-subscribe'>
        <div className='sub-text'>
           <div className='inner-sub-text'>
           <h1 className='inner-text'> Subscribe to Our News Letter</h1>
            <p >Subscribe to our newsletter to get information about our courses.</p>
           </div>
        
        <div className='sub-input'>
            <input type="text" id='email' placeholder='Enter Your Email Address' />
            <button type="submit">subscribe</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
