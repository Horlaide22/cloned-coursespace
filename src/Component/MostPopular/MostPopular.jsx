import image1 from '../../assets/Images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg'
import image2 from '../../assets/Images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg'
import image3 from '../../assets/Images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg'
import Card from '../card/Card'
import './MostPopular.css'
const MostPopular = ()=>{
    return(
        <div className='MostPop-Content'>
            <div className='content'>
                <h2>Most Popular Courses</h2>
            </div>
            <div className='cardContainer'>
                <div className='cards'>
                    <Card img={image1} price={20} num={(8)} text={'Andriod development from zero to Hero'}/>
                </div>
                <div className='cards'>
                    <Card img={image2} price={25} num={(6)} text={'Ethical Hacking Bootcamp Zero to Mastery'}/>
                </div>
                <div className='cards'>
                    <Card img={image3} price={30} num={(15 )} text={'Modern react with MUI and Redux'}/>
                </div>
            </div>
        </div>
    )
}
export default MostPopular