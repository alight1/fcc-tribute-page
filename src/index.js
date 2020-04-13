require('../src/style-common.css');
require('../src/style.css');
require('readmore-js');
import $ from 'jquery';
import assetChevronDown from '../src/assets/font-awesome/chevron-down.svg';
import assetChevronUp from '../src/assets/font-awesome/chevron-up.svg';
import bodyContent from '../src/body-content.html'

document.getElementById("body").innerHTML += bodyContent;

$('.event-description').readmore({
    moreLink: '<a href="#"><img src="' + assetChevronDown + '" class="read-more-open" alt="Read more" /></a>',
    lessLink: '<a href="#"><img src="' + assetChevronUp + '" class="read-more-close" alt="Close" /></a>',
    heightMargin: 50
});

//Add freeCodeCamp script (cannot add to dynamically loaded HTML like body-content.html)
let fccScript = document.createElement('script');
fccScript.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
document.head.appendChild(fccScript);