import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton, TwitterShareButton, TwitterIcon } from "react-share";

class Share extends Component {

    componentDidMount() {
        $(window).on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({ 'overflow': 'visible' });
        });

        //$('#mobile-menu-active').metisMenu();

        $('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
            e.preventDefault();
        });

        $(".hamburger-menu > a").on("click", function (e) {
            e.preventDefault();
            $(".slide-bar").toggleClass("show");
            $("body").addClass("on-side");
            $('.body-overlay').addClass('active');
            $(this).addClass('active');
        });

        $(".close-mobile-menu > a").on("click", function (e) {
            e.preventDefault();
            $(".slide-bar").removeClass("show");
            $("body").removeClass("on-side");
            $('.body-overlay').removeClass('active');
            $('.hamburger-menu > a').removeClass('active');
        });
    }
    render() {

        return (
            <div>
             
                
                <Header />
                <Sidebar />
             
               
                <div className="body-overlay" />
                {/* slide-bar end */}
                <main>
                 
                    <section className="about-landco  pb-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <FacebookShareButton
                                        url={"https://rango31.github.io/powo/#/"}
                                        quote={"POWO - POWER WOMEN / POLITAL WOMEN"}
                                        hashtag="#powo"
                                        round="true"
                                        className="form-control">
                                     
                                        <FacebookIcon size={64} />
                                    </FacebookShareButton>
                                    
                                    <hr/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <WhatsappShareButton
                                        url={"https://rango31.github.io/powo/#/"}
                                        className="form-control"
                                        round="true"
                                    >
                                        
                                        <WhatsappIcon size={64} />
                                    </WhatsappShareButton>
                                    <hr />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <TwitterShareButton
                                        url={"https://rango31.github.io/powo/#/"}
                                        className="form-control"
                                        round="true"
                                    >

                                        <TwitterIcon size={64} />
                                    </TwitterShareButton>
                                    <hr />
                                </div>
                                
                                
                                </div>
                        </div>
                    </section>
                  
                  
                  
                </main>
              
            </div>

        );
    }
}
export default Share;