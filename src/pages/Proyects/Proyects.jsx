import React from "react";
import './Proyects.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { description } from "./description";

export const Proyects = () => {
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section id='sectionProyectos' className='proyect content'>
        <h2 className="text-white"><small className="text-secondary-color">04. </small>Proyectos</h2>
        <div className="mt-20">
          <Slider {...settings}>
              {description.map(item=>(
                <div key={item.id} className="card">
                  <div className="card__top mb-16">
                    <img className="w-5/5 rounded-xl" src={item.img}/>
                  </div>
                  <div className="card__bottom text-center ">
                    <a className="rounded-md inline-block bg-secondary-color px-7 hover:bg-primary-color hover:border hover:text-white" href={item.link} target='_blank'>Ver</a>
                  </div>
                </div>
                ))
              }
            
          </Slider>
        </div>
      </section>
    </>
  )
}
