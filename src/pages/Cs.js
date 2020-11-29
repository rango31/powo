import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class Cs extends Component {
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
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about__img mb-40 wow fadeInUp animated" data-wow-delay=".3s">
                                        <img className="img-fluid" src="assets/img/rais.jpg" alt="" />
                                        <div className="about__img__icon">
                                            <i className="flaticon-crossword" />
                                            <img src="assets/img/crossword.svg" style={{ height:"125px" }} alt="" />
                                        </div>
                                        <div className="about__img__leafimg">
                                            <img src="assets/img/icon/leaf1.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about pl-35">
                                        <div className="section-title wow fadeInUp animated" data-wow-delay=".3s">
                                            <span className="left-line mb-15 pl-20">Coming Soon</span>
                                            <h2 className="mb-35">We are working towards adding new puzzles.</h2>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="row">

                                   
                                </div>
                            </div>
                        </div>
                    </section>
                 
                </main>
              
            </div>

        );
    }
}
export default Cs;