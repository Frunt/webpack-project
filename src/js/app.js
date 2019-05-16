/**
 * This is your JavaScript application's entry-point.
 *
 * Webpack will look into this file to find references to
 * other source files.
 */
/**
 * @module jQuery
 */

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
