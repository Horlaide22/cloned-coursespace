import home from '../../assets/Images/home-feature.png'
import {TbCertificate, TbCurrencyDollar} from 'react-icons/tb'
import {BiBookReader} from 'react-icons/bi'
import {AiFillQuestionCircle} from 'react-icons/ai'
import './MakeLearning.css'
const MakeLearning =()=>{
    return(
       <div className='enjoyable'>
            <div>

                <img src={home} alt="" width={500} />
            </div>
            <div className='learn'>
            
                <h2>Make your Learning <br /> Enjoyable</h2>
                <p>Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide.</p>

                <div className='learning'>
                    <div className='inner-learning'>
                          
                         <h4><TbCertificate size={25} color='#127C71'/> Easy Accessible</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div className='inner-learning'>
                       
                        <h4>  <TbCurrencyDollar size={25} color='#127C71'/>More Affordable Cost</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>

                    </div>
                </div>
                <div className='learning'>
                    <div className='inner-learning'>
                       
                        <h4>  <BiBookReader size={25} color='#127C71'/>Flexible Study Time</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div className='inner-learning'>
                        
                        <h4> <AiFillQuestionCircle size={25} color='#127C71'/>Consultation With Mentor</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                </div>
         </div>
       </div>
    )
}
export default MakeLearning