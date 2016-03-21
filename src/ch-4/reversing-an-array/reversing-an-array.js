/**
 * Module for reversing an array
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.reverseArray = function(orgArr) {
    var newArr = [];
    var i = orgArr.length - 1;

    for (i; i >= 0; i--) {
        newArr.push(orgArr[i]);
    }

    return newArr;
};

exports.reverseArrayInPlace = function(revArrInP) {
    var i = 0;
    var level = revArrInP.length;
    var copiedArray = revArrInP.slice();

    for (i; i < revArrInP.length; i++) {
        --level;
        revArrInP[i] = copiedArray[level];
    }

    return revArrInP;
};
