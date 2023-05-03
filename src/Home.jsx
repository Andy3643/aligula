import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Curriculum from './sections/curriculum/Curriculum';
import WhyUs from './sections/whyUs/WhyUs';
import './App.css';
import InfoStats from './sections/infoStats/InfoStats';
import Staff from './sections/staff/Staff';
import Activities from './sections/activities/Activities';
import Testimonial from './sections/testimonial/Testimonial';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingWhatsAppIcon from './components/FloatingWhatsAppIcon/FloatingWhatsAppIcon';
const Home = () => {
  return (
    <main>
    <Navbar/>
    <Header/>
    <Curriculum/>
    <WhyUs/>
    <InfoStats/>
    <Staff/>
    <Activities/>
    <Contact/>
    <Testimonial/>
    <FloatingWhatsAppIcon />
    <Footer/>
  </main>
  )
}

export default Home