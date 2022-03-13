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
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fl3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fl4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-block">
                                    <h5>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
            <section className="partners">
                <div className="container">
                    <div className="row">
                        {loadingPartners && <Preloader />}
                        {!loadingPartners && partnersResponse && partnersResponse.map(el => {
                            return (
                                <a href={el.url} className="col-lg-3 col-md-4 col-sm-6 pr-0 pl-0" key={el.id} target="_blank">
                                    <div className="partners_square">
                                        <div className="partners_content">
                                            <img src={el.logo} className="partners_hidden" />
                                            <span className="partners_company">{el.name}</span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}



                    </div>

                </div>
            </section>
            <SliderItem bg={"bestseller bestseller_new"} title={"Новинки"} apiUrl={'product/'} options={{ new: true }} />
            <div className="container">
                <div className="company_content">
                    <div className="title">
                        <h2>Всё для сада и огорода |
                            OOO“БелУрожай” Могилёв</h2>
                    </div>
                    <div className="descr_element">
                        <div className="descr_container">
                            <div className="descr_text">
                                <p className="descr_text">— Вы не представляете свою жизнь без цветов на клумбах и свежих овощей
                                    с грядки?<br />—
                                    Вкус только что собранных ягод для Вас никогда не заменят магазинные “безвкусные”
                                    плоды?<br />— Ваш сад или дачный участок, приносящий хорошее настроение даже после
                                    трудного рабочего дня, – неотъемлемая часть Вашей жизни?</p>
                            </div>
                        </div>
                    </div>
                    <div className="descr_element">
                        <div className="descr_container">
                            <div className="descr_text">
                                <p>Если Вы ответили “Да” на эти вопросы, значит, нам есть что Вам предложить.<br />Каталог
                                    товаров компании “<strong>БелУрожай</strong>” – это огромный ассортимент
                                    агротоваров, начиная от семян и заканчивая садовым инвентарем.<br />На страницах
                                    нашего сайта Вы найдете всё для сада и огорода, ознакомитесь с характеристикой
                                    товарных позиций, которые Вы можете приобрести, находясь в любой точке Беларуси у
                                    нас.<br />Только сертифицированная качественная продукция и индивидуальный подход к
                                    каждому клиенту.</p>
                            </div>
                        </div>
                    </div>
                    <div className="descr_element">
                        <div className="descr_container">
                            <div className="descr_text">
                                <p>Компания “<strong>БелУрожай</strong>” является первым импортером в Республику
                                    Беларусь товаров известных российских поставщиков, таких как “<strong>Семена
                                        Алтая</strong>”, “<strong>БиоМастер</strong>”, “<strong>Ваше
                                            Хозяйство</strong>”, “<strong>Органик Лайн</strong>”,
                                    “<strong>Ивановское</strong>”.<br />Мы занимаемся продажей&nbsp;<strong>агротоваров
                                        оптом</strong>. Всё для сада и огорода по лучшим ценам на рынке РБ – осталось
                                    только выбрать интересующий Вас товар.<br />Для более удобной навигации по каталогу Вы
                                    можете воспользоваться поиском вверху сайта.</p>
                            </div>
                        </div>
                    </div>
                    <div className="descr_element">
                        <div className="descr_container">
                            <div className="descr_text_last">Купить товары для сада и огорода
                                быстро и выгодно – OOO“БелУрожай”</div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderItem bg={"bestseller bestseller_hit"} title={"Хит продаж"} apiUrl={'product/'} options={{ bestseller: true }} />
            <section className="wholesale">
                <div className="container">
                    <div className="wholesale_content">
                        <div className="title">
                            <h2>Купить товары для сада и огорода в РБ оптом</h2>
                        </div>
                        <div className="wholesale_container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p>Наша компания будет рада сотрудничеству с региональными <br /> дилерами и
                                                    сельскохозяйственными мануфактурами.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p>Купить товары “Всё для сада и огорода”, качественные товары, цены первого
                                                    поставщика – то, что выделяет компанию “БелУрожай” среди конкурентов.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="descr_text">
                                                <p>Оставить заявку о сотрудничестве можно, воспользовавшись формой обратной
                                                    связи либо позвонив по указанным на сайте телефонам.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="descr_element">
                                        <div className="descr_container">
                                            <div className="wholesale_text_last">Продукция “Всё для сада и огорода” в РБ от
                                                компании “БелУрожай” – выбор заботливого хозяина.</div>
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
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={el.id}>
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