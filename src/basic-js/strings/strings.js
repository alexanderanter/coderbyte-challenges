/**
 * Module for bean counting
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.reverse = function(str) {
    var result = '';

    var i = str.length - 1;
    for (i; i >= 0; i--){
    	result += str[i];
    }

    return result;
};
