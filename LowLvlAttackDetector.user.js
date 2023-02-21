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
        this.prefix = 'kvassh.' + data + '.';
    };
    Kvassh.set = function (key, val) {
        localStorage.setItem(this.prefix + key, val);
    };
    ;
    Kvassh.get = function (key) {
        return localStorage.getItem(this.prefix + key);
    };
    ;
    Kvassh.clear = function () {
        var confirmation = confirm('Are you sure you wish to clear all data?');
        if (confirmation) {
            this.set(this.prefix + 'aaa', null);
            this.set(this.prefix + 'bbb', null);
            this.set(this.prefix + 'ccc', null);
            this.set(this.prefix + 'ddd', null);
        }
    };
    ;
    Kvassh.prefix = 'kvassh.';
    return Kvassh;
}());
exports.Kvassh = Kvassh;
function log(lvl, msg) {
    switch (lvl) {
        case 'e':
            console.error(msg);
            break;
        case 'w':
            console.warn(msg);
            break;
        default:
            console.log(msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG93THZsQXR0YWNrRGV0ZWN0b3IudXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQTZCQSxDQUFDO0lBekJpQixnQkFBUyxHQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRWEsZ0JBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFFYSxVQUFHLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxHQUFXO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUFBLENBQUM7SUFFWSxVQUFHLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUFBLENBQUM7SUFFWSxZQUFLLEdBQW5CO1FBQ0ksSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDekUsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUExQmEsYUFBTSxHQUFXLFNBQVMsQ0FBQztJQTJCOUMsYUFBQztDQUFBO0FBN0JZLHdCQUFNO0FBK0JuQixTQUFnQixHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDeEMsUUFBUSxHQUFHLEVBQUU7UUFDVCxLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU07UUFDVixLQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE1BQU07UUFDVjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTTtLQUNiO0FBQ0wsQ0FBQztBQVpELGtCQVlDOzs7Ozs7O1VDOUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxvRUFBdUM7QUFFdkMsSUFBTSxNQUFNLEdBQUcsZUFBTSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUUzQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDbkIsZ0JBQUcsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ2xEO0tBQ0k7SUFDRCxnQkFBRyxFQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0NBQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG93bHZsYXR0YWNrZGV0ZWN0b3IvLi4va3Zhc3NoLnRzIiwid2VicGFjazovL2xvd2x2bGF0dGFja2RldGVjdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xvd2x2bGF0dGFja2RldGVjdG9yLy4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEt2YXNzaCBoZWxwZXIgY2xhc3MgZm9yIFRvcm4gdXNlcnNjcmlwdHNcbiAqL1xuZXhwb3J0IGNsYXNzIEt2YXNzaCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwcmVmaXg6IHN0cmluZyA9ICdrdmFzc2guJztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJlZml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXg7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcmVmaXgoZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJlZml4ID0gJ2t2YXNzaC4nICsgZGF0YSArICcuJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmaXggKyBrZXksIHZhbCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZpeCArIGtleSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBjbGVhciBhbGwgZGF0YT8nKTtcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXQodGhpcy5wcmVmaXggKyAnYWFhJywgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldCh0aGlzLnByZWZpeCArICdiYmInLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHRoaXMucHJlZml4ICsgJ2NjYycsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXQodGhpcy5wcmVmaXggKyAnZGRkJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKGx2bDogc3RyaW5nLCBtc2c6IHN0cmluZykge1xuICAgIHN3aXRjaCAobHZsKSB7XG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgS3Zhc3NoLCBsb2cgfSBmcm9tICcuLi9rdmFzc2gnXG5cbmNvbnN0IGt2YXNzaCA9IEt2YXNzaDtcbmt2YXNzaC5zZXRQcmVmaXgoJ2xvd2x2bC5hdHRhY2suZGV0ZWN0b3InKTsgLy8gY2FjaGUgZGF0YSB3aWxsIGJlIHN0b3JlZCBhcyBrdmFzc2gubG93bHZsLmF0dGFjay5kZXRlY3Rvci5pdGVtMSBldGMgaW4gbG9jYWxTdG9yYWdlXG5cbmlmIChrdmFzc2guZ2V0KCd1aWQnKSkge1xuICAgIGxvZygnaScsICdUb3JuIHVzZXIgSUQ6ICcgKyBrdmFzc2guZ2V0KCd1aWQnKSk7XG59XG5lbHNlIHtcbiAgICBsb2coJ2UnLCAnQ291bGQgbm90IGZldGNoIFRvcm4gdXNlciBJRCEnKTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=