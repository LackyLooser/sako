import React, { useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Modal from './modal/modal';
import styles from'./product.module.sass'
import useFetch from '../../../components/hooks/useFetch'
import Preloader from '../../../components/preloader/preloader';

const Product = (props) => {
    let url = useParams()
    const [{response, isLoading, error}, doFetch] = useFetch(`product/${url.id}/`)
    const body = document.querySelector('body')
    const [stateSlider, setStateSlider] = useState()
    const [modalActive, setModalActive] = useState(false)
    useEffect(()=>{
        doFetch()
     },[])

     useEffect(() => {
        if(response){
        let arr = [response.main_logo]
        if (response.product_logo.length > 0) {
            response.product_logo.map(el => {
                arr.push(el.logo)
            })
        }
        setStateSlider(arr)
    }
    }, [response])
    
     const modalFlag = (e,id) => {
        setModalActive(e)
        let arr =[]
        
        if(response && id >= 0){
            arr.push(response.product_logo[id].logo)
            response.product_logo.map((el,index)=>{
                    if(index != id){arr.push(el.logo)}
                    
            })
            arr.push(response.main_logo)
            setStateSlider(arr)
        } else {
            arr.push(response.main_logo)
            response.product_logo.map(el=>{
                arr.push(el.logo)
            })
            setStateSlider(arr)
        }
        body.style.overflowY = e ? 'hidden' : 'visible'
     }
     
    return (
        <div className={styles.product}>
        <div className='container'>
            {isLoading && <Preloader/>}
            {error && !isLoading && <div style={{'minHeight':"300px","textAlign":"center","paddingTop": "50px", "fontSize": "40px"}}>
               Товар не найден</div>}
            {response && <div className={styles.product_block}>
                <span className={styles.product_name}>{response.name}</span>
                <div className='row'>
                    <div className='col-lg-5 col-md-6'>
                        <img className={styles.products_img} src={response.main_logo} onClick={()=>modalFlag(true)}/>
                        <div className='row'>
                            {response.product_logo.length > 0 && response.product_logo.map((el,index)=>{
                                return (
                                    <div className='col-sm-3 col-4'key={el.id}>
                                        <img className={styles.products_img_smile} src={el.logo} onClick={()=>modalFlag(true,index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-6'>
                        <div className={styles.product_description}>
                            <div className={styles.availability}>
                                {response.availability 
                                    ?
                                    <span className={styles.availability_yes}>В наличии</span> 
                                    : 
                                    <span className={styles.availability_no}>нет в наличии</span>}
                            </div>
                            <p>{response.descrtiption}</p>
                            </div>
                    </div>
                </div>
            </div>}
        </div>
        {modalActive && stateSlider && <Modal active={modalActive} modalFlag={modalFlag} state={stateSlider}/>}
        </div>
        
    )
}
export default Product