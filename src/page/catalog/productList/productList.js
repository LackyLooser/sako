import React, { useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import styles from './productList.module.sass'
const ProductList = ({state,url}) => {
    const [stateProduct, setStateProduct] = useState('')
    useEffect(()=>{
        setStateProduct(state)
    },[state])
    return (
        <div>
            <ul className={styles.products_container}>
            {stateProduct && stateProduct.map((el) =>
            <NavLink className={styles.navlink} to={`/catalog/product/${el.id}`} key={el.id}>
                <li className={styles.products_element} >
                    <img className={styles.products_element_img} src={el.main_logo} />
                    <span className={styles.products_element_name}>{el.name}</span>
                    <NavLink to={`/catalog/manufactures/${el.manufactor.id}`}><span className={styles.products_element_manufacturers}>
                        {el.manufactor.name}
                        </span></NavLink>
                    
                </li>
            </NavLink>
                
             )}
            
            </ul>
        </div>
    )
}
export default ProductList