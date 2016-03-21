/**
 * Module for flattening
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.flatten = function(arr) {
    var copiedArr = arr.slice();

    return copiedArr.reduce(function(a, b) {
        return a.concat(b);
    }, []);
};
