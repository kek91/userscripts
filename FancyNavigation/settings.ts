import {Kvassh, log} from '../kvassh'

const kvassh = Kvassh;

export function Settings() {
    if (location.href.includes('preferences.php')) {
        log('i', 'Settings mode!');

        try {
            let contentDiv = document.getElementsByClassName('content-wrapper')[0];

// contentDiv.innerHTML += `
// <div id="fancynavigation-settings-container" class="rounding mt10 title-black">
//     <div class="title expanded">
//         <div class="text">FancyNavigation - Settings</div>
//         <div>
//             Much options for fancynavigation!
//         </div>
//     </div>
// </div>
// `;

            /*
            contentDiv.innerHTML += `
                <div class="">
                    <div class="">
                        <div class="">FancyNavigation Settings</div>
                        <div style="padding:10px;">
                            You can have up to 9 extra links in the fancy navigation.<br>
                            If you want to create custom icons, you can use this editor:<br><br>
                            <a href="https://yqnn.github.io/svg-path-editor/" target="_blank">https://yqnn.github.io/svg-path-editor/</a>
                            <br><br>
                            <table class="table">
                                <tr><th>ID</th><th>Link</th><th>SVG Path</th></tr>
                                <tr>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l1.id" value="${kvassh.get('l1.id')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l1.link" value="${kvassh.get('l1.link')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l1.icon" value="${kvassh.get('l1.icon')}"></td>
                                </tr>
                                <tr>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l2.id" value="${kvassh.get('l2.id')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l2.link" value="${kvassh.get('l2.link')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l2.icon" value="${kvassh.get('l2.icon')}"></td>
                                </tr>
                                <tr>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l3.id" value="${kvassh.get('l3.id')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l3.link" value="${kvassh.get('l3.link')}"></td>
                                    <td><input type="text" id="${kvassh.getPrefix()}.l3.icon" value="${kvassh.get('l3.icon')}"></td>
                                </tr>
                            </table>
                        </div>
                   </div>
                </div>
                `;
             */
        } catch (e) {
            log('e', 'Error details: ' + e);
        }





        // let settingsCategoriesEl = document.getElementById('categories');
        // if (settingsCategoriesEl) {
        //     settingsCategoriesEl.innerHTML += '<option value="fancyNavigation">FancyNavigation</option>';
        //     log('i', 'Added settings category option');
        // }
        //
        // document.getElementById('categories-menu').innerHTML += '<li role="presentation"><a href="#nogo" tabindex="-1" role="option" aria-selected="false">FancyNavigation</a></li>';
        //
        // let settingsTabsEl = document.getElementsByClassName('headers');
        // if (settingsTabsEl.length > 0) {
        //     let node = '<li class="c-pointer left-bottom-round ui-state-default ui-corner-top" data-title-name="FancyNavigation Settings" role="tab" tabindex="-1" aria-controls="fancyNavigationSettings" aria-labelledby="ui-id-30" aria-selected="false">\n' +
        //         '        <a class="t-gray-6 bold h fancyNavigation ui-tabs-anchor" href="#fancyNavigation" role="presentation" tabindex="-1" id="ui-id-30" i-data="i_192_693_149_34">FancyNavigation</a>\n' +
        //         '    </li>'
        //     settingsTabsEl[0].innerHTML += node;
        //     log('i', 'Added settings tab picker');
        // }
        //
        // let settingsTabsContentEl = document.getElementById('prefs-tab-menu');
        // if (settingsTabsContentEl) {
        //     let node = '<div id="fancyNavigation" class="prefs-cont fancyNavigation left grid-2x2 ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-30" role="tabpanel" aria-expanded="false" aria-hidden="true" style="display: none;"> fancynav settings asdopkasdk </div>';
        //
        //     settingsTabsContentEl.innerHTML = settingsTabsContentEl.innerHTML.replace('<div class="clear"></div>', '');
        //     settingsTabsContentEl.innerHTML += node;
        //     settingsTabsContentEl.innerHTML += '<div class="clear"></div>';
        //     log('i', 'Added settings tab content');
        // }

    }
}

//
//
// const customLinks = [
//     {
//         'id': 'fn-nav-auction-house',
//         'link': 'amarket.php',
//         'icon': 'm13.78,13.35H1.16c-.68.04-1.2.63-1.16,1.31,0,0,0,.01,0,.02-.04.68.48,1.27,1.16,1.33h12.62c.73-.1,1.25-.77,1.15-1.5-.08-.6-.55-1.07-1.15-1.15Zm1.88-2.99l-6.96-3.87-.68,1.19,6.96,3.84c.1.07.22.1.34.1.25,0,.48-.13.61-.34.16-.33.04-.73-.27-.91h0ZM5.04,2.51l-2.33,4.15,3.9,2.17,2.32-4.16-3.9-2.17Zm-.06-.78l4.64,2.58c.41.23.92.08,1.15-.32,0,0,0-.01,0-.02l.07-.14c.11-.2.13-.43.07-.65-.07-.22-.21-.4-.41-.51L5.91.1c-.13-.06-.27-.1-.41-.1-.31,0-.59.17-.75.44l-.07.14c-.11.2-.13.43-.07.65.06.21.19.39.37.51h0Zm-3.89,6.96l4.64,2.58c.41.23.92.08,1.15-.32,0,0,0-.01,0-.02l.07-.14c.11-.2.13-.43.07-.65-.06-.22-.21-.4-.41-.51l-3.34-1.87-1.3-.71c-.13-.06-.27-.1-.41-.1-.31,0-.59.17-.75.44l-.07.14c-.11.2-.13.43-.07.65.06.22.21.41.41.51h0Z'
//     },
//     {
//         'id': 'fn-nav-faction-wars',
//         'link': 'page.php?sid=factionWarfare#/ranked',
//         'icon': 'm0,0c2.11,3.71,4.77,7.08,7.88,10l.12.13h0l2.25,2.27c-.65.5-1.32.96-2.03,1.37l.94.94,2.33-2.34c1.43.95,2.64,2.18,3.57,3.63l.94-.94c-1.46-.89-2.69-2.1-3.6-3.55l2.33-2.35-.93-.94c-.37.73-.82,1.43-1.34,2.07-1.52-1.54-2.96-2.99-4.45-4.34h0C5.59,3.66,2.9,1.66,0,0Zm16,0c-2.7,1.55-5.23,3.4-7.53,5.51l.77.73,1.88-1.94.45.45-1.88,1.88.83.8c2.14-2.23,3.98-4.73,5.48-7.44ZM4.83,4.3l6.8,6.84-.45.45-6.8-6.84.45-.45Zm-2.6,3.87l-.94.94,2.33,2.35c-.91,1.46-2.15,2.7-3.62,3.6l.94.94c.91-1.44,2.12-2.67,3.53-3.61l2.33,2.34.94-.94c-.71-.41-1.39-.87-2.03-1.37l1.82-1.84-.83-.88-1.88,1.89-.45-.45,1.88-1.88-.8-.88c-.62.6-1.24,1.22-1.88,1.88-.51-.64-.96-1.34-1.34-2.07v-.02Z'
//     },
//     {
//         'id': 'fn-nav-items',
//         'link': 'item.php',
//         'icon': 'M10.32,7.16,8,8.43.79,4.23,3.11,2.92Zm1.38-.73L14,5.23,6.51,1,4.45,2.16ZM7.33,9.59,0,5.31v7.32l7.33,4.18Zm7.34-3.23v7.22L8.67,17V9.58Z'
//     }
// ];
//
