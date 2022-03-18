import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from "react-router-dom";
import styles from './catalog.module.sass'
import ProductList from './productList/productList'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader';
const Catalog = () => {
    const searchParams = useLocation().state
    let url = useParams()
    let slug = url.slug
    const [state, setState] = useState('')
    const [menuCategory, setMenuCategory] = useState(false)
    const [availabilityOrBestseller, setAvailabilityOrBestseller] = useState()
    const [next, setNext] = useState('')
    const [fetching, setFetching] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [{ response, error, isLoading }, doFetch] = useFetch('category/')
    const [{ response: responseAvailability, isLoading: isLoadingAvailability }, doFetchAvailability] = useFetch('product/')


    useEffect(() => {
        doFetch()
        const availability = slug == 'availability' ? true : ''
        const bestseller = slug == 'bestseller' ? true : ''
        const category_ids = slug == 'product' ? url.id : ''
        const manufactor = slug == 'manufactures' ? url.id : ''
        doFetchAvailability({
            params: {
                search: searchParams,
                category_ids: category_ids,
                new: "",
                manufactor: manufactor,
                availability: availability,
                bestseller: bestseller,
                page: 1,
                page_size: 9
            }
        })
    }, [])
    useEffect(() => {
        if (slug == 'manufactures' && url.id) {
            doFetchAvailability({
                params: {
                    manufactor: url.id,
                    page: 1,
                    page_size: 9
                }
            })
        } else if (searchParams) {
            doFetchAvailability({
                params: {
                    search: searchParams,
                    page: 1,
                    page_size: 9
                }
            })
        } else if (availabilityOrBestseller) {
            doFetchAvailability({
                params: availabilityOrBestseller
            })
        }
    }, [availabilityOrBestseller, searchParams, slug])
    const menuClick = (menuCategory) => {
        doFetchAvailability({
            params: {
                category_ids: menuCategory,
                page: 1,
                page_size: 9
            }
        })
    }

    useEffect(() => {

        if (responseAvailability) {
            setState(responseAvailability.results)
            setTotalCount(responseAvailability.count)
            setNext(responseAvailability.next)

        }
    }, [responseAvailability])

    useEffect(() => {
        if (fetching && responseAvailability) {
            fetch(next)
                .then(res => res.json())
                .then(body => {
                    setState([...state, ...body.results])
                    setTotalCount(body.count)
                    setNext(body.next)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])
    const loadMore = () => {
        setFetching(true)
    }
    const clickCategory = () =>{
        menuCategory ? setMenuCategory(false) : setMenuCategory(true)
    }
    return (
        <div className={styles.bg}>
            <div className='container'>
                <div className={styles.catalog}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className={styles.menu}>
                                <span className={styles.categories}>КАТЕГОРИИ ТОВАРОВ</span>
                                <ul>
                                    <li className={styles.menuli} >
                                        <NavLink onClick={() => setAvailabilityOrBestseller({
                                            availability: true, page: 1,
                                            page_size: 9
                                        })} className={styles.navlink} to={`/catalog/availability`}>Товары в наличии</NavLink>
                                    </li>
                                    <li className={styles.menuli} >
                                        <NavLink onClick={() => setAvailabilityOrBestseller({
                                            bestseller: true, page: 1,
                                            page_size: 9
                                        })} className={styles.navlink} to={`/catalog/bestseller`}>Хит продаж</NavLink>
                                    </li>
                                    {isLoading && <Preloader />}
                                    {!isLoading && response && response.map(el => {
                                        return (
                                            <li className={styles.menuli} key={el.id}>
                                                <NavLink onClick={() => menuClick(el.id)} className={styles.navlink} to={`/catalog/${el.id}`}>{el.name}</NavLink>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>

                        </div>
                        <div className='col-md-9 pl-0 pr-0'>
                            <div className={styles.menu767}>
                                <span onClick={()=>clickCategory()} className={styles.categories767}>
                                    КАТЕГОРИИ ТОВАРОВ
                                    {!menuCategory && <div className={styles.circ_close}>&lt;</div>}
                                    {menuCategory && <div className={styles.circ_open}>&lt;</div>}
                                </span>
                                {menuCategory && <div className={styles.menu_category}>
                                        <NavLink onClick={() => {
                                            setMenuCategory(false)
                                            setAvailabilityOrBestseller({
                                                availability: true, page: 1,
                                                page_size: 9
                                        })}} className={styles.navlink} to={`/catalog/availability`}>Товары в наличии</NavLink>
                                   
                                   
                                        <NavLink onClick={() => {
                                            setMenuCategory(false)
                                            setAvailabilityOrBestseller({
                                            bestseller: true, page: 1,
                                            page_size: 9
                                        })}} className={styles.navlink} to={`/catalog/bestseller`}>Хит продаж</NavLink>
                                   
                                    
                                    {!isLoading && response && response.map(el => {
                                        return (
                                                <NavLink key={el.id} onClick={() =>{
                                                    setMenuCategory(false)
                                                    menuClick(el.id)}} 
                                                    className={styles.navlink} to={`/catalog/${el.id}`}>{el.name}</NavLink>
                                           

                                        )
                                    })}
                                </div>}
                            </div>
                            {isLoading || isLoadingAvailability && <Preloader />}
                            {state && state.length < 1 && !isLoading && !isLoadingAvailability && <div style={{ "fontSize": "40px" }}>Товар не найден</div>}
                            {state && !isLoading && !isLoadingAvailability && <ProductList state={state} url={url} />}
                            {fetching && <Preloader />}
                            {!fetching && state && state.length != totalCount && (
                                <div className={styles.loadmore}>
                                    <button onClick={() => loadMore()}>загрузить еще</button>
                                </div>

                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
export default Catalog