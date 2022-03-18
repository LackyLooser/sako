import React from 'react'
import Slider from "react-slick";
import './modal.css'

const Prev = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} type="button" className="slick-prev"><i className="fas fa-chevron-left"></i></span>
    )
}
const Next = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} type="button" className="slick-next"><i className="fas fa-chevron-right"></i></span>
    )
}
const Modal = ({ active, modalFlag, state}) => {
    let settings = {
        infinite: true,
        speed: 0,
        prevArrow: <Prev />,
        nextArrow: <Next />,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows:false
              }
            }
          ]
    };
    return (
        <>
            {state && <div className={active ? 'modal_element active' : 'modal_element'} onClick={() => modalFlag(false)}>
                <div className="modal_close">&times;</div>
                <div className='modal_content' onClick={e => e.stopPropagation()}>
                    {state && state.length <= 1 && <img src={state} />}
                    {state && state.length > 1 && <Slider {...settings}>
                        {state.length > 1 && state.map(el => {
                            return (
                                <div key={el}>
                                    <img src={el} />
                                </div>
                            )
                        })}

                    </Slider>}

                </div>
            </div>}
        </>

    );
}
export default Modal;