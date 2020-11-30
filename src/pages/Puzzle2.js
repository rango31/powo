import React, { Component } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Crossword from '@jaredreisinger/react-crossword';

class Puzzle2 extends Component {
   

    render() {
        function wow() {
            alert("correct");
        }

        const data = {
            across: {
                1: { clue: 'one of the objectives of the Zimbabwean women`s parliamentary causus is to advocate for legislation on ........ main streaming?', answer: 'gender', row: 0, col: 1 },
                5: { clue: 'In 2017 ....... Was  placed under house arrest?', answer: 'Mugabe', row: 2, col: 2 },
                6: { clue: '270 many members are in the ......... assembly?', answer: 'National', row: 4, col: 6 },
                7: { clue: 'By how many percent did the number of women in decision making position increase in the house of assembly?', answer: 'six', row: 5, col: 2 },
                8: { clue: 'In 2018 32% percent of .......occupied the national assembly seats?', answer: 'women', row: 6, col: 6 },
                9: { clue: 'The parliament is the bicameral legislature of Zimbabwe and is composed of two chambers the .......and the national assembly', answer: 'Senate', row: 7, col: 0 },
                5: { clue: 'In 2017 ....... Was  placed under house arrest?', answer: 'Mugabe', row: 2, col: 2 },
               
            },
            down: {
                2: { clue: 'The president of Zimbabwe.', answer: 'Emmerson', row: 0, col: 2 },
                3: { clue: '80 ....... are there in Zimbabwean parliament  currently ?', answer: 'Sanators', row: 1, col: 7 },
                4: { clue: 'Zimbabwean women’s parliamentary ....... was launched in 2001', answer: 'Caucus', row: 2, col: 0 },
                
               
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
export default Puzzle2;