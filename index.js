"use strict";
exports.__esModule = true;
var path = require("path");
var assetsDir = path.join(__dirname, 'assets');
exports.srcPics = {
    face: {
        src: path.join(assetsDir, 'face.jpg'),
        x: 381,
        y: 189,
        xOff: 0,
        yOff: 0,
        scale: 1.02
    },
    female: {
        src: path.join(assetsDir, 'female.jpg'),
        x: 400,
        y: 487,
        xOff: 0,
        yOff: 210,
        scale: 0.96
    },
    male: {
        src: path.join(assetsDir, 'male.jpg'),
        x: 375,
        y: 495,
        xOff: 0,
        yOff: 165,
        scale: 1.04
    }
};
