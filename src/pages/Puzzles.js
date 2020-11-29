import React, { Component } from 'react';
import $ from "jquery";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


class Puzzles extends Component {

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
                                    <a href="./#/puzzle">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-2" />
                                            <img src="assets/img/crossword.svg" style={{ height: "125px" }} alt="" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Local Governance</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <a href="./#/puzzle2">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-2" />
                                            <img src="assets/img/crossword.svg" style={{ height: "125px" }} alt="" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Provincial Governance</h5>
                                          
                                               </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <a href="./#/puzzle3">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-2" />
                                            <img src="assets/img/crossword.svg" style={{ height: "125px" }} alt="" />
                                        </div>
                                        <div className="services__content">
                                            <h5>National Governance</h5>
                                            
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                </div>
                        </div>
                    </section>
                  
                  
                  
                </main>
              
            </div>

        );
    }
}
export default Puzzles;