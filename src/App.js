
import './App.css';
import HeroLeft from './Component/Hero/Hero-left'
import HeroRight from './Component/Hero/Hero-right';
import MakeLearning from './Component/MakeLearning/MakeLearning';
import MostPopular from './Component/MostPopular/MostPopular';
import NavBar from './Component/NavBar/NavBar';
import Number from './Component/Number/Number'
import Testimonial from './Component/Testimonial/Testimonial';
import Mentors from './Component/Mentors/Mentors';
import Subscribe from './Component/Subscribe/Subscribe';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
        <div>
        <NavBar/>
        </div>
        
     <div className='heroine'>
        <HeroLeft/>
        <HeroRight/>
     </div>
     
      <div>
        <Number/>
      </div>

      <div>
        <MostPopular/>
      </div>

      <div>
        <MakeLearning/>
      </div>

      <div>
        <Testimonial/>
      </div>

      
      <div>
        <Mentors/>
      </div>
      <div>
        <Subscribe/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
