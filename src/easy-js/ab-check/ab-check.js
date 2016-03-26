/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.abCheck = function(data) {
  var result = false;
    var arr = data.split("");
  	var i = 0;
    var len = arr.length;
    for(i; i < len; i++) {
      if(arr[i] === "a"){
        if(arr[i+4] === "b" || arr[i-4] === "b"){
          result = true;
        }
      } else if(arr[i] === "b"){
                if(arr[i+4] === "a" || arr[i-4] === "a"){
          result = true;
        }
      }
    }

	return result;
};
