import React, { useEffect } from 'react'
import './home.sass'
import fl1 from '../../img/delete/slider1/slider_1.jpg'
import fl2 from '../../img/delete/slider1/slider_2.jpg'
import fl3 from '../../img/delete/slider1/slider_3.jpg'
import fl4 from '../../img/delete/slider1/slider_4.jpg'
import { NavLink } from 'react-router-dom'
import SliderItem from '../../components/slider/slider'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader'
const Home = () => {
    const [{ response: partnersResponse, isLoading: loadingPartners }, doFetchPartners] = useFetch(`partner/`)
    const [{ response: manufactResponse, isLoading: loadingManufact }, doFetchManufact] = useFetch('manufactor/')
    useEffect(() => {
            doFetchPartners()
            doFetchManufact()
    }, [])
    return (
        <>
            <div className="slider">
                <div className="slider_content">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="20000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={fl1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>ООО "Сако ГРИН"</h5>
                                    <p>Продажа товаров оптом</p>
                                    <NavLink to='/catalog' className="carousel-caption-btn">Перейти в каталог</NavLink>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fl2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>Семена от ведущих  производителей <br/> России, Италии и Польши</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fl3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>Все для успешного роста и развития на Вашем участке</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fl4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>Ваш урожай - наша забота!</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            {loadingPartners && <Preloader />}
            {!loadingPartners && partnersResponse && partnersResponse.length > 0 && <section className="partners">
                <div className="container">
                    <div className="title big">
                        <h2>Наши партнеры</h2>
                    </div>
                    <div className="row">
                        
                        {!loadingPartners && partnersResponse && partnersResponse.map(el => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-4 col-6 pr-0 pl-0" key={el.id}>
                                    <div className="partners_square">
                                        <div className="partners_content">
                                            <img src={el.logo} className="partners_hidden" />
                                            <span className="partners_company">{el.name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>

                </div>
            </section>}
            <SliderItem id={"new"} bg={"bestseller bestseller_new"} title={"Новинки"} apiUrl={'product/'} options={{ new: true }} />
            <div className="company">
                <div className="container">
                    <div className="company_content">
                        <div className="title">
                            <h2>С НАМИ НАДЁЖНО, УДОБНО И ВЫГОДНО РАБОТАТЬ!</h2>
                        </div>
                        <div className="descr_element">
                            <div className="descr_container">
                                <div className="descr_text">
                                    <p className="indent">ООО «Сако ГРИН» - динамично развивающаяся компания в сфере оптовых продаж: семян овощных и цветочных культур, удобрений, средств защиты растений от вредителей, болезней и сорняков, микроудобрений и препаратов от грызунов, бытовой химией и садовым инвентарем.</p>
                                </div>
                            </div>
                        </div>
                        <div className="descr_element">
                            <div className="descr_container">
                                <div className="descr_text preim">
                                    <p><strong>Наши преимущества:</strong><br/>
                                        индивидуальный подход к клиенту<br/>
                                        конкурентоспособные цены<br/>
                                        профессиональная команда<br/>
                                        система скидок<br/>
                                        доставка товара в любой регион нашей страны<br/>
                                        работаем с возвратами продукции<br/>
                                        прямые договоры с заводами<br/>
                                        заводское качество, пакет документации<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SliderItem id={'best'} bg={"bestseller bestseller_hit"} title={"Хит продаж"} apiUrl={'product/'} options={{ bestseller: true }} />
            <section className="wholesale">
                <div className="container">
                    <div className="wholesale_content">
                        <div className="title">
                            <h2>Мы работаем с любыми клиентами, на различных условиях.</h2>
                        </div>
                        <div className="wholesale_container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                            <p className="indent">
                                                Скидка и отсрочка платежа за приобретённый товар оговариваются с клиентами и прописываются, в дальнейшем, в договоре.
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                            <p className="indent">Договор и <span className="under">прайсы</span>, для дальнейшей работы и оптовых приобретений товара, Вам можем выслать на электронный адрес, вайбер, телеграмм или нарочно.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p><strong>При заказе:</strong></p>
                                                <p className="indent">
                                                – от 300 бел. рублей и оплате в течении 3 календарных дней предоставляется скидка 5%.</p>
                                                <p className="indent">– от 800 бел. рублей и оплате в течении 3 календарных дней предоставляется скидка 7%.</p>
                                                <p className="indent">– от 1500 бел. рублей и оплате в течении 3 календарных дней предоставляется скидка 9%.</p>
                                                <p className="indent">– от 3000 бел. рублей и оплате в течении 3 календарных дней предоставляется скидка 12%.</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p><strong>Гарантии:</strong></p>
                                                <p className="indent">
                                                Возможен возврат или обмен не проданного товара, а также операции по взаимозачету.<br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p><strong>Доставка:</strong></p>
                                                <p className="indent">Доставка продукции в любую точку РБ осуществляется за счет нашего предприятия. <br/>
                                                Заказы выполняются в кратчайшие сроки.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="manufacturers">
                <div className="container">
                    <div className="manufacturers_content">
                        <div className="title">
                            <h2>Производители, которых Мы представляем в Беларуси!</h2>
                        </div>
                        <div className="row">
                            {loadingManufact && <Preloader />}
                            {!loadingManufact && manufactResponse && manufactResponse.map(el => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 pr-1 pl-1" key={el.id}>
                                        <NavLink to={`/catalog/manufactures/${el.id}`}>
                                            <div className="manufacturers_item">
                                                <div className="manufacturers_item_link" href="#">
                                                    <img src={el.logo} alt="logo" />
                                                </div>
                                                <div className="manufacturers_item_company">
                                                    {el.name}
                                                </div>
                                                <div className="manufacturers_item_production">
                                                    Продукция
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
export default Home