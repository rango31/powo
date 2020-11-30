import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Crossword from '@jaredreisinger/react-crossword';

class Puzzle3 extends Component {


    render() {
        function wow() {
            alert("correct");
        }

        const data = {
            across: {
                3: { clue: ' Type of stigma mostly faced by female politicians in Zimbabwe.', answer: 'gender', row: 3, col: 1 },
                4: { clue: 'The ongoing process aimed at personal empowerment and strengthening woman parliamentarians capacity to engender parliamentary business though understanding how parliament works is known as ....... Building.', answer: 'Capacity', row: 5, col: 0 },
                6: { clue: 'First female chief justice of the supreme court of Zimbabwe is Elizabeth ........?', answer: 'Gwanzura', row: 7, col: 6 },
                

            },
            down: {
                1: { clue: 'The legal system of Zimbabwe is based on Roman Dutch law and at the top of the court rooms is the ....... court.', answer: 'Constinutional', row: 0, col: 11 },
                2: { clue: 'The.......plan document is successfully crafted to guide the operations of the caucus for the following three years.', answer: 'Strategic', row: 1, col: 6 },
                5: { clue: 'The Zimbabwean women’s parliamentary caucus was launched in October 2001 in response to the ...... Parliamentary forum initiative.', answer: 'sadc', row: 6, col: 8 },
                7: { clue: 'Former woman of the parliament are referred to as ........ member.', answer: 'Associate', row: 7, col: 13 },


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
export default Puzzle3;