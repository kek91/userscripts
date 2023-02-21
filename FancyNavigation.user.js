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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLCtvQkFBK29CO0tBQzFwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLHdJQUF3STtLQUNuSjtDQUNKLENBQUM7QUFLRixJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFFekcsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxlQUFlLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO0FBRXBELEtBQUssSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO0lBRXZCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDbkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5HLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDeEM7QUFFRCxlQUFlLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQztBQUU1QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW5jeW5hdmlnYXRpb24vLi4va3Zhc3NoLnRzIiwid2VicGFjazovL2ZhbmN5bmF2aWdhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYW5jeW5hdmlnYXRpb24vLi9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogS3Zhc3NoIGhlbHBlciBjbGFzcyBmb3IgVG9ybiB1c2Vyc2NyaXB0c1xuICovXG5leHBvcnQgY2xhc3MgS3Zhc3NoIHtcblxuICAgIHByaXZhdGUgc3RhdGljIHByZWZpeDogc3RyaW5nID0gJ2t2YXNzaCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZml4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UHJlZml4KGRhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByZWZpeCA9ICdrdmFzc2guJyArIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJlZml4ICsgJy4nICsga2V5LCB2YWwpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldChrZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmaXggKyAnLicgKyBrZXkpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICBjb25zdCBjb25maXJtYXRpb24gPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gY2xlYXIgYWxsIGRhdGE/Jyk7XG4gICAgICAgIGlmIChjb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHRoaXMucHJlZml4ICsgJ2RhdGEnLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobHZsOiBzdHJpbmcsIG1zZzogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChsdmwpIHtcbiAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbJyArIEt2YXNzaC5nZXRQcmVmaXgoKSArICddICcgKyBtc2cpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbJyArIEt2YXNzaC5nZXRQcmVmaXgoKSArICddICcgKyBtc2cpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyBLdmFzc2guZ2V0UHJlZml4KCkgKyAnXSAnICsgbXNnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0t2YXNzaCwgbG9nfSBmcm9tICcuLi9rdmFzc2gnXG5cbmNvbnN0IGt2YXNzaCA9IEt2YXNzaDtcbmt2YXNzaC5zZXRQcmVmaXgoJ2ZhbmN5bmF2aWdhdGlvbicpO1xubG9nKCdpJywga3Zhc3NoLmdldFByZWZpeCgpICsgJyBoYXMgYmVlbiBpbml0aWFsaXplZCEnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOYXZNYXJrdXAoaWQ6IHN0cmluZywgbGluazogc3RyaW5nLCBpY29uOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gJzxhIGhyZWY9XCIvJyArIGxpbmsgKyAnXCIgY2xhc3M9XCJsaW5rV3JhcF9fX2ZhQjlkIGV2ZW50c19fX0NCanVWXCIgaWQ9XCInICsgaWQgKyAnXCI+XFxuJyArXG4gICAgICAgICcgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZGVmYXVsdF9fX1hYQUd0IFwiIGZpbHRlcj1cInVybCgjc2lkZWJhcl9fYWNjb3VudExpbmtzX2ZpbHRlcilcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3NpZGViYXJfX2FjY291bnRMaW5rc19zdmdfZ3JhZGllbnRfcmVndWxhcilcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMFwiIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCIzNFwiIHZpZXdCb3g9XCItNiAtNiAzMCAzMFwiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgPHBhdGggZD1cIicgKyBpY29uICsgJ1wiPjwvcGF0aD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgPC9zdmc+XFxuJyArXG4gICAgICAgICcgICAgPC9hPic7XG59XG5cbmNvbnN0IGN1c3RvbUxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgJ2lkJzogJ2ZuLW5hdi1hdWN0aW9uLWhvdXNlJyxcbiAgICAgICAgJ2xpbmsnOiAnYW1hcmtldC5waHAnLFxuICAgICAgICAnaWNvbic6ICdtMTMuNzgsMTMuMzVIMS4xNmMtLjY4LjA0LTEuMi42My0xLjE2LDEuMzEsMCwwLDAsLjAxLDAsLjAyLS4wNC42OC40OCwxLjI3LDEuMTYsMS4zM2gxMi42MmMuNzMtLjEsMS4yNS0uNzcsMS4xNS0xLjUtLjA4LS42LS41NS0xLjA3LTEuMTUtMS4xNVptMS44OC0yLjk5bC02Ljk2LTMuODctLjY4LDEuMTksNi45NiwzLjg0Yy4xLjA3LjIyLjEuMzQuMS4yNSwwLC40OC0uMTMuNjEtLjM0LjE2LS4zMy4wNC0uNzMtLjI3LS45MWgwWk01LjA0LDIuNTFsLTIuMzMsNC4xNSwzLjksMi4xNywyLjMyLTQuMTYtMy45LTIuMTdabS0uMDYtLjc4bDQuNjQsMi41OGMuNDEuMjMuOTIuMDgsMS4xNS0uMzIsMCwwLDAtLjAxLDAtLjAybC4wNy0uMTRjLjExLS4yLjEzLS40My4wNy0uNjUtLjA3LS4yMi0uMjEtLjQtLjQxLS41MUw1LjkxLjFjLS4xMy0uMDYtLjI3LS4xLS40MS0uMS0uMzEsMC0uNTkuMTctLjc1LjQ0bC0uMDcuMTRjLS4xMS4yLS4xMy40My0uMDcuNjUuMDYuMjEuMTkuMzkuMzcuNTFoMFptLTMuODksNi45Nmw0LjY0LDIuNThjLjQxLjIzLjkyLjA4LDEuMTUtLjMyLDAsMCwwLS4wMSwwLS4wMmwuMDctLjE0Yy4xMS0uMi4xMy0uNDMuMDctLjY1LS4wNi0uMjItLjIxLS40LS40MS0uNTFsLTMuMzQtMS44Ny0xLjMtLjcxYy0uMTMtLjA2LS4yNy0uMS0uNDEtLjEtLjMxLDAtLjU5LjE3LS43NS40NGwtLjA3LjE0Yy0uMTEuMi0uMTMuNDMtLjA3LjY1LjA2LjIyLjIxLjQxLjQxLjUxaDBaJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnaWQnOiAnZm4tbmF2LWZhY3Rpb24td2FycycsXG4gICAgICAgICdsaW5rJzogJ3BhZ2UucGhwP3NpZD1mYWN0aW9uV2FyZmFyZSMvcmFua2VkJyxcbiAgICAgICAgJ2ljb24nOiAnbTAsMGMyLjExLDMuNzEsNC43Nyw3LjA4LDcuODgsMTBsLjEyLjEzaDBsMi4yNSwyLjI3Yy0uNjUuNS0xLjMyLjk2LTIuMDMsMS4zN2wuOTQuOTQsMi4zMy0yLjM0YzEuNDMuOTUsMi42NCwyLjE4LDMuNTcsMy42M2wuOTQtLjk0Yy0xLjQ2LS44OS0yLjY5LTIuMS0zLjYtMy41NWwyLjMzLTIuMzUtLjkzLS45NGMtLjM3LjczLS44MiwxLjQzLTEuMzQsMi4wNy0xLjUyLTEuNTQtMi45Ni0yLjk5LTQuNDUtNC4zNGgwQzUuNTksMy42NiwyLjksMS42NiwwLDBabTE2LDBjLTIuNywxLjU1LTUuMjMsMy40LTcuNTMsNS41MWwuNzcuNzMsMS44OC0xLjk0LjQ1LjQ1LTEuODgsMS44OC44My44YzIuMTQtMi4yMywzLjk4LTQuNzMsNS40OC03LjQ0Wk00LjgzLDQuM2w2LjgsNi44NC0uNDUuNDUtNi44LTYuODQuNDUtLjQ1Wm0tMi42LDMuODdsLS45NC45NCwyLjMzLDIuMzVjLS45MSwxLjQ2LTIuMTUsMi43LTMuNjIsMy42bC45NC45NGMuOTEtMS40NCwyLjEyLTIuNjcsMy41My0zLjYxbDIuMzMsMi4zNC45NC0uOTRjLS43MS0uNDEtMS4zOS0uODctMi4wMy0xLjM3bDEuODItMS44NC0uODMtLjg4LTEuODgsMS44OS0uNDUtLjQ1LDEuODgtMS44OC0uOC0uODhjLS42Mi42LTEuMjQsMS4yMi0xLjg4LDEuODgtLjUxLS42NC0uOTYtMS4zNC0xLjM0LTIuMDd2LS4wMlonXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpZCc6ICdmbi1uYXYtaXRlbXMnLFxuICAgICAgICAnbGluayc6ICdpdGVtLnBocCcsXG4gICAgICAgICdpY29uJzogJ00xMC4zMiw3LjE2LDgsOC40My43OSw0LjIzLDMuMTEsMi45MlptMS4zOC0uNzNMMTQsNS4yMyw2LjUxLDEsNC40NSwyLjE2Wk03LjMzLDkuNTksMCw1LjMxdjcuMzJsNy4zMyw0LjE4Wm03LjM0LTMuMjN2Ny4yMkw4LjY3LDE3VjkuNThaJ1xuICAgIH1cbl07XG5cbi8vIEZpbmQgdGhlIG5hdiBjb250YWluZXJcbi8vIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWF3YXJkcycpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxubGV0IG5hdlBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtYXdhcmRzJykucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbmxldCBuZXdOYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5ld05hdkNvbnRhaW5lci5jbGFzc05hbWUgPSAnYWNjb3VudC1saW5rc19fX0VFRUpzJztcblxuZm9yIChsZXQgaSBpbiBjdXN0b21MaW5rcykge1xuICAgIC8vIENyZWF0ZSBuZXcgbmF2IGVsZW1lbnRcbiAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld05vZGUuY2xhc3NOYW1lID0gJ3dyYXBfX19qZmxCQSc7XG4gICAgbmV3Tm9kZS5pbm5lckhUTUwgPSBnZW5lcmF0ZU5hdk1hcmt1cChjdXN0b21MaW5rc1tpXS5pZCwgY3VzdG9tTGlua3NbaV0ubGluaywgY3VzdG9tTGlua3NbaV0uaWNvbik7XG4gICAgLy8gQXBwZW5kIHRvIHRoZSBuYXYgY29udGFpbmVyXG4gICAgbmV3TmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05vZGUpO1xufVxuXG5uZXdOYXZDb250YWluZXIuaW5uZXJIVE1MICs9ICc8L2Rpdj48L2Rpdj4nO1xuXG5uYXZQYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TmF2Q29udGFpbmVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==