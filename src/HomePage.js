import HeroPage from './Homepage-ui/hero-page';
import Navbar from './Homepage-ui/navbar';
import AboutPage from './Homepage-ui/About';
import FooterPage from './Homepage-ui/footerPage';

function HomePage() {
    return (
      <div className='homepage-section'>
        <Navbar/>
        <HeroPage/>
        <AboutPage />
        <FooterPage/>
      </div>
    );
  }
  
  export default HomePage;