import React from 'react'
import './Footer.css'
import instagram from '../../assets/Images/icons/instagram.svg'
import youtube from '../../assets/Images/icons/youtube.svg'
import twitter from '../../assets/Images/icons/twitter.svg'
import dribble from '../../assets/Images/icons/dribbble.svg'
import github from '../../assets/Images/icons/github.svg'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-course'>
            <h1>Coursespace</h1>
            <p>Coursespace is an online learning platform that has  <br />
                been operating since 2018 until now.
            </p>
            <div className='footer-icon'>
                <img src={instagram} alt=""/>
                <img src={youtube} alt=""/>
                <img src={twitter} alt=""/>
                <img src={dribble} alt="" width={30} />
                <img src={github} alt="" />

            </div>
        </div>
        <div className='course-menu'>
            <div > 
                <h3>Course</h3>
                <li>
                    <a href="/">UI/UX Design</a>
                </li>
                <li>
                    <a href="/">Mobile Development</a>
                </li>
                <li>
                    <a href="/">Machine Learning</a>
                </li>
                <li>
                    <a href="/">Web Development</a>
                </li>
            </div>
            <div >  
                <h3>Menu</h3>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Course</a>
                </li>
                <li>
                    <a href="/">Testiominal</a>
                </li>
                <li>
                    <a href="/">Mentor</a>
                </li>
            </div>
            <div>
                <h3>About</h3>
                <li> 
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Privacy&Policy</a>
                </li>
                <li>
                    <a href="/">Terms & Condition</a>
                </li>
                <li>
                    <a href="/">FAQ</a>
                </li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
