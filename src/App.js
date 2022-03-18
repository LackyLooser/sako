import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Home from './page/home/home'
import styles from './App.module.sass'
import About from "./page/about/about";
import Contacts from "./page/contacts/contacts";
import Catalog from "./page/catalog/catalog";
import Product from "./page/catalog/product/product";

const App = () => {
    $(document).ready(function(){
        $(function (){    
        $("#back-top").hide();
      
        $(window).scroll(function (){
          if ($(this).scrollTop() > 500){
            $("#back-top").fadeIn();
          } else{
            $("#back-top").fadeOut();
          }
        });
        
        $("#back-top a").click(function (){
          $("body,html").animate({
            scrollTop:0
          }, 800);
          return false;
        });
      });    
    });
    return (
        <>
            <Router>
                <Header/>
                <Nav/>
                <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/catalog' element={<Catalog/>}/>
                  <Route path='/catalog/:slug' element={<Catalog/>}/>
                  <Route path='/catalog/product/:id' element={<Product/>}/>
                  <Route path='/catalog/:slug/:id' element={<Catalog/>}/>
                </Routes>
            <Footer/>
            <p id="back-top">
                <a href="#top" className={styles.scrollToTop}><i className="fas fa-chevron-up"></i></a>
            </p>
            </Router>
        </>
    );
}

export default App;
