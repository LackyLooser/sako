import React, {useEffect, useState} from 'react'
import {NavLink, useLocation, useParams} from "react-router-dom";
import styles from './catalog.module.sass'
import ProductList from './productList/productList'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader';
const Catalog = () => {
    const searchParams = useLocation().state
    let url = useParams()
    let slug = url.slug
    const [state, setState] = useState('')
    const [menuCategory, setMenuCategory] = useState('')
    const [availabilityOrBestseller,setAvailabilityOrBestseller] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [{response, error, isLoading}, doFetch] = useFetch('category/')
    const [{response: responseAvailability, isLoading: isLoadingAvailability}, doFetchAvailability] = useFetch('product/')
    
    
    useEffect(()=>{
        doFetch()
            const availability = slug =='availability' ? true : ''
            const bestseller = slug == 'bestseller' ? true : ''
            const category_ids = slug == 'product' ? url.id : ''
            const manufactor = slug == 'manufactures' ? url.id : ''
        doFetchAvailability({
            params:{
                search:searchParams,
                category_ids:category_ids,
                new:"",
                manufactor:manufactor,
                availability: availability,
                bestseller:bestseller,
                page:1,
                page_size:9
        }})
    },[])
    useEffect(()=>{
        if (searchParams){
            doFetchAvailability({
                params: {search : searchParams,
                    page:1,
                    page_size:9}
            }) 
        }else if(availabilityOrBestseller){
            doFetchAvailability({
                params: availabilityOrBestseller
            })
        }
    },[availabilityOrBestseller,searchParams])
    const menuClick = (menuCategory) =>{
        doFetchAvailability({params:{category_ids: menuCategory,
            page:1,
            page_size:9}})
    }
    
    useEffect(()=>{
        
        if(responseAvailability){
            setState(responseAvailability.results)
            setTotalCount(responseAvailability.count)
        }
    },[responseAvailability])
    
    useEffect(()=>{
       if(fetching && responseAvailability) {
            fetch(responseAvailability.next)
                .then(res => res.json())
                .then(body => {
                    setState([...state,...body.results])
                    setTotalCount(body.count)
                })
                .finally(()=>setFetching(false))
        }
    },[fetching])
 const loadMore = ()=>{
     setFetching(true)
    console.log('click', totalCount)
 }
console.log(state)
console.log(totalCount)
    return (
        <div className='container'>
            <div className={styles.catalog}>
            <div className='row'>
                <div className='col-md-3'>
                <span className={styles.categories}>КАТЕГОРИИ ТОВАРОВ</span>
                <ul>
                        <li className={styles.li} >
                            <NavLink onClick={()=> setAvailabilityOrBestseller({availability: true,page:1,
                page_size:9})} className={styles.navlink}  to={`/catalog/availability`}>Товары в наличии</NavLink>
                        </li>
                        <li className={styles.li} >
                            <NavLink onClick={()=> setAvailabilityOrBestseller({bestseller: true,page:1,
                page_size:9})} className={styles.navlink}  to={`/catalog/bestseller`}>Хит продаж</NavLink>
                        </li>
                {isLoading && <Preloader/>}
                {!isLoading && response && response.map(el =>{
                    return (
                        <li className={styles.li} key={el.id}>
                            <NavLink onClick={()=>menuClick(el.id)} className={styles.navlink}  to={`/catalog/${el.id}`}>{el.name}</NavLink>
                        </li>
                        
                    )
                })}
                </ul>
                </div>
                <div className='col-md-9'>
                    {isLoading || isLoadingAvailability && <Preloader/>}
                    {state && state.length <1 && !isLoading && !isLoadingAvailability && <div style={{"fontSize": "40px"}}>Товар не найден</div>}
                    {state && !isLoading && !isLoadingAvailability && <ProductList state={state} url={url}/>}
                    {fetching && <Preloader/>}
                    {!fetching && state && state.length != totalCount && (
                        <div className={styles.loadmore}>
                            <button onClick={()=>loadMore()}>загрузить еще</button>
                        </div>
                    
                    )}
                </div>
            </div>
            
        </div>
        </div>
        
    )
}
export default Catalog