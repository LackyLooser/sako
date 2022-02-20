import React, { useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Modal from './modal/modal';
import styles from'./product.module.sass'


const Product = (props) => {
    const body = document.querySelector('body')
    const [state, setState] = useState('')
    const [modalActive, setModalActive] = useState(false)
    let url = useParams()
    useEffect(()=>{
             fetch(`https://jsonplaceholder.typicode.com/photos/${url.id}`)
                 .then(res => res.json())
                 .then(body => {
                     setState(body)
                 })
     },[])
     const modalFlag = (e) => {
        setModalActive(e)
        body.style.overflowY = e ? 'hidden' : 'visible'
     }
    return (
        <>
        <div className='container'>
            <div className={styles.product_block}>
                <span className={styles.product_name}>Название товара</span>
                <div className='row'>
                    <div className='col-md-5'>
                        <img className={styles.products_img} src={state.url} onClick={()=>modalFlag(true)}/>
                        <div className='row'>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                            <div className='col-6 col-sm-3 md-4'>
                                <img className={styles.products_img_smile} src={state.url} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className={styles.product_description}>
                            <div className={styles.availability}>
                                <span>В наличии</span>
                            </div>
                            <p>Слой мульчирования: для древесно-кустарниковой растительности 7-10 см, для многолетников 3-5 см.</p>
                            <p>Примечание: использовать можно как подстилающий слой под органический мульчирующий материал.</p>
                            <p>Мульча&nbsp; считается одним из лучших вариантов защиты и декоративного&nbsp; оформления сада. Очень хорошо подходит на небольшие участки, на которых посажены большие или мелкие растения. Мелкая фракция помола приводит к тому, что сосновая кора приобретает более деликатный вид. Однако следует помнить, что мелкая кора легко разносится ветром и не подходит для использования на открытых участках, поврежденных воздействию сильных порывов ветров.</p>
                            <p>Кора сосны необходима для яблонь и груш. Можно устелить под алычей, абрикосовыми деревьями, вишней, сливой, черешней и другими плодоносными&nbsp; деревьями. Большой урожай принесет смородина красная и черная, малина, барбарис. Можно использовать под клубникой и земляникой. Применяют для цветников. Органическая отсыпка стимулирует рост даже таких прихотливых цветов, как розы.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal active={modalActive} modalFlag={modalFlag} state={state}/>
        </>
        
    )
}
export default Product