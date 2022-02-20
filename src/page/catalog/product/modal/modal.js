import React from 'react'
import './modal.css'

const Modal = ({active, modalFlag,state}) =>{
    
    return (
        <div className={active ? 'modal_element active' : 'modal_element'} onClick={()=>modalFlag(false)}>
            <div className='modal_content' onClick={e=>e.stopPropagation()}>
                <span class="carousel-control-prev-icon prev"></span>
                <img src={state.url}/>
                <span class="carousel-control-next-icon next"></span>
            </div>
        </div>
    );
}
export default Modal;