/**
 * This is your JavaScript application's entry-point.
 *
 * Webpack will look into this file to find references to
 * other source files.
 */
/**
 * @module jQuery
 */
import $ from 'jquery';

/**
 * @module Popper.js
 */
import 'popper.js';

/**
 * @module Bootstrap
 */
import 'bootstrap';
import 'slick-carousel';

/**
 * @module FontAwesome5
 */
// import '../libs/fontawesome/js/all';

/**
 * @module MBD + datatables addon
 */
import '../vendors/mdb/js/mdb';
import '../vendors/mdb/js/addons/datatables';

// Load our example file
import './example';

import slide2 from '../img/main-slider/slide-1.jpg';
import slide1 from '../img/main-slider/desktop-slide-1.jpg';
import logo from '../img/main-slider/mobile-slide-1.jpg';
import eventsSlide1 from '../img/events-slider/slide-1.jpg';
import eventsSlide2 from '../img/events-slider/slide-2.jpg';


$('#main-slide-1').css('background-image', `url(${slide1})`);
$('#main-slide-2').css('background-image', `url(${slide2})`);
$('#events-1').css('background-image', `url(${eventsSlide1})`);
$('#events-2').css('background-image', `url(${eventsSlide2})`);
$('#events-3').css('background-image', `url(${eventsSlide1})`);
$('#events-4').css('background-image', `url(${eventsSlide2})`);
$('#events-5').css('background-image', `url(${eventsSlide1})`);
$('#logo-header').src = logo;
