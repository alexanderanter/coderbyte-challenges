/**
 * Module for bean counting
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.countBs = function(a) {
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) === "B") {
            result += 1;
        }
    }

    return result;
};

exports.countChar = function(a, b) {
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) === b) {
            result += 1;
        }
    }

    return result;
};
