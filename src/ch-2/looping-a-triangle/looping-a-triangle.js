/**
 * Module for looping a triangle
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.triangleLoop = function() {
    var triangleBlocks = "";
    var i = 0;
    for (i; i < 7; i++) {
        triangleBlocks += "#";
        console.log(triangleBlocks);

    }
    return triangleBlocks;
};
