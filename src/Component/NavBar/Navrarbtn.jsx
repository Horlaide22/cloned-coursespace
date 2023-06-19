import Button from "../Button/Button"

const Navrarbtn=()=>{
    return(
       <div style={{display:'flex', gap:10 }}>
        <Button text="Sign In"/>
        <Button text='Sign Up' 
        bg= '#127C71'
        txtColor="#f5f5f5"/>
       </div>
    )
}
export default Navrarbtn