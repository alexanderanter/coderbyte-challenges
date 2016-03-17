/**
 * Module for creating a functin that returns the minimum of two arguments
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.min = function(arg1, arg2) {
    var result = 0;
    if (arg1 < arg2) {
        result = arg1;
    }else if (arg1 === arg2) {
        result = "EQUAL";
    }else {
        result = arg2;
    }

    return result;
};
