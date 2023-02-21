// required for path resolution for dist folder
const path = require("path");
// used to access the BannerPlugin
const webpack = require("webpack");
// required for pretty format for the Userscript banner
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./main.ts",
    devtool: "hidden-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "../"),
        filename: "LowLvlAttackDetector.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
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
                // ==/UserScript==`
        })
    ]
};