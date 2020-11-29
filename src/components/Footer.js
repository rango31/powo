import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area pos-rel green-bg pt-125" style={{ marginTop: "-175px", marginBottom:"0px" }}>
                <a href="#top-menu" className="scroll-target"><i className="far fa-angle-up" /></a>
                
        
            </footer>
        )
    }
}

export default Footer;