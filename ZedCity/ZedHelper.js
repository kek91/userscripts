// ==UserScript==
// @name         ZedHelper
// @description  Misc helper tools for Zed City
// @version      0.2
// @namespace    kvassh.zedhelper
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAEZklEQVR4nLzW+1OUVRgH8EU2hQUDBTQFlwW5I+iwctFA1yUICQQyvERgiyOiNjYgTkQTbjIYSBRgJihGjgbKSkSkkCiIlCwMAZJRmCsSko4jt8CF5FLfb/+DLz98zszLu7vnec5znnPEJhOWIpGo+UYAtGoagNPKx9DM/yL0Oq+HJV35MM0IiMIWvQeP3jKAVWfq4bIEPzjnMs24+BS6bq+B1cpWPhc95z8DneYZBs/ccuju+wMc9rsGeytWw0y1M+zWMcrfNJtgvOQ4/M49DYobU2Ds4DRM9jOGC6//CW2+8YUPzscLEYE4YqAZw7njzPKazkl4t/xbWFD0NezMyIK1xamM5nolvCYP4TsPlsJB1RM4kfMyHNjJT+W2cy2jnBUwJ3qpIBFkDw9jSJzLrO05YQv96k5BreYcDLditfjdaoH1ZZ4wpORHuCSUuVZZbocSMdcp3ygC6j+ugFd143DryGeCRCC7+hpnIc+EG+fcgyUNm2FL3gn4tyWzH6yTwnu1TnA01h5GGnElAk8/hKvyN8IXwzzgwxv8707tPOhhOiFIBMaHPsWwJYL5dclj7XdFh/FJXhXsKZNDK2k1fLvvMuxo2QvTHWo5dzsFlO2og6rCGX7WnXXlGrUWVqXYCxLBwbJGDOaOrA3JGH+zZ/Z7+MyeezVEwvhWqx1gZjTXqee0IXyy/BKclh2Et1UyqL+0CM5XeMF3zFXQq7ZYkAjy5G9gKNithf9M8VGA1BVKh1nLvW7/zzeEPcox2AbGlVrDxRdYPzaPXoKtH7TDAVtzmBDD2jd2pOrJfEEi6F7MOX5UwzVYYRLKGd2UQHMds5wk4R4+6bEAJhv0wv6MfdC/uogRyxXwX/+3YGpnHOw4wkxEWbPj6nLiBIlgooO/duzRH1Dmkw6X636C8xq4hysnz8DQKxug8/hRvmN2n88tVkKb/dzPFUnsP7WSQnjAm3G7GL4CFyR9IkQEBjGGhzAoSlnjv+5ZCMeXvAA3bXOE0jjuEmksT9qgdO6M8fBEeHaVDC7TB0Pfp/yGDZVcp5G2L2FWF0/Jv7wrhIhAvPcue3p4lDcMtGXlrnv3TbjfIZmz8D0M3T5njft8xZl+6M8u9NjiVdhnOgbLNP3QNIuxZivZg0cv8B0X3zZBIpBZ52GYthuEhdEHYK4ne6E8whQmGPN529DvsCtmFI64sfvPN9LAO5G8QWnq1PCX9awo07W8HfXe543IVvq+EBEYqBpmMaRpueuSfo6EJ2uYcbNuVkW98jacdS6A6+fehCnx7EU7tLwDbvFhL5pq5E0iKJd59zrFNWtpd4fZrW5CRCAW2zLvgSrOtymVPTKgbwju22wHM4t4xk1plbBfydvfF+m87YyJ+KbdYQvYupVVtGIXu/+M/g50Kt4Nt8l7BIlgnZo3u8Bw9nSnUmYwUc2eY3yWdyR3hQtnZ8J6dzzCXF8J4j1u1xqeFplNPL+Gmnl36iopg+Uz7MfHVjLW14cEOZP/CwAA//8SBG+b+O/5hQAAAABJRU5ErkJggg==
// @updateURL    https://raw.githubusercontent.com/kek91/userscripts/refs/heads/main/ZedCity/ZedHelper.js
// @downloadURL  https://raw.githubusercontent.com/kek91/userscripts/refs/heads/main/ZedCity/ZedHelper.js
// @homepage     https://github.com/kek91/userscripts/blob/main/ZedCity
// @author       Kvassh
// @match        https://www.zed.city/*
// @run-at       document-end
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.onurlchange
// @connect      api.zed.city
// ==/UserScript==

/** 
 * ZedHelper
 * 
 * Features:
 * - Displays market value for items in inventory
 * - Calculates your inventory networth based on current market values
 * - Extra nav menu with some useful shortcuts
 * - Autopopulates gym train input fields to use maximum energy
 *
 * If you have any questions, feel free to reach out to Kvassh [12853] in Zed City
 * 
 * Changelog:
 * - v0.2: Add feature to autopopulate gym input fields
 * - v0.1: Initial release
*/

(function() {
    'use strict';

    // Add CSS for displaying prices (optional, but makes it look nicer)
    GM_addStyle(`
        .market-price {
            color:#999999;
            float:right;
            position:absolute;
            top:18px;
            right:150px;
        }
        .green {
            color: #00cc66;
        }
        .gray {
            color: #888;
        }
        .zedhelper-networth {
            text-align: center;
            margin: 10px auto;
            color: #ccc;
            font-size: 1.6rem;
        }
    `);

    const baseApiUrl = 'https://api.zed.city';

    /** Dont modify anything below this line */

    let module = "index";
    let checkForInventoryUpdates = null;








    /** Utils */

    function get(key) {
        return localStorage.getItem(`kvassh.zedhelper.${key}`);
    }
    function set(key, value) {
        localStorage.setItem(`kvassh.zedhelper.${key}`, value);
    }

    function log(msg) {
        const spacer = "          ";
        const ts = new Date();
        console.log("ZedHelper (" + ts.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' } )+ ") " +
            "[" + module + "]" + ((module.length < spacer.length) ? spacer.substring(0, spacer.length - module.length) : "") + ": " +
            (typeof msg === 'object' ? JSON.stringify(msg) : msg));
    }

    function waitForElement(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });
    
            // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function getCodename(itemName) {
        let codename = itemName.toString().toLowerCase().replace(' ', '_').trim();

        let nametable = {
            "arrows": "ammo_arrows",
            "bows": "ammo_bows",
            "logs": "craft_log",
            "nails": "craft_nails",
            "rope": "craft_rope",
            "scrap": "craft_scrap",
            "wire": "craft_wire",
            "army_helmet": "defense_army_helmet",
            "camo_hat": "defense_camo_hat",
            "camo_vest": "defense_camo_vest",
            "e-cola": "ecola",
            "lighter":"misc_lighter",
            "lockpick":"misc_lockpick",
            "pickaxe":"misc_pickaxe",
            "security_card":"defense_security_card",
            "zed_coin": "points",
            "baseball_bat": "weapon_baseball_bat",
            "bow":"weapon_bow",
            "chainsaw":"weapon_chainsaw",
            "spear":"weapon_spear",
            "switchblade":"weapon_switchblade",
        };

        for (const [key, value] of Object.entries(nametable)) {
            if (codename === key) {
                return value;
            }
        }
        return codename;
    }

    function formatNumber(number) {
        const formatter = new Intl.NumberFormat('nb-NO', {
            maximumFractionDigits: 0,
            

        });
        return formatter.format(number);
    }


















    /** XHR Interceptor */

    const originalXHR = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (...args) {
        this.addEventListener('load', function () {
            const url = this.responseURL;

            // if (url.includes("/getOffers")) {
            //     const item = JSON.parse(this.responseText)[0];
            //     log(`Caching market value for: ${item['name']} (${item['codename']})`);
            //     set(`mv_${item["codename"]}`, JSON.stringify({ "name": item["name"], "marketValue": item["market_price"], "tz": Date.now() }));
            // }

            if (url.endsWith("/getMarket")) {
                const items = JSON.parse(this.responseText).items;
                let itemsCached = 0;
                for (let item of items) {
                    let codename = getCodename(item["name"]);
                    set(`mv_${codename}`, JSON.stringify({ "name": item["name"], "marketValue": item["market_price"], "tz": Date.now() }));
                    itemsCached++;
                }
                log(`Cached market value for ${itemsCached} items.`);
            }

            else if (url.endsWith("/loadItems")) {
                const data = JSON.parse(this.responseText);
                const items = data.items;
                let networthVendor = 0;
                let networthMarket = 0;
                for (let item of items) {

                    networthVendor += item.value * item.quantity;

                    const codename = item.codename;
                    if(get(`mv_${codename}`)) {
                        const mv = JSON.parse(get(`mv_${codename}`));
                        networthMarket += mv.marketValue * item.quantity;
                    } else {
                        networthMarket += item.value * item.quantity;
                    }
                }
                set(`mv_networth_vendor`, networthVendor);
                set(`mv_networth_market`, networthMarket);
                log(`cached inventory networth (vendor: ${networthVendor}, market: ${networthMarket})`);
            }

            else if (url.endsWith("/getStats")) {
                const data = JSON.parse(this.responseText);
                set(`energy`, data.energy);
                set(`morale`, data.morale);
                set(`rad`, data.rad);
                set(`refills`, data.refills);
                set(`xpUntilNextRank`, parseInt(data.xp_end-data.experience));
            }

        });
        originalXHR.apply(this, args);
    };


















    /** Main script */

    log("Starting up ZedHelper!");

    let navigationTimeout = null;

    if (window.onurlchange === null) {
        // feature is supported
        window.addEventListener('urlchange', async (event) => {

            if (navigationTimeout === null) {

                const page = location.pathname;

                // Ensure we dont watch for inventory updates after changing subpage
                clearInterval(checkForInventoryUpdates);
                checkForInventoryUpdates = null;

                if (page.includes("inventory")) {
                    module = "inventory";
                    // log("Waiting for inventory list...");
                    
                    waitForElement("#q-app > div > div.q-page-container > main > div > div:nth-child(4) > div > div.grid-cont.no-padding").then(() => {
                        waitForElement(".item-row").then(() => {
                            log("Inventory list loaded! Adding market prices...");
                            addMarketPrices();
                        });
                    });

                    waitForElement("#q-app > div > div.q-page-container > main > div").then(() => {
                        showNetworth();
                    });
                }
                else if (page.includes("market-listings")) {
                    module = "market";
                    log("Navigated to Market Listings - Watching for element to add new listing...");
                    waitForElement("div > div > button.q-btn.q-btn-item.bg-positive").then(() => {
                        log("Detected form for adding new market listing... showing market values for inventory!");
                        addMarketPrices();
                    })
                }
                else if (page.includes("stronghold/2375014")) {
                    module = "gym";
                    log("Navigated to Gym");
                    autoPopulateTrainInput();
                }
                else if (page.includes("stronghold/2375016")) {
                    module = "crafting";
                    log("Navigated to Crafting Bench");
                }
                else if (page.includes("stronghold/2375017")) {
                    module = "furnace";
                    log("Navigated to Furnace");
                }
                else {
                    module = "unknown";
                    log(`Unknown subpage: ${page}`);
                }

                navigationTimeout = setTimeout(() => {
                    clearTimeout(navigationTimeout);
                    navigationTimeout = null;
                }, 250);
            }
        });
    } else {
        log("onurlchange is not supported - impossible to run this userscript then...");
    }












    /** Add a second nav menu with some useful shortcuts */

    // document.querySelector("#q-app > div > header > div:nth-child(2) > div > div > div").app
    const secondNavBar = document.createElement('div');
    secondNavBar.innerHTML = `
<div>
    <div class="gt-xs bg-grey-3 text-grey-5 text-h6">
        <div class="q-tabs row no-wrap items-center q-tabs--not-scrollable q-tabs--horizontal q-tabs__arrows--inside q-tabs--mobile-with-arrows q-tabs--dense" role="tablist" inside-arrows="">

            <div class="q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position q-tabs__content--align-center">

                <a class="q-tab relative-position self-stretch flex flex-center text-center q-tab--inactive q-tab--full q-focusable q-hoverable cursor-pointer menu-link" tabindex="0" role="tab" aria-selected="false" href="/stronghold/2375017">
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div class="q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable column">
                        <div class="q-tab__label">Furnace</div>
                    </div>
                    <div class="q-tab__indicator absolute-bottom text-transparent"></div>
                </a>
                
                <a class="q-tab relative-position self-stretch flex flex-center text-center q-tab--inactive q-tab--full q-focusable q-hoverable cursor-pointer menu-link" tabindex="0" role="tab" aria-selected="false" href="/stronghold/2375014">
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div class="q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable column">
                        <div class="q-tab__label">Gym</div>
                    </div>
                    <div class="q-tab__indicator absolute-bottom text-transparent"></div>
                </a>

                <a class="q-tab relative-position self-stretch flex flex-center text-center q-tab--inactive q-tab--full q-focusable q-hoverable cursor-pointer menu-link" tabindex="0" role="tab" aria-selected="false" href="/scavenge/2">
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div class="q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable column">
                    <div class="q-tab__label">Scrapyard</div>
                    </div>
                    <div class="q-tab__indicator absolute-bottom text-transparent"></div>
                </a>

                <a class="q-tab relative-position self-stretch flex flex-center text-center q-tab--inactive q-tab--full q-focusable q-hoverable cursor-pointer menu-link" tabindex="0" role="tab" aria-selected="false" href="/market">
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div class="q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable column">
                    <div class="q-tab__label">Market</div>
                    </div>
                    <div class="q-tab__indicator absolute-bottom text-transparent"></div>
                </a>

                <a class="q-tab relative-position self-stretch flex flex-center text-center q-tab--inactive q-tab--full q-focusable q-hoverable cursor-pointer menu-link" tabindex="0" role="tab" aria-selected="false" href="/store/junk">
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div class="q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable column">
                    <div class="q-tab__label">Junk Store</div>
                    </div>
                    <div class="q-tab__indicator absolute-bottom text-transparent"></div>
                </a>

            </div>
        </div>
    </div>
    `;  

    waitForElement("#q-app > div > header").then(() => {
        document.querySelector("#q-app > div > header").appendChild(secondNavBar);
    });























    /** Gym functions */

    function autoPopulateTrainInput() {

        const energy = get("energy");
        if (energy > 5) {
            const trainsAvailable = Math.floor(trainsAvailable = energy/5);
            log(`Current energy: ${energy} - Autopopulating ${trainsAvailable} into the input fields`);
        } else {
            log("Current energy is 5 or lower, don't autopopulate input fields");
        }
    }
                    




    /** Functions related to market/inventory */
    
    // async function fetchMarketPrice(itemCodename) {
    //     try {
    //         const response = await fetch(`${baseApiUrl}/getOffers?item=${itemCodename}`, {
    //             "headers": {
    //                 "accept": "application/json, text/plain, */*",
    //                 "accept-language": "en-US,en;q=0.9,no;q=0.8",
    //                 "content-type": "application/json",
    //                 "cookie": document.cookie, // Use current cookies from the browser
    //                 "Referer": "https://www.zed.city/"
    //             },
    //             "body": "{\"page\":1,\"descending\":false}",
    //             "method": "POST"
    //         });

    //         if (!response.ok) {
    //             log(`Error fetching price for ${itemCodename}: ${response.status}`);
    //             return null;
    //         }

    //         const data = await response.json();
    //         if (data && data.length > 0) {  // Check if there are any offers
    //             return data[0].market_price; // Return the first offer's price
    //         } else {
    //           return null; // No offers found
    //         }
    //     } catch (error) {
    //         log(`Error fetching price for ${itemCodename}: ${error}`);
    //         return null;
    //     }
    // }


    // Function to process inventory items and add prices
    async function addMarketPrices() {

        const items = document.querySelectorAll('.item-row');

        if (!items) {
          log("No inventory items found. Check your selectors.");
          return;
        }

        // Delete any existing market value elements
        const existingMarketValues = document.querySelectorAll('.market-price');
        for (let mvEl of existingMarketValues) {
            mvEl.remove();
        }

        for (let item of items) {

            const codename = getCodename(item.querySelector('.q-item__label').innerText);
            let qty = 1;
            try {
                qty = item.querySelector('.item-qty').innerText;
                if (qty.includes("%")) {
                    qty = 1;
                } else {
                    qty = parseInt(qty.replace(/[^0-9]/g, ''));
                }
            } catch (error) {
                // eat exception
            }
            if (Number.isNaN(qty)) {
                qty = 1;
            }
            log(`Adding market value for ${codename} x ${qty}`);
            
            let data = null;
            if(get(`mv_${codename}`)) {
                data = JSON.parse(get(`mv_${codename}`));
            } 

            const priceElement = document.createElement('span');
            priceElement.classList.add('market-price');
            
            if (data !== null) {
                const datetime = new Date(data.tz).toISOString();
                priceElement.innerHTML = `<span title="${datetime}">
<b class="green">$</b> ${formatNumber(data.marketValue * qty)} 
<small>(<b class="green">$</b> ${formatNumber(data.marketValue)})</small>
</span>`;
            } else {
                priceElement.innerHTML = `<span class="gray">N/A</span>`;
            }
            item.querySelector('.q-item__label').appendChild(priceElement);
        }

        // Setup interval to check if inventory list changes
        checkForInventoryUpdates = setInterval(() => {
            let newItems = document.querySelectorAll('.item-row');
            if (newItems.length !== items.length) {
                log("Inventory list has changed. Updating prices...");
                clearInterval(checkForInventoryUpdates);
                checkForInventoryUpdates = null;
                addMarketPrices();
            }
        },250);
    }
    function showNetworth() {
        const networthVendor = formatNumber(get(`mv_networth_vendor`));
        const networthMarket = formatNumber(get(`mv_networth_market`));

        const el = document.createElement('div');
        el.classList.add('zedhelper-networth');
        
        el.innerHTML = `
    Networth:
    <span title="Value if sold to vendor: $ ${networthVendor}">
        <b class="green">$</b> ${networthMarket}
    </span>
        `;
        
        const selector = "#q-app > div > div.q-page-container > main > div > div:nth-child(2)";
        waitForElement(selector).then(() => {
            document.querySelector(selector).prepend(el);
        });
    }

    
})();

































/* EXAMPLE RESPONSE /getOffers:
    [
        {
            "name":"Advanced Tools",
            "codename":"advanced_tools",
            "type":"resources_craft_basic",
            "quantity":2,
            "value":10,
            "vars":{
                "buy":10,"sell":5,"desc":"","weight":"1","ash_value":"20"
            },
            "market_id":15490,
            "market_price":19500,
            "quantity_sold":3,
            "user":{
                "id":11703,"username":"bump","avatar":"","online":1739285402
            }
        },
    ]
*/

/* EXAMPLE RESPONSE /getMarket
{
    "items": 
    [
        {
            "name":"Advanced Tools",
            "codename":"advanced_tools",
            "type":"resources_craft_basic",
            "quantity":35,
            "value":10,
            "vars": {
                "buy":10,
                "sell":5,
                "desc":"",
                "weight":"1",
                "ash_value":"20"
            },
            "market_id":14020,
            "market_price":19500,
            "quantity_sold":0
        },      
    ]
}   

*/
