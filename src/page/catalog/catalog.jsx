import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import styles from './catalog.module.sass'
import ProductList from './productList/productList'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader';
const Catalog = () => {
    const [state, setState] = useState('')
    const [menuCategory, setMenuCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [{response, error, isLoading}, doFetch] = useFetch(menuCategory)
    let url=useLocation()
    // временный роутинг
    const availability =`?_limit=9&_page=2`
    const bestseller = `?_limit=9&_page=3`
    // временный роутинг
    useEffect(()=>{
        switch (url.pathname) {
            case '/catalog':
                setMenuCategory(availability)
                break;
            case '/catalog/availability':
                setMenuCategory(availability)
                break;
            case '/catalog/bestseller':
                setMenuCategory(bestseller)
                break;
            default:
                break;
        }
        doFetch()
    },[])
    
    useEffect(()=>{
        doFetch()
    },[menuCategory])
    useEffect(()=>{
        setState(response)
    },[response])
    useEffect(()=>{
       if(fetching) {
            fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=9&_page=${currentPage}`)
                .then(res => res.json())
                .then(body => {
                    setState([...state,...body])
                    setCurrentPage(prevState=> prevState + 1)
                })
                .finally(()=>setFetching(false))
        }
    },[fetching])
    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)

        return function(){
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])
    const scrollHandler = (e) =>{
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+ window.innerHeight)< 100 
        && state.length == totalCount){
            setFetching(true)
        }
    }
    return (
        <div className='container'>
            <div className={styles.catalog}>
            <div className='row'>
                <div className='col-md-3'>
                <span className={styles.categories}>КАТЕГОРИИ ТОВАРОВ</span>
                <ul>
                    <li className={styles.li} onClick={() => setMenuCategory(availability)}><NavLink className={styles.navlink}  to='/catalog/availability'>Товар в наличии</NavLink></li>
                    <li className={styles.li} onClick={() => setMenuCategory(bestseller)}><NavLink className={styles.navlink} to='/catalog/bestseller'>Хит продаж</NavLink></li>
                    <li className={styles.li}>Удобрения</li>
                    <li className={styles.li}>Средства защиты растений</li>
                    <li className={styles.li}>Семена</li>
                    <li className={styles.li}>Саженцы</li>
                    <li className={styles.li}>Биопрепараты</li>
                    <li className={styles.li}>Средства защиты человека</li>
                    <li className={styles.li}>Грунты, дренаж, структурирующие добавки, декор</li>
                    <li className={styles.li}>Кормовые добавки для домашнего скота и птицы</li>
                    <li className={styles.li}>Садовые опрыскиватели</li>
                    <li className={styles.li}>Торфяные таблетки</li>
                    <li className={styles.li}>Средства для ухода за бассейном</li>
                    <li className={styles.li}>Деревянные изделия для сада</li>
                    <li className={styles.li}>Деревянные изделия для сада</li>
                    <li className={styles.li}>Прочие товары</li>
                </ul>
                </div>
                <div className='col-md-9'>
                    {isLoading && <Preloader/>}
                    {!isLoading && state && <ProductList state={state} url={url}/>}
                    {fetching && <Preloader/>}
                </div>
            </div>
            
        </div>
        </div>
        
    )
}
export default Catalog