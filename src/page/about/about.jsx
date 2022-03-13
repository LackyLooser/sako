import React, {useEffect} from 'react'
import styles from './about.module.sass'
import useFetch from '../../components/hooks/useFetch'
import Preloader from '../../components/preloader/preloader'
const About = () =>{
    const [{response,isLoading},doFetch] =useFetch (`about/`)
    useEffect(()=>{
        doFetch()
        
    },[])
    
    return(
        <section className={styles.about}>
        <div className={styles.container}>
            <div className={styles.about_content}>
                <div className={styles.title}>
                    <h2>О нас</h2>
                </div>
                {isLoading && <Preloader/>}
                {!isLoading && response && response.map(el =>{
                    return (
                        <div className={styles.about_text} key={el.id}>
                        <p>{el.text}</p>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    </section>
    )
}
export default About