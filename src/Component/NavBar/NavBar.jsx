import './NavBar.css'
import Navrarbtn from './Navrarbtn'

const NavBar = () =>{
    return(
        <nav>
            <h3>
                Course<span style={{color:'#127C71'}}>space</span>
            </h3>
           <div>
           <ul>
                <li>Home</li>
                <li>course</li>
                <li>Testimonial</li>
                <li>Mentor</li>
            </ul>
           </div>
           <div>
            <Navrarbtn/>
           </div>
        </nav>
    )
}
export default NavBar