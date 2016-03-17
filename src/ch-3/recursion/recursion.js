/**
 * Module for recursion
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

var result = false;

exports.isEven = function(argy) {

    if (argy === 0) {
        result = true;
    } else if (argy === 1) {
        result = false;
    } else if (argy < 0) {
        argy += 2;
        exports.isEven(argy);
    } else {
        argy -= 2;
        exports.isEven(argy);
    }

    return result;
};
