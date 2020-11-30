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
                                        <img className="img-fluid" src="assets/img/super.jpg" alt="" />
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
                                            <span className="left-line mb-15 pl-20">About POWO</span>
                                            <h2 className="mb-35">Discover PowO : Empowering women into politcs</h2>
                                            <p className="mb-40"> As women in tech we face challenges working our way up in the technical field due to different reasons. Women’s participation in government at all levels, from the local to the national, remains extremely low. As a way to be able to empower women in politics and give them the knowledge they need we have developed POWO crossword which is going to be a guide on what to focus on to be able to go up the ladder.</p>
                                            <h6>How is POWO guiding?</h6> 
            <ol>
  <li>The questions for the crosswords will test their knowledge from every angle thus, local politics and international politics</li>
  <li>POWO will test and improve the players research skills this is because some questions will leave the player wondering the story behind the queston.</li>
  <li>The players will be practicing mind games as they say ..POLITICS IS MIND GAME, WHO PLAYED WELL IS WINNER.. by Muskan Agrawal</li>
</ol>
             <h6>Why POWO?</h6> 
            <p>From the survey we noticed the young generaton is spending more time on social media and on their cellphones as a way of learning or just relaxing therefore making this crossword is to get the attection of a lot of youths whilest they scroll through their social media pages our site can be shared as a link. The transition to start playing the game is not hard since this is a web application hence no frastration of leaving your social media page to go to download the application somewhere.</p>
            <p>Lastly with POWO you can measure your knowledge because we added the different levels from easy to hard hence the player will be able to see if they are now well equiped to start or proceed with their journey as politicians.</p>
            
            <br><p>If this trial works we aim to add a chart section so that fellow women can commmunicate and get mentorship from all over the world</p>
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
export default Home;
