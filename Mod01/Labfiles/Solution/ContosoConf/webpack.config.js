var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        video: './wwwroot/scripts/pages/video.js',
        feedback: './wwwroot/scripts/pages/feedback.js',
        live: './wwwroot/scripts/pages/live.js',
        location: './wwwroot/scripts/pages/location.js',
        locationVenue: './wwwroot/scripts/pages/location-venue.js',
        register: './wwwroot/scripts/pages/register.js',
        schedule: './wwwroot/scripts/pages/schedule.js',
        speakerBadge: './wwwroot/scripts/pages/speaker-badge.js',
        offline: './wwwroot/scripts/offline.js'
    },
    output: {
        path: path.resolve(__dirname,'wwwroot/dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'production'
};
