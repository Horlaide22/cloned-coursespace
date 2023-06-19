import './Button.css'
const Button =({text,bg='#f5f5f5', txtColor = '#127C71'})=>{

    return(
        <button className="btn" style={{backgroundColor:bg, color:txtColor}} >{text}</button>
    )
}
export default Button