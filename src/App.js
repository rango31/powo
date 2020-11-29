import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import $ from "jquery";
import {
    BrowserRouter as Router,
    Route,
    Switch,
	Link,
	HashRouter,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Puzzle from './pages/Puzzle';
import Puzzle2 from './pages/Puzzle2';
import Puzzle3 from './pages/Puzzle3';
import Puzzles from './pages/Puzzles';
import Share from './pages/Share';
import About from './pages/About';
import Cs from './pages/Cs';


class App extends Component {
    componentDidMount(){

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
			<HashRouter basename="/powo" history={createBrowserHistory} >
                <Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/puzzle" component={Puzzle2} />
					<Route exact path="/puzzle3" component={Puzzle} />
					<Route exact path="/puzzle2" component={Puzzle3} />
					<Route exact path="/puzzles" component={Puzzles} />
					<Route exact path="/share" component={Share} />
					<Route exact path="/about" component={About} />
					<Route exact path="/cs" component={Cs} />
                </Switch>
            </HashRouter>

        );

    };
}

export default App;
