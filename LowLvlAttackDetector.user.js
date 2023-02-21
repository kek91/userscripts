// ==UserScript==
// @name        LowLvlAttackDetector
// @description Detects when a low lvl joins an ongoing attack
// @version     0.1
// @namespace   kvassh.lowlvl.attack.detector
// @match       https://www.torn.com/loader.php*
// @match       https://www.torn.com/loader2.php*
// @run-at      document-end
// @grant       GM.xmlHttpRequest
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_info
// @connect     api.torn.com
// @author      Kvassh
// @icon        https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @updateURL   https://github.com/kek91/TornScripts/LowLvlAttackDetector.user.js
// @downloadURL https://github.com/kek91/TornScripts/LowLvlAttackDetector.user.js
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
kvassh.setPrefix('lowlvl.attack.detector');
if (kvassh.get('uid')) {
    (0, kvassh_1.log)('i', 'Torn user ID: ' + kvassh.get('uid'));
}
else {
    (0, kvassh_1.log)('e', 'Could not fetch Torn user ID!');
}

})();

/******/ })()
;