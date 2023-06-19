
import{AiFillStar} from 'react-icons/ai'
import{AiOutlineArrowRight} from 'react-icons/ai'
import{AiOutlineStar}from 'react-icons/ai'
import './Card.css'

const Card =({text,price,img, icons= <AiFillStar size={20}/>,num })=>{
    return(
       <div className=''>
            <div className="card-img">
                <img src={img} alt="" width={250}  style={{borderRadius: 10}}/>
            </div>
            <div className="card-content">
                <h3>{text}</h3>
            </div>
            <div className="card-icons " >
             <span style={{color:'#ffce31'}}>
                {icons}
                {icons}
                {icons}
                {icons}
                {icons=<AiOutlineStar size={20}/>}
               
             </span>
             <span> {(num)}</span>
            </div>
           
            <div className='card-btn'>
                <h4> <span style={{color:'#127C71', fontSize:20}}>${price}</span>/course</h4>
                <button className='b-t-n' > 
                    <AiOutlineArrowRight size={25}/>

                </button>
            </div>
       </div>
    )
}
export default Card