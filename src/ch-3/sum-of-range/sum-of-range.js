/**
 * Module for calculating the sum of a range
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.range = function(a, b, c) {
    var result = [];
    var i = b;

//if step is not set it will go to 1
    var step = c || 1;
    var bigNum = 0;
    var reverse = false;
    if (a > b) {
        bigNum = a;
        i = b;
        reverse = true;
    }else {
        bigNum = b;
        i = a;
    }

    //Turn negative steps to positive
    step = Math.abs(step);
    for (i; i <= bigNum; i += step) {
        result.push(i);
    }

    if (reverse === true) {
        result.reverse();
    }

    return result;
};

exports.sum = function(arry) {
    var result = 0;
    var i = 0;
    for (i; i < arry.length; i++) {
        result += arry[i];
    }

    return result;
};
