// ==UserScript==
// @name        FancyNavigation
// @description Modifies the main navigation bar
// @version     0.1
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
function generateNavMarkup(id, link) {
    return '<a href="/' + link + '" class="linkWrap___faB9d events___CBjuV" id="' + id + '">\n' +
        '        <svg xmlns="http://www.w3.org/2000/svg" class="default___XXAGt " filter="url(#sidebar__accountLinks_filter)"\n' +
        '             fill="url(#sidebar__accountLinks_svg_gradient_regular)" stroke="#fff" stroke-width="0" width="34" height="34" viewBox="-6 -6 30 30">\n' +
        '            <path d="M8,1a8,8,0,1,0,8,8A8,8,0,0,0,8,1ZM6.47,3.87H9.53l-.77,7.18H7.24ZM8,14.55A1.15,1.15,0,1,1,9.15,13.4,1.14,1.14,0,0,1,8,14.55Z"></path>\n' +
        '        </svg>\n' +
        '    </a>';
}
var navAuctionHouse = document.createElement('div');
navAuctionHouse.className = 'wrap___jflBA';
navAuctionHouse.innerHTML = generateNavMarkup('nav-auction-house', 'amarket.php');
var navContainer = document.getElementById('nav-awards').parentElement.parentElement;
navContainer.appendChild(navAuctionHouse);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFHckYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbmN5bmF2aWdhdGlvbi8uLi9rdmFzc2gudHMiLCJ3ZWJwYWNrOi8vZmFuY3luYXZpZ2F0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhbmN5bmF2aWdhdGlvbi8uL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBLdmFzc2ggaGVscGVyIGNsYXNzIGZvciBUb3JuIHVzZXJzY3JpcHRzXG4gKi9cbmV4cG9ydCBjbGFzcyBLdmFzc2gge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4OiBzdHJpbmcgPSAna3Zhc3NoJztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJlZml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXg7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmaXgoZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJlZml4ID0gJ2t2YXNzaC4nICsgZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmaXggKyAnLicgKyBrZXksIHZhbCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZpeCArICcuJyArIGtleSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBjbGVhciBhbGwgZGF0YT8nKTtcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXQodGhpcy5wcmVmaXggKyAnZGF0YScsIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhsdmw6IHN0cmluZywgbXNnOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGx2bCkge1xuICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1snICsgS3Zhc3NoLmdldFByZWZpeCgpICsgJ10gJyArIG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1snICsgS3Zhc3NoLmdldFByZWZpeCgpICsgJ10gJyArIG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArIEt2YXNzaC5nZXRQcmVmaXgoKSArICddICcgKyBtc2cpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7S3Zhc3NoLCBsb2d9IGZyb20gJy4uL2t2YXNzaCdcblxuY29uc3Qga3Zhc3NoID0gS3Zhc3NoO1xua3Zhc3NoLnNldFByZWZpeCgnZmFuY3luYXZpZ2F0aW9uJyk7XG5sb2coJ2knLCBrdmFzc2guZ2V0UHJlZml4KCkgKyAnIGhhcyBiZWVuIGluaXRpYWxpemVkIScpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU5hdk1hcmt1cChpZDogc3RyaW5nLCBsaW5rOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gJzxhIGhyZWY9XCIvJyArIGxpbmsgKyAnXCIgY2xhc3M9XCJsaW5rV3JhcF9fX2ZhQjlkIGV2ZW50c19fX0NCanVWXCIgaWQ9XCInICsgaWQgKyAnXCI+XFxuJyArXG4gICAgICAgICcgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZGVmYXVsdF9fX1hYQUd0IFwiIGZpbHRlcj1cInVybCgjc2lkZWJhcl9fYWNjb3VudExpbmtzX2ZpbHRlcilcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3NpZGViYXJfX2FjY291bnRMaW5rc19zdmdfZ3JhZGllbnRfcmVndWxhcilcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMFwiIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCIzNFwiIHZpZXdCb3g9XCItNiAtNiAzMCAzMFwiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgPHBhdGggZD1cIk04LDFhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsOCwxWk02LjQ3LDMuODdIOS41M2wtLjc3LDcuMThINy4yNFpNOCwxNC41NUExLjE1LDEuMTUsMCwxLDEsOS4xNSwxMy40LDEuMTQsMS4xNCwwLDAsMSw4LDE0LjU1WlwiPjwvcGF0aD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgPC9zdmc+XFxuJyArXG4gICAgICAgICcgICAgPC9hPic7XG59XG5cbi8vIENyZWF0ZSBuZXcgbmF2IGVsZW1lbnRzXG5sZXQgbmF2QXVjdGlvbkhvdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uYXZBdWN0aW9uSG91c2UuY2xhc3NOYW1lID0gJ3dyYXBfX19qZmxCQSc7XG5uYXZBdWN0aW9uSG91c2UuaW5uZXJIVE1MID0gZ2VuZXJhdGVOYXZNYXJrdXAoJ25hdi1hdWN0aW9uLWhvdXNlJywgJ2FtYXJrZXQucGhwJyk7XG5cbi8vIEZpbmQgdGhlIG5hdiBjb250YWluZXJcbmxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWF3YXJkcycpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuLy8gQXBwZW5kIHRoZSBuZXcgbmF2IGJ1dHRvbnNcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZBdWN0aW9uSG91c2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==