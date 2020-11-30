import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Crossword from '@jaredreisinger/react-crossword';

class Puzzle extends Component {
    

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

        function wow() {
            alert("correct");
        }

        const data = {
            across: {
                3: { clue: 'When 2 political parties with similar interests join together this is known as a ..........................', answer: 'COALITION', row: 3, col: 0 },
                5: { clue: "Maintaining Australia's ........................ force is an important ideal for the National Party", answer: 'DEFENCE', row: 5, col: 4 },
                6: { clue: 'the Liberal Party promotes ..................... enterprise', answer: 'FREE', row: 6, col: 1 },
                7: { clue: 'Political Party which upholds family values', answer: 'NATIONAL', row: 9, col: 4 },
                9: { clue: 'Political Party formed in 1944', answer: 'LIBERAL', row: 11, col: 1 },
               
            },
            down: {
                1: { clue: '............................... distrubution of wealth and income is an important tenet of the Austalian Labor Party', answer: 'EQUAL', row: 0, col: 2 },
                2: { clue: 'Political Party which is mostly concerned with caring for the environment', answer: 'GREENS', row: 2, col: 10 },
                4: { clue: 'This person may be elected to parliament, but they do not belong to a political party', answer: 'INDEPENDANT', row: 3, col: 4 },
                8: { clue: 'improving living standards is an important goal of the Liberal Party', answer: 'LIVING', row: 9, col: 11 },
                10: { clue: 'Oldest Political Party in Australia', answer: 'ALP', row: 11, col: 6 },
               
            },
        };
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
                
                                <a href="#top-menu" className="scroll-target"><i className="far fa-angle-left" /></a>
                
                                <Crossword
                                    data={data}
                                    onCorrect={wow}
                   
                                    theme={{
                                        columnBreakpoint: '9999px',
                                        gridBackground: '#acf',
                                        cellBackground: 'grey',
                                        cellBorder: '#fca',
                                        textColor: '#fff',
                                        numberColor: '#9f9',
                                        focusBackground: '#f00',
                                        highlightBackground: '#f99',
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                </main>
               
               
            </div>

        );
    }
}
export default Puzzle;