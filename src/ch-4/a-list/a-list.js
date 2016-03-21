/**
 * Module for a list
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.arrayToList = function(data, level) {
    var result = {};

    if (level === undefined) {
        level = 0;
    }

    result = {
        value: data[level],
        rest: null
    };

    if (data.length > level + 1) {

        result = {
            value: data[level],
            rest: exports.arrayToList(data, level + 1)
        };
    }

    return result;

};

exports.listToArray = function(data, result) {
    result = result || [];

    result.push(data.value);
    if (data.rest) {
        exports.listToArray(data.rest, result);
    }

    return result;
};

exports.prepend = function(a, b) {
    var result = {
        value: a,
        rest: b
    };

    return result;
};

exports.nth = function(data, nthVal) {

    if (!data) {
        return undefined;
    }

    else if (nthVal === 0) {
        return data.value;
    }

    else {
        return exports.nth(data.rest, nthVal - 1);
    }

};
