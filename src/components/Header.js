import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

class Header extends Component {
    render() {
        return (

            <header id="top-menu">
                <div className="header-top-area grey-bg pt-15 pb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-2">
                                <div className="headers">
                                    <div className="headers__icon">
                                        <i className="far fa-flag" />
                                        <a href="#"> Newbie </a>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-7">
                                <div className="info text-center d-none d-md-block">
                                    <ul className="info__list">
                                        <li><a href="#"></a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="shoping text-right">
                                    <div className="shoping__cart">
                                        <a href="#"><i className="fas fa-shopping-basket" /> 0</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-area">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="logo pl-55">
                                    <a href="index.html"><img src="assets/img/logo/header_logo_one.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                                <div className="main-menu ml-30 d-none d-lg-block text-center">
                                    <nav>
                                        <ul>
                                            
                                            <li><a href="./#/">Home</a></li>
                                           
                                            <li><a href="./#/share">Share</a></li>
                                            <li><a href="./#/about">About</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-1 col-md-4 col-6 text-right">
                                <div className="hamburger-menu d-block d-xl-none pr-55">
                                    <a href="javascript:void(0);">
                                        <i className="far fa-bars" />
                                    </a>
                                </div>
                                <div className="side-nav d-none d-xl-block pr-55">
                                    <a className="theme_btn" href="#">Play</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;