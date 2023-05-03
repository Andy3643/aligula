
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import igse from '../../assets/curriculum/igcse.png'
import british from '../../assets/curriculum/british.jpg'
import kicd from '../../assets/curriculum/kicd.jpg'
import oxford from '../../assets/curriculum/oxford.jpg'
import knec from '../../assets/curriculum/knec.png'


import './course.css'
function Course() {
    const settings = {
       
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        centerMode: true,
        margin: "0 50px", 
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "20px",
                margin: "0 10px", // add margin to the left and right of each slide
              },
            },
          ],
      };
    return (
        <>
        <div className="container logo-slider">
        <Slider {...settings}>
            <img  src={igse} alt="image here" />
            <img  src={british} alt="image here" />
            <img  src={oxford} alt="image here" />
            <img  src={kicd} alt="image here" />
            <img  src={knec} alt="image here" />
            

        </Slider>
        </div>
        </> 
  );
}

export default Course