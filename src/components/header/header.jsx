import React, { useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import logo from '../../img/logo/logo.png';
import styles from './header.module.sass'
const Header = () => {
    const [state, setState] = useState('')
    return (
        <section className={styles.header}>
            <header>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 pl-0 pr-0">
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 pl-0 pr-0">
                            <a className={styles.header_logo} href="#">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 pl-0 pr-0">
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
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_menu_item}>
                            <NavLink to="/" className={styles.nav_menu_link}>
                                Главная
                            </NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink to="/catalog" className={styles.nav_menu_link}>
                                Каталог
                            </NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink to="/about" className={styles.nav_menu_link}>
                                О нас
                            </NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink to="/contacts" className={styles.nav_menu_link}>
                                Контакты
                            </NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <a href="/#new" className={styles.nav_menu_link}>
                                Новинки
                            </a>
                        </li>
                    </ul>
                    
                </nav>
            </header>
    </section>
    )
}
export default Header