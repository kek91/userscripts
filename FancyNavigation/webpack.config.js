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
        path: path.resolve(__dirname, "../"),
        filename: "FancyNavigation.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
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
                // ==/UserScript==`
        })
    ]
};