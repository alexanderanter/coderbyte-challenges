/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";


exports.secondGreatLow = function(data) {

    var filteredCopy = data.filter(function(elem, index, self) {
        return self.indexOf(elem) === index;
    });

    filteredCopy.sort(function(a, b) {
        return a - b;
    });

    if (filteredCopy.length < 2) {
        return filteredCopy[0] + " " + filteredCopy[0];
    } else {
        return filteredCopy[1] + " " + filteredCopy[filteredCopy.length - 2];
    }

};
