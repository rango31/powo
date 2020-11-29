import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Home extends Component {


    render() {

        return (
            <div>
             
                <div id="preloader">
                    <div className="preloader">
                        <span />
                        <span />
                    </div>
                </div>
                <Header />
                <Sidebar />
             
               
                <div className="body-overlay" />
                {/* slide-bar end */}
                <main>
                    {/*slider-area start*/}
                    <div className="slider-area pos-rel">
                        <div className="slider-shape-one d-none d-md-block pos-abl"><img src="assets/img/icon/leaf02.png" alt="" /></div>
                        <div className="slider-shape-two d-none d-md-block pos-abl"><img src="assets/img/icon/leaf22.png" alt="" /></div>
                        <div className="slider-active">
                            <div className="single-slider slider-height d-flex align-items-center" style={{ backgroundImage: 'url(assets/img/slider/slider2.jpg)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="slider__content">
                                                <h1 className="mb-60" data-animation="fadeInUp" data-delay=".5s">
                                                    <span className="pl-50">Evergreen</span>
                    Gardening
                  </h1>
                                                <div className="list-item mb-45" data-animation="fadeInUp" data-delay=".6s">
                                                    <a href="#">Make Soils</a>
                                                    <a className="round-border" href="#">Choose Plants</a>
                                                    <a href="#">Growth Gardening</a>
                                                </div>
                                                <ul className="btn-list">
                                                    <li><a className="theme_btn" href="project-details.html" data-animation="fadeInUp" data-delay=".7s">Explore garden</a></li>
                                                    <li><a className="theme_btn border_btn" href="about.html" data-animation="fadeInUp" data-delay=".8s">learn more</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider slider-height d-flex align-items-center" style={{ backgroundImage: 'url(assets/img/slider/slider4.jpg)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="slider__content">
                                                <h1 className="mb-60" data-animation="fadeInUp" data-delay=".5s">
                                                    <span className="pl-50">Evergreen</span>
                    Gardening
                  </h1>
                                                <div className="list-item mb-45" data-animation="fadeInUp" data-delay=".6s">
                                                    <a href="#">Make Soils</a>
                                                    <a className="round-border" href="#">Choose Plants</a>
                                                    <a href="#">Growth Gardening</a>
                                                </div>
                                                <ul className="btn-list">
                                                    <li><a className="theme_btn" href="project-details.html" data-animation="fadeInUp" data-delay=".7s">Explore garden</a></li>
                                                    <li><a className="theme_btn border_btn" href="about.html" data-animation="fadeInUp" data-delay=".8s">learn more</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*slider-area start*/}
                    {/*about-landco start*/}
                    <section className="about-landco pt-130 pb-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about__img mb-40 wow fadeInUp animated" data-wow-delay=".3s">
                                        <img className="img-fluid" src="assets/img/about/about1.png" alt="" />
                                        <div className="about__img__icon">
                                            <i className="flaticon-garden" />
                                        </div>
                                        <div className="about__img__leafimg">
                                            <img src="assets/img/icon/leaf1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about pl-35">
                                        <div className="section-title wow fadeInUp animated" data-wow-delay=".3s">
                                            <span className="left-line mb-15 pl-20">About LandCo</span>
                                            <h2 className="mb-35">Discover LandCo
                  History For Gardening</h2>
                                            <p className="mb-40">Sed perspiciatis unde omnis iste natus error sit voluptatem accusantiu
                                            doloremque laudantium totam rem aperiam, eaque ipsa quae inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                        <div className="about-wrapper">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="about__content mb-30 wow fadeInUp animated" data-wow-delay=".4s">
                                                        <div className="about__content__icon mb-35">
                                                            <img src="assets/img/icon/icon1.png" alt="" />
                                                        </div>
                                                        <h6>Biography Safe</h6>
                                                        <p>Perspicia unde omn iste natus
                                                        voluptatem accusantiu dolorcm
                        laudantium totam rem </p>
                                                        <a href="service.html">read more <i className="fas fa-chevron-double-right" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="about__content mb-30 wow fadeInUp animated" data-wow-delay=".3s">
                                                        <div className="about__content__icon mb-35">
                                                            <img src="assets/img/icon/icon2.png" alt="" />
                                                        </div>
                                                        <h6>Biography Safe</h6>
                                                        <p>Perspicia unde omn iste natus
                                                        voluptatem accusantiu dolorcm
                        laudantium totam rem </p>
                                                        <a href="service-details.html">read more <i className="fas fa-chevron-double-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*about-landco end*/}
                    {/*what-we-do start*/}
                    <section className="what-we-do grey-bg pt-120 pb-100">
                        <img className="position-img d-none d-md-block wow fadeInUp animated" data-wow-delay="0.3s" src="assets/img/service/service1.png" alt="" />
                        <img className="position-img-two d-none d-md-block" src="assets/img/service/service2.png" alt="" />
                        <img className="position-img-three d-none d-md-block" src="assets/img/service/service3.png" alt="" />
                        <img className="position-img-four d-none d-md-block" src="assets/img/service/service4.png" alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 offset-xl-3 offset-lg-2">
                                    <div className="section-title text-center mb-80">
                                        <span className="mb-15">What We Do</span>
                                        <h2 className="mb-30">Exlpore Our Best Offer
                For Gardening</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-1" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Tree Plantations</h5>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem ccusantiu doloremque
                  laudantium totam rem aperiam</p>
                                            <a href="service-2.html">read more <i className="fas fa-chevron-double-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-1" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Gardening Farm</h5>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem ccusantiu doloremque
                  laudantium totam rem aperiam</p>
                                            <a href="service.html">read more <i className="fas fa-chevron-double-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-1" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Nursery Watering</h5>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem ccusantiu doloremque
                  laudantium totam rem aperiam</p>
                                            <a href="service-details.html">read more <i className="fas fa-chevron-double-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="services d-md-flex pt-55 pb-60 pr-60 pl-70 white-bg mb-30">
                                        <div className="services__icon mt-15 mr-35">
                                            <i className="flaticon-growth-1" />
                                        </div>
                                        <div className="services__content">
                                            <h5>Trimming &amp; Pruning</h5>
                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem ccusantiu doloremque
                  laudantium totam rem aperiam</p>
                                            <a href="process.html">read more <i className="fas fa-chevron-double-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*what-we-do end*/}
                    {/*portfolio-area start*/}
                    <section className="portfolio-area pt-125 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3">
                                    <div className="section-title text-center mb-65">
                                        <span className="mb-15">Our Latest Works</span>
                                        <h2 className="mb-30">Our Feature Projects</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="portfolio-menu text-center mb-60">
                                        <button data-filter="*" className="pf_btn active"><i className="far fa-badge-check" /> Show
                All</button>
                                        <button data-filter=".cat1" className="pf_btn"><i className="far fa-axe" /> Trimming</button>
                                        <button data-filter=".cat2" className="pf_btn"><i className="far fa-flower-daffodil" />
                Plantations</button>
                                        <button data-filter=".cat3" className="pf_btn"><i className="far fa-tree" /> Watering</button>
                                        <button data-filter=".cat4" className="pf_btn"><i className="far fa-flower" /> Nursery</button>
                                        <button data-filter=".cat5" className="pf_btn"><i className="far fa-leaf" /> Plants</button>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-row grid">
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat3">
                                    <div className="portfolio mb-30">
                                        <div className="portfolio__thumb pos-rel">
                                            <img className="img-fluid" src="assets/img/feature/feat1.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat1.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat5 cat2">
                                    <div className="portfolio">
                                        <div className="portfolio__thumb pos-rel mb-30">
                                            <img className="img-fluid" src="assets/img/feature/feat2.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat2.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat3 cat4 ">
                                    <div className="portfolio mb-30">
                                        <div className="portfolio__thumb pos-rel">
                                            <img className="img-fluid" src="assets/img/feature/feat3.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat3.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat3 cat5">
                                    <div className="portfolio mb-30">
                                        <div className="portfolio__thumb pos-rel">
                                            <img className="img-fluid" src="assets/img/feature/feat4.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat4.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat5 cat4">
                                    <div className="portfolio mb-30">
                                        <div className="portfolio__thumb pos-rel">
                                            <img className="img-fluid" src="assets/img/feature/feat5.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat5.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4">
                                    <div className="portfolio mb-30">
                                        <div className="portfolio__thumb pos-rel">
                                            <img className="img-fluid" src="assets/img/feature/feat6.jpg" alt="" />
                                        </div>
                                        <div className="portfolio__text pos-abl text-center">
                                            <div className="portfolio__icon mb-20">
                                                <a className="popup-image" href="assets/img/feature/feat6.jpg"><i className="far fa-arrow-right" /></a>
                                            </div>
                                            <h3><a href="project-details.html">Tree Plantations</a></h3>
                                            <p>Quis autem vel eum iure reprehenderit qui
                  voluptate velit esse quam nihil</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*portfolio-area end*/}
                    {/*counter-area start*/}
                    <section className="counter-area green-bg pt-100 pb-90">
                        <div className="shape-one">
                            <img className="counte-rimg d-none d-md-block" src="assets/img/icon/leaf3.png" alt="" />
                        </div>
                        <div className="shape-two">
                            <img className="counte-rimg-two" src="assets/img/icon/leaf4.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="counter__box text-center mb-30">
                                        <h1 className="mb-20"><span className="counter">35</span></h1>
                                        <h3 className="mb-15">Years Experience</h3>
                                        <p>Professional Gardening</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="counter__box text-center mb-30">
                                        <h1 className="mb-20"><span className="counter">8</span>k</h1>
                                        <h3 className="mb-15">Satisfied People</h3>
                                        <p>Professional Gardening</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="counter__box text-center mb-30">
                                        <h1 className="mb-20"><span className="counter">26</span></h1>
                                        <h3 className="mb-15">Expert Members</h3>
                                        <p>Professional Gardening</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="counter__box text-center mb-30">
                                        <h1 className="mb-20"><span className="counter">55</span></h1>
                                        <h3 className="mb-15">Awards Winning</h3>
                                        <p>Professional Gardening</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*counter-area end*/}
                    {/*chose-us-area start*/}
                    <section className="chose-us-area pos-rel grey-bg pt-125 pb-60">
                        <div className="video pos-abl" style={{ backgroundImage: 'url(assets/img/bg/video-bg1.jpg)' }}>
                            <div className="video__icon pos-abl">
                                <a href="https://www.youtube.com/watch?v=LTXD6XZXc3U" className="popup-video video-play"><i className="fas fa-play" /></a>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-12 offset-xl-6 offset-lg-6 col-12">
                                    <div className="provide-wrapper pl-110 pr-180">
                                        <div className="section-title mb-60">
                                            <span className="left-line mb-15 pl-20">Why Choose Us</span>
                                            <h2 className="mb-30">We Are Different From
                  Other To Provide Services</h2>
                                            <p className="mb-40">But I must explain to you how all this mistaken idea of denouncing
                                            pleasure and praising pain was born and I will give you a complete account of the
                                            system, and expound the actual teachings of the great explorer of the truth, the
                                            master-builder of huhappiness. No one rejects, dislikes, or avoids pleasure itself,
                  because it is pleasue</p>
                                        </div>
                                        <div className="provide mb-40 pr-10">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="provide__content text-center white-bg mb-30">
                                                        <div className="provide__content--icon">
                                                            <i className="flaticon-growth" />
                                                        </div>
                                                        <h6 className="mb-15">We Are Professional
                        And Experts</h6>
                                                        <p>Quis autem vel eum iure prehenderit quein eavoluptate velit esse quam
                        molestiae </p>
                                                        <a href="#">read more <i className="fas fa-chevron-double-right" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="provide__content text-center white-bg mb-30">
                                                        <div className="provide__content--icon">
                                                            <i className="flaticon-watering-can-1" />
                                                        </div>
                                                        <h6 className="mb-15">We Love Takes Your
                        Challenge</h6>
                                                        <p>Quis autem vel eum iure prehenderit quein eavoluptate velit esse quam
                        molestiae </p>
                                                        <a href="#">read more <i className="fas fa-chevron-double-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*chose-us-area end*/}
                    {/*work-process-area start*/}
                    <section className="work-process-area pt-120 pb-95">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3">
                                    <div className="section-title text-center">
                                        <div className="section-title text-center mb-80">
                                            <span className="mb-15">Our Working Process</span>
                                            <h2 className="mb-30">How Does We Works</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="process text-center pos-rel mb-30 pr-150">
                                        <div className="process__icon pr-icon pos-rel mb-25">
                                            <img src="assets/img/icon/icon5.png" alt="" />
                                            <div className="process__icon--number pos-abl">01</div>
                                        </div>
                                        <div className="process__text">
                                            <h5>Introduce About
                  Gardening</h5>
                                            <p>Quis autem eum repreh enderit
                  volup velit esse molestiae</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="process text-center mb-30 pl-70 pr-70">
                                        <div className="process__icon pr-icon pos-rel mb-25">
                                            <img src="assets/img/icon/icon6.png" alt="" />
                                            <div className="process__icon--number pos-abl">02</div>
                                        </div>
                                        <div className="process__text">
                                            <h5>Introduce About
                  Gardening</h5>
                                            <p>Quis autem eum repreh enderit
                  volup velit esse molestiae</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="process text-center mb-30 pl-150">
                                        <div className="process__icon pos-rel mb-25">
                                            <img src="assets/img/icon/icon7.png" alt="" />
                                            <div className="process__icon--number pos-abl">03</div>
                                        </div>
                                        <div className="process__text">
                                            <h5>Introduce About
                  Gardening</h5>
                                            <p>Quis autem eum repreh enderit
                  volup velit esse molestiae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*work-process-area end*/}
                    {/*testimonial-area start*/}
                    <section className="testimonial-area grey-bg pos-rel pt-120 pb-130">
                        <div className="shape-one"><img src="assets/img/testimonial/leaf6.png" alt="" /></div>
                        <div className="shape-two"><img className="pot-img" src="assets/img/testimonial/pot.png" alt="" /></div>
                        <div className="shape-three"><img src="assets/img/testimonial/leaf7.png" alt="" /></div>
                        <div className="shape-four"><img className="axe-img" src="assets/img/testimonial/axe.png" alt="" /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3">
                                    <div className="section-title text-center mb-70">
                                        <span className="mb-15">Clients Testimonials</span>
                                        <h2 className="mb-30">What People’s Say</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-active">
                                <div className="testimonial pt-70 pr-45 mb-100">
                                    <div className="testimonial__content d-md-flex align-items-center">
                                        <div className="testimonial__content--img pos-rel mr-30 pl-30 mb-30">
                                            <img src="assets/img/testimonial/testimonial1.png" alt="" />
                                        </div>
                                        <div className="testimonial__content--text">
                                            <h5>But must explain to you how
                                            this mistaken idea enouncing pleasure &amp; praising pain was born &amp; will give complete
                </h5>
                                            <div className="clien-name">
                                                <h6>Michel Zekolin Doe</h6>
                                                <span className="pos-rel pl-30">Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial pt-70 pr-45 mb-100">
                                    <div className="testimonial__content d-md-flex align-items-center">
                                        <div className="testimonial__content--img pos-rel mr-30 pl-30 mb-30">
                                            <img src="assets/img/testimonial/testimonial2.png" alt="" />
                                        </div>
                                        <div className="testimonial__content--text">
                                            <h5>But must explain to you how
                                            this mistaken idea enouncing pleasure &amp; praising pain was born &amp; will give complete
                </h5>
                                            <div className="clien-name">
                                                <h6>Michel Zekolin Doe</h6>
                                                <span className="pos-rel pl-30">Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial pt-70 pr-45 mb-100">
                                    <div className="testimonial__content d-md-flex align-items-center">
                                        <div className="testimonial__content--img pos-rel mr-30 pl-30 mb-30">
                                            <img src="assets/img/testimonial/testimonial1.png" alt="" />
                                        </div>
                                        <div className="testimonial__content--text">
                                            <h5>But must explain to you how
                                            this mistaken idea enouncing pleasure &amp; praising pain was born &amp; will give complete
                </h5>
                                            <div className="clien-name">
                                                <h6>Michel Zekolin Doe</h6>
                                                <span className="pos-rel pl-30">Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial pt-70 pr-45 mb-100">
                                    <div className="testimonial__content d-md-flex align-items-center">
                                        <div className="testimonial__content--img pos-rel mr-30 pl-30 mb-30">
                                            <img src="assets/img/testimonial/testimonial2.png" alt="" />
                                        </div>
                                        <div className="testimonial__content--text">
                                            <h5>But must explain to you how
                                            this mistaken idea enouncing pleasure &amp; praising pain was born &amp; will give complete
                </h5>
                                            <div className="clien-name">
                                                <h6>Michel Zekolin Doe</h6>
                                                <span className="pos-rel pl-30">Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*testimonial-area end*/}
                    {/*blog-area start*/}
                    <section className="blog-area pt-125 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2">
                                    <div className="section-title text-center mb-110">
                                        <span className="mb-15">Latest News &amp; Blog</span>
                                        <h2 className="mb-30">Popular Articles And Tips</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="blog mb-30">
                                        <div className="blog__content--thumb pos-rel mb-25">
                                            <img src="assets/img/blog/blog1.jpg" alt="" />
                                        </div>
                                        <div className="blog__content">
                                            <div className="blog__content--catagory mb-10">
                                                <a className="pos-rel" href="#">Gardening</a>
                                                <a href="#">Nursery</a>
                                            </div>
                                            <h5><a className="pr-50 mb-10" href="#">What Should You Do When A Web Design Trend Becomes
                    Too Popular</a></h5>
                                            <div className="blog__content--meta mb-40">
                                                <a href="#"><i className="far fa-user-circle" /> By Michel Doe</a>
                                                <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                                <a href="#"><i className="far fa-comment-alt-dots" /> Comments (05)</a>
                                            </div>
                                            <a href="blog-details.html" className="theme_btn theme_btn2">read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="blog pt-20 mb-30">
                                        <div className="blog__content d-md-flex align-items-center">
                                            <div className="blog__content--img pos-rel mr-30 pl-20">
                                                <img src="assets/img/blog/blog2.jpg" alt="" />
                                            </div>
                                            <div className="blog__content">
                                                <div className="blog__content--catagory mb-10">
                                                    <a className="pos-rel" href="gallery-grid.html">Gardening</a>
                                                    <a href="blog-details.html">Nursery</a>
                                                </div>
                                                <h5 className="mb-20"><a href="#">Stay Creative Stay Inspire
                      Wallpapers Edition</a></h5>
                                                <div className="blog__content--meta meta-two mb-15">
                                                    <a href="#"><i className="far fa-user-circle" /> By Michel Doe</a>
                                                    <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                                </div>
                                                <a className="more-btn" href="blog-details.html">read more <i className="fas fa-chevron-double-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog pt-20 mb-30">
                                        <div className="blog__content d-md-flex align-items-center">
                                            <div className="blog__content--img pos-rel mr-30 pl-20">
                                                <img src="assets/img/blog/blog3.jpg" alt="" />
                                            </div>
                                            <div className="blog__content">
                                                <div className="blog__content--catagory mb-10">
                                                    <a className="pos-rel" href="blog-details.html">Gardening</a>
                                                    <a href="project-details.html">Nursery</a>
                                                </div>
                                                <h5 className="mb-20"><a href="#">Stay Creative Stay Inspire
                      Wallpapers Edition</a></h5>
                                                <div className="blog__content--meta meta-two mb-15">
                                                    <a href="#"><i className="far fa-user-circle" /> By Michel Doe</a>
                                                    <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                                </div>
                                                <a className="more-btn" href="blog-details.html">read more <i className="fas fa-chevron-double-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog pt-20 mb-30">
                                        <div className="blog__content d-md-flex align-items-center">
                                            <div className="blog__content--img pos-rel mr-30 pl-20">
                                                <img src="assets/img/blog/blog4.jpg" alt="" />
                                            </div>
                                            <div className="blog__content">
                                                <div className="blog__content--catagory mb-10">
                                                    <a className="pos-rel" href="gallery-2-column.html">Gardening</a>
                                                    <a href="gallery-full.html">Nursery</a>
                                                </div>
                                                <h5 className="mb-20"><a href="#">Stay Creative Stay Inspire
                      Wallpapers Edition</a></h5>
                                                <div className="blog__content--meta meta-two mb-15">
                                                    <a href="#"><i className="far fa-user-circle" /> By Michel Doe</a>
                                                    <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                                </div>
                                                <a className="more-btn" href="blog-details.html">read more <i className="fas fa-chevron-double-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*blog-area end*/}
                    {/*partner-area start*/}
                    <section className="partner-area pb-130">
                        <div className="partner-bg pos-rel pt-125 pb-100">
                            <div className="p-shape-one pos-abl"><img src="assets/img/brand/leaf8.png" alt="" /></div>
                            <div className="p-shape-two pos-abl"><img src="assets/img/brand/leaf9.png" alt="" /></div>
                            <div className="p-shape-three pos-abl"><img src="assets/img/brand/leaf10.png" alt="" /></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2">
                                        <div className="section-title text-center mb-70">
                                            <span className="mb-15">Our Global Partners</span>
                                            <h2 className="mb-30">We Are Globally Trusted</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="partner-active">
                                            <div className="partner mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand3.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand4.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand5.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand6.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="partner text-center mb-30">
                                                <a href="#" className="partner__img">
                                                    <img src="assets/img/brand/brand3.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*partner-area end*/}
                </main>
                {/*footer-area start*/}
                <footer className="footer-area pos-rel green-bg pt-125">
                    <div className="fot-shape pos-abl">
                        <img src="assets/img/icon/leaf11.png" alt="" />
                    </div>
                    <div className="fot-shape-two pos-abl">
                        <img src="assets/img/icon/leaf12.png" alt="" />
                    </div>
                    <a href="#top-menu" className="scroll-target"><i className="far fa-angle-up" /></a>
                    {/*scroll-target-btn*/}
                    <div className="container">
                        <div className="row border-bottom1 pb-40">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget mb-30">
                                    <a href="#" className="footer-logo mb-25">
                                        <img src="assets/img/logo/foter-logo1.png" alt="" />
                                    </a>
                                    <p>Sed perspiciatis unde omnis iste natus
              error sit voluptatem accusant</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget mb-30">
                                    <h5 className="mb-20">Phone Number</h5>
                                    <p>Unde omnis iste natus voluptatem
              mque laudantium totam</p>
                                    <a className="call" href="#"><i className="fas fa-phone" /> +012 (345) 678</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget mb-30">
                                    <h5 className="mb-20">Phone Number</h5>
                                    <p>Unde omnis iste natus voluptatem
              mque laudantium totam</p>
                                    <a className="call" href="#"><i className="fas fa-phone" /> support@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget mb-30">
                                    <h5 className="mb-20">Phone Number</h5>
                                    <p>Unde omnis iste natus voluptatem
              mque laudantium totam</p>
                                    <a className="call" href="#"><i className="fas fa-phone" /> 205 Main Road, B - Block, USA</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-75 mb-50">
                            <div className="col-xl-2 col-lg-2 col-md-6">
                                <div className="footer__widget mb-30">
                                    <h5 className="mb-20">Comapny</h5>
                                    <ul className="fot-list">
                                        <li><a className="active" href="#"><i className="fas fa-long-arrow-right" /> Ordering Info</a>
                                        </li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Shipping &amp; Delivery</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Our Guarantee</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget pl-40 mb-30">
                                    <h5 className="mb-20">Quick Links</h5>
                                    <ul className="fot-list">
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Garden Management</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Nursery/Tree Farm</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Trimming &amp; Pruning</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Pests &amp; Weeds Control</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-right" /> Fruits &amp; Flowers Garden</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer__widget pl-15 mb-30">
                                    <h5 className="mb-20">Comapny</h5>
                                    <div className="blogs mb-10 d-flex align-items-center">
                                        <div className="bolgs__thumb__three mr-15">
                                            <img src="assets/img/blog/blog5.jpg" alt="" />
                                        </div>
                                        <div className="blogs__content">
                                            <h6><a href="#">Visual Design Language The Building Blocks</a></h6>
                                            <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                        </div>
                                    </div>
                                    <div className="blogs d-flex align-items-center">
                                        <div className="bolgs__thumb__three mr-15">
                                            <img src="assets/img/blog/blog6.jpg" alt="" />
                                        </div>
                                        <div className="blogs__content">
                                            <h6><a href="#">Visual Design Language The Building Blocks</a></h6>
                                            <a href="#"><i className="far fa-calendar-alt" /> 30 DEC 2020</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-6">
                                <div className="footer__widget mb-30">
                                    <div className="subscribe-input pl-70">
                                        <h5 className="mb-20">Newsletters</h5>
                                        <p className={15}>Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium</p>
                                        <div className="footer__subscribe pos-rel mt-10">
                                            <input type="text" className="form-control" placeholder="Enter Your Email" />
                                            <span className="input-text"><i className="fal fa-long-arrow-right" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="copyright text-center green-soft-bg pt-30 pb-10">
                                    <p>© Copyright 2020 <a href="#">LandCo</a>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*footer-area end*/}
                {/* JS here */}
            </div>

        );
    }
}
export default Home;