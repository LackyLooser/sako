import React, { useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import logo from '../../img/logo/logo.png';
import styles from './header.module.sass'
const Header = () => {
    const [state, setState] = useState('')
    return (
            <header className={styles.header}>
                    <div className={styles.header_content}>
                            <div className={styles.header_search}>
                                <div className={styles.header_search_container}>
                                    <input onChange={e => setState(e.target.value)} 
                                    type="text" 
                                    className={styles.header_search_input} 
                                    placeholder="Поиск товаров" 
                                    value={state}/>
                                    <NavLink to="/catalog" state={state} >
                                        <button onClick={()=>setState('')} className={styles.header_search_input_btn}>
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </NavLink>
                                </div>
                                
                            </div>
                            <div className={styles.header_logo} href="#">
                                <div className={styles.header_logo_img}>
                                    <img src={logo} alt="logo"/>
                                </div>
                                
                            </div>
                            <div className={styles.header_phone}>
                                <div className={styles.header_phone_content}>
                                    <span>
                                        Тел./факс 8-017-356-98-03
                                    </span>
                                    <span>
                                        моб. 8-029-688-40-44
                                    </span>
                                    <span>
                                        моб. 8-029-688-40-48
                                    </span>
                                    <span>
                                        Email:
                                         <a href="mailto:trade@sako.by">trade@sako.by</a>
                                    </span>
                                </div>
                            </div>
                    </div>
            </header>
    )
}
export default Header