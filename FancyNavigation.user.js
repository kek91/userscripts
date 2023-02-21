// ==UserScript==
// @name        FancyNavigation
// @description Modifies the main navigation bar
// @version     0.2
// @namespace   kvassh.fancynavigation
// @match       https://www.torn.com/*
// @run-at      document-end
// @author      Kvassh
// @icon        https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @updateURL   https://github.com/kek91/TornScripts/FancyNavigation.user.js
// @downloadURL https://github.com/kek91/TornScripts/FancyNavigation.user.js
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../kvassh.ts":
/*!********************!*\
  !*** ../kvassh.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.log = exports.Kvassh = void 0;
var Kvassh = (function () {
    function Kvassh() {
    }
    Kvassh.getPrefix = function () {
        return this.prefix;
    };
    Kvassh.setPrefix = function (data) {
        this.prefix = 'kvassh.' + data;
    };
    Kvassh.set = function (key, val) {
        localStorage.setItem(this.prefix + '.' + key, val);
    };
    ;
    Kvassh.get = function (key) {
        return localStorage.getItem(this.prefix + '.' + key);
    };
    ;
    Kvassh.clear = function () {
        var confirmation = confirm('Are you sure you wish to clear all data?');
        if (confirmation) {
            this.set(this.prefix + 'data', null);
        }
    };
    ;
    Kvassh.prefix = 'kvassh';
    return Kvassh;
}());
exports.Kvassh = Kvassh;
function log(lvl, msg) {
    switch (lvl) {
        case 'e':
            console.error('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
        case 'w':
            console.warn('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
        default:
            console.log('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
    }
}
exports.log = log;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

exports.__esModule = true;
var kvassh_1 = __webpack_require__(/*! ../kvassh */ "../kvassh.ts");
var kvassh = kvassh_1.Kvassh;
kvassh.setPrefix('fancynavigation');
(0, kvassh_1.log)('i', kvassh.getPrefix() + ' has been initialized!');
function generateNavMarkup(id, link, icon) {
    return '<a href="/' + link + '" class="linkWrap___faB9d events___CBjuV" id="' + id + '">\n' +
        '        <svg xmlns="http://www.w3.org/2000/svg" class="default___XXAGt " filter="url(#sidebar__accountLinks_filter)"\n' +
        '             fill="url(#sidebar__accountLinks_svg_gradient_regular)" stroke="#fff" stroke-width="0" width="34" height="34" viewBox="-6 -6 30 30">\n' +
        '            <path d="' + icon + '"></path>\n' +
        '        </svg>\n' +
        '    </a>';
}
var customLinks = [
    {
        'id': 'fn-nav-auction-house',
        'link': 'amarket.php',
        'icon': 'm13.78,13.35H1.16c-.68.04-1.2.63-1.16,1.31,0,0,0,.01,0,.02-.04.68.48,1.27,1.16,1.33h12.62c.73-.1,1.25-.77,1.15-1.5-.08-.6-.55-1.07-1.15-1.15Zm1.88-2.99l-6.96-3.87-.68,1.19,6.96,3.84c.1.07.22.1.34.1.25,0,.48-.13.61-.34.16-.33.04-.73-.27-.91h0ZM5.04,2.51l-2.33,4.15,3.9,2.17,2.32-4.16-3.9-2.17Zm-.06-.78l4.64,2.58c.41.23.92.08,1.15-.32,0,0,0-.01,0-.02l.07-.14c.11-.2.13-.43.07-.65-.07-.22-.21-.4-.41-.51L5.91.1c-.13-.06-.27-.1-.41-.1-.31,0-.59.17-.75.44l-.07.14c-.11.2-.13.43-.07.65.06.21.19.39.37.51h0Zm-3.89,6.96l4.64,2.58c.41.23.92.08,1.15-.32,0,0,0-.01,0-.02l.07-.14c.11-.2.13-.43.07-.65-.06-.22-.21-.4-.41-.51l-3.34-1.87-1.3-.71c-.13-.06-.27-.1-.41-.1-.31,0-.59.17-.75.44l-.07.14c-.11.2-.13.43-.07.65.06.22.21.41.41.51h0Z'
    },
    {
        'id': 'fn-nav-faction-wars',
        'link': 'page.php?sid=factionWarfare#/ranked',
        'icon': 'm0,0c2.11,3.71,4.77,7.08,7.88,10l.12.13h0l2.25,2.27c-.65.5-1.32.96-2.03,1.37l.94.94,2.33-2.34c1.43.95,2.64,2.18,3.57,3.63l.94-.94c-1.46-.89-2.69-2.1-3.6-3.55l2.33-2.35-.93-.94c-.37.73-.82,1.43-1.34,2.07-1.52-1.54-2.96-2.99-4.45-4.34h0C5.59,3.66,2.9,1.66,0,0Zm16,0c-2.7,1.55-5.23,3.4-7.53,5.51l.77.73,1.88-1.94.45.45-1.88,1.88.83.8c2.14-2.23,3.98-4.73,5.48-7.44ZM4.83,4.3l6.8,6.84-.45.45-6.8-6.84.45-.45Zm-2.6,3.87l-.94.94,2.33,2.35c-.91,1.46-2.15,2.7-3.62,3.6l.94.94c.91-1.44,2.12-2.67,3.53-3.61l2.33,2.34.94-.94c-.71-.41-1.39-.87-2.03-1.37l1.82-1.84-.83-.88-1.88,1.89-.45-.45,1.88-1.88-.8-.88c-.62.6-1.24,1.22-1.88,1.88-.51-.64-.96-1.34-1.34-2.07v-.02Z'
    },
    {
        'id': 'fn-nav-items',
        'link': 'item.php',
        'icon': 'M10.32,7.16,8,8.43.79,4.23,3.11,2.92Zm1.38-.73L14,5.23,6.51,1,4.45,2.16ZM7.33,9.59,0,5.31v7.32l7.33,4.18Zm7.34-3.23v7.22L8.67,17V9.58Z'
    }
];
var navParentContainer = document.getElementById('nav-awards').parentElement.parentElement.parentElement;
var newNavContainer = document.createElement('div');
newNavContainer.className = 'account-links___EEEJs';
for (var i in customLinks) {
    var newNode = document.createElement('div');
    newNode.className = 'wrap___jflBA';
    newNode.innerHTML = generateNavMarkup(customLinks[i].id, customLinks[i].link, customLinks[i].icon);
    newNavContainer.appendChild(newNode);
}
newNavContainer.innerHTML += '</div></div>';
navParentContainer.appendChild(newNavContainer);

})();

/******/ })()
;