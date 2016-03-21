/**
 * Module for comparing objects
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.deepEqual = function(objA, objB) {
    if (typeof objA === "object" && objA !== null && typeof objB === "object" && objB !== null) {
      var result = true;
      var keysA = Object.keys(objA);

      keysA.forEach(function(key) {
        //check if the property is an object on both objects and if it is send it back into the function recursively
        if (typeof objA[key] === "object" && objA[key] !== null && typeof objB[key] === "object" && objB[key] !== null) {
            exports.deepEqual(objA[key], objB[key]);
            //as the property isn't a object we check if it equals objB property and set result to false if not
        }else if (objB[key] !== objA[key]) {
            result = false;
        }

      });

      return result;
    }else {
      return console.log("not valid input");
    }
};
