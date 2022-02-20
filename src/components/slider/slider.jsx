import React, { useEffect, useState, Component} from 'react'
import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import './slider.sass'
import bs1 from '../../img/delete/bestseller/6.png'
import bs2 from '../../img/delete/bestseller/1.png'
import bs3 from '../../img/delete/bestseller/2.png'
import bs4 from '../../img/delete/bestseller/3.jpg'
import bs5 from '../../img/delete/bestseller/5.png'
import useFetch from '../hooks/useFetch';
import Preloader from '../preloader/preloader';
const Prev=(props) =>{
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} type="button" className="slick-prev"><i className="fas fa-chevron-left"></i></span>
    )
}
const Next=(props) =>{
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} type="button" className="slick-next"><i className="fas fa-chevron-right"></i></span>
    )
}
const SliderItem = ({bg,title,apiUrl}) => {
    const [{response ,error, isLoading}, doFetch] = useFetch(apiUrl)
    useEffect(()=>{
      doFetch()
    },[])
    const arr = [bs1,bs2,bs3,bs4,bs5]
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <Prev/>,
        nextArrow: <Next/>,
        appendDots: dots => (
            <div>
              <ul className='dots'> {dots} </ul>
            </div>
          ),
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className={bg}>
            <div className='container'>
                <div className="bestseller_title">
                    <h2>{title}</h2>
                </div>
                {isLoading && <Preloader/>}
                {!isLoading && response && <Slider {...settings} className="carousel__inner">
                    {response.map(el=>{
                        return (
                            <div key={el.id}>
                                <div className="item">
                                    <a href="#" className="item_img">
                                        <img src={el.url} alt="slide"/>
                                    </a>
                                    <a href="#" className="item_name">
                                        Удобрение сухое Фаско 5М Почвопротектор минер. для плод.-ягод гран. 1 кг. 1/5 шт. (Фаско) РФ
                                    </a>
                                    <a href="#" className="item_manufacturer">
                                        Фаско
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                
                </Slider>}
            </div>
        
      </div>
    );
}
export default SliderItem