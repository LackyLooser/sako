import React from 'react'
import styles from './contacts.module.sass'
const Contacts = () =>{
    return(
        <section class={styles.contacts}>
        <div class="container">
            <div class={styles.contacts_content}>
                <div class={styles.title}>
                    <h2>Контакты</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class={styles.contacts_container}>
                            <div class={styles.contacts_element}>
                                <div class={styles.company_title}>
                                    <h3>OOO“Сако ГРИН” Минск</h3>
                                </div>
                                <div class={styles.company_item}>
                                    УНП 691775793
                                    <br/>
                                    220035, РБ, г.Минск, ул.Игнатенко, д.4, оф.302
                                </div>
                                <div class={styles.company_item}>
                                    Р/с BY65PJCB30120358141000000933 в ОАО «Приорбанк», ЦБУ 111
                                    <br/>
                                    РБ г. Минск, пр-т Машерова, 40 МФО PJCBBY2X

                                </div>
                                <div class={styles.company_item}>
                                    <p>
                                        <strong>Адрес</strong>
                                        <br/>
                                        220035, РБ, г.Минск, ул.Игнатенко, д.4, оф.302
                                        <br/>
                                        <strong>Телефоны</strong>
                                        <br/>
                                        +375(25) 688-40-44 Минск
                                        <br/>
                                        8-017-356-98-03  Минск
                                        <br/>
                                        <strong>Почта</strong>
                                        <br/>
                                        <a href="mailto:trade@sako.by">trade@sako.by</a>
                                    </p>
                                </div>
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