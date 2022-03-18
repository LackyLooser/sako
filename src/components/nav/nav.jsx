import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './nav.module.sass'
const Nav = () => {
    $(document).ready(function(){
      $('#clickNew').on('click',function(e) {
        if (!$(this).hasClass("no-jump")) {
          $('html, body').stop().animate({
            scrollTop: $('#new').offset().top
          },777);
          e.preventDefault();
          return false;
        }
      });     
    });
    return (
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
                            
                            <a href="/#new" className={styles.nav_menu_link} id="clickNew">
                                Новинки
                            </a>
                        </li>
                    </ul>
                    
                </nav>
    )
}
export default Nav