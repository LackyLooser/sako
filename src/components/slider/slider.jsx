import React, { useEffect, useState, Component} from 'react'
import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import './slider.sass'
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
const SliderItem = ({bg,title,apiUrl, options,id}) => {
    const [{response ,error, isLoading}, doFetch] = useFetch(apiUrl)
    let slideShow = response && response.length < 4 ? response.length : 4
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow,
        slidesToScroll: slideShow,
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
                slidesToShow: slideShow < 2 ? 1 : slideShow < 3 ? 2 : 3,
                slidesToScroll: slideShow < 2 ? 1 : slideShow < 3 ? 2 : 3
              }
            },
            {
              breakpoint: 700,
              settings: {
                
                slidesToShow: slideShow < 2 ? 1 : 2,
                slidesToScroll: slideShow < 2 ? 1 : 2
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
      useEffect(()=>{
        doFetch({
          params: options
        })
      },[])
    return (
        <div id={id} className={bg}>
            <div className='container'>
                <div className="bestseller_title">
                    <h2>{title}</h2>
                </div>
                {isLoading && <Preloader/>}
                {!isLoading && response && <Slider {...settings} className="carousel__inner">
                    {response.map(el=>{
                        return (
                            <div key={el.id} >
                                <div className="item">
                                    <NavLink to={`/catalog/product/${el.id}`} className="item_img">
                                        <img src={el.main_logo} alt="slide"/>
                                    </NavLink>
                                    <NavLink to={`/catalog/product/${el.id}`} className="item_name">
                                         {el.name}
                                    </NavLink>
                                    <NavLink to={`/catalog/manufactures/${el.manufactor.id}`} className="item_manufacturer">
                                    {el.manufactor.name}
                                    </NavLink>
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