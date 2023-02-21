// required for path resolution for dist folder
const path = require("path");
// used to access the BannerPlugin
const webpack = require("webpack");
// required for pretty format for the Userscript banner
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./main.ts",
    devtool: 'inline-source-map',
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
        path: path.resolve(__dirname, "dist"),
        filename: "LowLvlAttackDetector.js"
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
                // ==/UserScript==`
        })
    ]
};