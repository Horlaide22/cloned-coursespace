import Button from "../Button/Button"
import './Hero.css'
const HeroLeft = ()=>{
    return(
       <div className="hero-txt">
            <div>
                <h2 className="text">
            <span style={{color:'#127C71'}}>Improve</span>  your Skill
                with Different Way
                </h2>
            </div>
            <div className="p-txt">
                <p>
                Let's take an online course to improve your skills in a different way,  <br/>
                you can set your own study time according to your learning speed. So <br/>
                you san study comfortable and absorb tge material easily.
                </p>
            </div>
            <div className="heroBtn">
                <Button text= 'Get Started'
                txtColor="#FFFFFF"
                bg="#127C71"/>
                <Button text= 'Watch Video' 
                />
            </div>
       </div>
    )
}
 export default HeroLeft