import React, { useEffect } from 'react'
import styles from './contacts.module.sass'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader'
const Contacts = () => {
    const [{ response, isLoading }, doFetch] = useFetch(`contacts/`)
    useEffect(() => {
        doFetch()

    }, [])
    return (
        <section className={styles.contacts}>
            <div className="container">
                <div className={styles.contacts_content}>
                    <div className={styles.title}>
                        <h2>Контакты</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.contacts_container}>
                                <div className={styles.contacts_element}>
                                    <div className={styles.company_title}>
                                        <h3>OOO“Сако ГРИН” Минск</h3>
                                    </div>
                                    <div className={styles.company_item}>
                                        УНП 691775793
                                        <br />
                                        220035, РБ, г.Минск, ул.Игнатенко, д.4, оф.302
                                    </div>
                                    <div className={styles.company_item}>
                                        Р/с BY65PJCB30120358141000000933 в ОАО «Приорбанк», ЦБУ 111
                                        <br />
                                        РБ г. Минск, пр-т Машерова, 40 МФО PJCBBY2X

                                    </div>
                                        {isLoading && !response && <Preloader/>}
                                        {!isLoading && response && response.map(el => {
                                            return (
                                                <div className={styles.company_item}>
                                                    <strong>Адрес</strong>
                                                    <br />
                                                    {el.address}
                                                    <br />
                                                    <strong>Телефоны</strong>
                                                    <br />
                                                    {el.phones.map(el => {
                                                        return (
                                                            <div key={el}>
                                                                {el}
                                                                <br />
                                                            </div>

                                                        )

                                                    })}
                                                    <strong>Почта</strong>
                                                    <br />
                                                    <a href={`mailto:${el.email}`}>trade@sako.by</a>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Contacts