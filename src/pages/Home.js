import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class Home extends Component {
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
                                        <img className="img-fluid" src="assets/img/raise.jpg" alt="" />
                                        <div className="about__img__icon">
                                            <i className="flaticon-crossword" />
                                            <img src="assets/img/crossword.svg" style={{ height:"125px" }} alt="" />
                                        </div>
                                        <div className="about__img__leafimg">
                                            <img src="assets/img/icon/leaf1.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 d-none d-lg-block">
                                    <div className="about pl-35">
                                        <div className="section-title wow fadeInUp animated" data-wow-delay=".3s">
                                            <span className="left-line mb-15 pl-20">About POWO</span>
                                            <h2 className="mb-35">Empowering women into politics</h2>
                                           
                                        </div>
                                        <div className="about-wrapper">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="about__content mb-30 wow fadeInUp animated" data-wow-delay=".4s">
                                                        <div className="about__content__icon mb-35">
                                                            <img src="assets/img/icon/icon1.png" alt="" />
                                                        </div>
                                                        <h6>Education</h6>
                                                        <p>Perspicia unde omn iste natus
                                                        voluptatem accusantiu dolorcm
                        laudantium totam rem </p>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="about__content mb-30 wow fadeInUp animated" data-wow-delay=".3s">
                                                        <div className="about__content__icon mb-35">
                                                            <img src="assets/img/icon/icon2.png" alt="" />
                                                        </div>
                                                        <h6>Awareness</h6>
                                                        <p>Perspicia unde omn iste natus
                                                        voluptatem accusantiu dolorcm
                        laudantium totam rem </p>
                                                             </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="process text-center pos-rel mb-30 pr-150">
                                        <a href="./#/puzzles">
                                            <div className="process__icon pr-icon pos-rel mb-25">
                                                <img src="assets/img/4.svg" style={{ height: "125px", boxShadow: "1px 1px 5px green", borderRadius:"10px" }} alt="" />
                                                <div className="process__icon--number pos-abl">01</div>
                                            </div>
                                            <div className="process__text">
                                                <h5>Level 1<hr/></h5>
                                                    
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                    <div className="process text-center mb-30 pl-70 pr-70">
                                        <a href="./#/cs">
                                            <div className="process__icon pr-icon pos-rel mb-25">
                                                <img src="assets/img/2.svg" style={{ height: "125px", boxShadow: "1px 1px 5px green", borderRadius: "10px" }} alt="" />
                                                <div className="process__icon--number pos-abl">02</div>
                                            </div>
                                            <div className="process__text">
                                                <h5>Level 2<hr /></h5>
                                            </div>
                                        </a>
                                        </div>
                                   
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="process text-center mb-30 pl-150">
                                        <a href="./#/cs">
                                            <div className="process__icon pos-rel mb-25">
                                                <img src="assets/img/3.svg" style={{ height: "125px", boxShadow: "1px 1px 5px green", borderRadius: "10px" }} alt="" />
                                                <div className="process__icon--number pos-abl">03</div>
                                            </div>
                                            <div className="process__text">
                                                <h5>Level 3<hr /></h5>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </section>
                 
                </main>
              
            </div>

        );
    }
}
export default Home;