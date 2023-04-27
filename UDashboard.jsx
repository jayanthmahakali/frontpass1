import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import mycss from './mycss.css';


 
const data = [
    {
     image: require('../Images/image1.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('../Images/image2.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('../Images/image3.jpeg'), 
      caption:"Caption",
      description:"Description Here"
     } 
  ]
 
const UDashboard = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
 
    return (
    <div class="col main pt-5 mt-3">
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
 
    </div>
    )
}
 
export default UDashboard