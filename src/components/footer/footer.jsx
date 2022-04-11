import React from 'react'
import styles from './footer.module.sass'
const Footer = () => {
    
    return (
        <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 pl-0 pr-0">
                            <div className={styles.footer_open}>
                                <div>
                                    Режим работы офиса:<br/>
                                    ПН-ПТ: 9.00-17.00<br/>
                                    СБ-ВС: выходной<br/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 pl-0 pr-0">
                            <div className={styles.footer_mail}>
                                <a href="mailto:trade@sako.by">
                                    <i className="fas fa-envelope-open"></i>
                                    <br/>
                                    trade@sako.by
                                </a>
                            </div>
                        </div>   
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 pl-0 pr-0">
                            <div className={styles.footer_middle}>
                                <div className={styles.footer_middle_phone}>
                                    <a href="tel:+375173569803">Тел./факс 8-017-356-98-03</a>
                                    <a href="tel:+375296884044">моб. 8-029-688-40-44</a>
                                    <a href="tel:+375296884048">моб. 8-029-688-40-48</a>
                                </div>
                                <div className={styles.footer_middle_address}>
                                    <div>
                                        Беларусь, г.Минск,<br/> ул.Игнатенко, д.4, пом.302.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}
export default Footer