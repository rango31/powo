import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

class Sidebar extends Component {
    render() {
        return (
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <a href="javascript:void(0);"><i className="fas fa-times" /></a>
                </div>
                {/* offset-sidebar start */}
                <div className="offset-sidebar">
                    <div className="offset-widget offset-logo mb-30">
                        <a href="index.html">
                            <img src="assets/img/logo/header_logo_one.png" alt="logo" />
                        </a>
                    </div>
                    <div className="offset-widget mb-30">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20">Office Address</h4>
                            <p>
                                23/A, Miranda City Likaoli Prikano, Dope
          </p>
                        </div>
                    </div>
                    <div className="offset-widget mb-30">
                        <div className="info-widget">
                            <h4 className="offset-title">Phone Number</h4>
                            <p> +0989 7876 9865 9 </p>
                            <p> +(090) 8765 86543 85 </p>
                        </div>
                    </div>
                    <div className="offset-widget mb-30">
                        <div className="info-widget">
                            <h4 className="offset-title">Email Address</h4>
                            <p> info@example.com </p>
                            <p> example.mail@hum.com </p>
                        </div>
                    </div>
                    <div className="offset-widget mb-30">
                        <div className="instagram">
                            <a href="#">
                                <img src="assets/img/product/thumb/off1.png" alt="cat" />
                            </a>
                            <a href="#">
                                <img src="assets/img/product/thumb/off2.png" alt="cat" />
                            </a>
                            <a href="#">
                                <img src="assets/img/product/thumb/off3.png" alt="cat" />
                            </a>
                            <a href="#">
                                <img src="assets/img/product/thumb/off4.png" alt="cat" />
                            </a>
                            <a href="#">
                                <img src="assets/img/product/thumb/off5.png" alt="cat" />
                            </a>
                            <a href="#">
                                <img src="assets/img/product/thumb/off6.png" alt="cat" />
                            </a>
                        </div>
                    </div>
                    <div className="offset-widget mt-10">
                        <div className="social-widget">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* offset-sidebar end */}
                {/* side-mobile-menu start */}
                <nav className="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        
                        <li><a href="./#/">Home</a></li>
                       
                        <li><a href="./#/share">Share</a></li>
                        
                        <li><a href="./#/about">About</a>
                        </li>
                    </ul>
                </nav>
                {/* side-mobile-menu end */}
            </aside>
        )
    }
}

export default Sidebar;