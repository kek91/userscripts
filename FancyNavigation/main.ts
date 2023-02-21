import {Kvassh, log} from '../kvassh'

const kvassh = Kvassh;
kvassh.setPrefix('fancynavigation');
log('i', kvassh.getPrefix() + ' has been initialized!');

function generateNavMarkup(id: string, link: string) {
    return '<a href="/' + link + '" class="linkWrap___faB9d events___CBjuV" id="' + id + '">\n' +
        '        <svg xmlns="http://www.w3.org/2000/svg" class="default___XXAGt " filter="url(#sidebar__accountLinks_filter)"\n' +
        '             fill="url(#sidebar__accountLinks_svg_gradient_regular)" stroke="#fff" stroke-width="0" width="34" height="34" viewBox="-6 -6 30 30">\n' +
        '            <path d="M8,1a8,8,0,1,0,8,8A8,8,0,0,0,8,1ZM6.47,3.87H9.53l-.77,7.18H7.24ZM8,14.55A1.15,1.15,0,1,1,9.15,13.4,1.14,1.14,0,0,1,8,14.55Z"></path>\n' +
        '        </svg>\n' +
        '    </a>';
}

// Create new nav elements
let navAuctionHouse = document.createElement('div');
navAuctionHouse.className = 'wrap___jflBA';
navAuctionHouse.innerHTML = generateNavMarkup('nav-auction-house', 'amarket.php');

// Find the nav container
let navContainer = document.getElementById('nav-awards').parentElement.parentElement;

// Append the new nav buttons
navContainer.appendChild(navAuctionHouse);