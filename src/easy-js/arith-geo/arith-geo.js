/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";
//creates an object with a key for each chars and the value of their occurrences

exports.arithGeo = function(data) {
  var result = '';
  var arithmetic = true;
  var geometric = true;
  var i = 0;
  var len = data.length - 1;
  var diff = Math.abs(data[0] - data[1]);
  var div = data[1] / data[0];

  for (i; i < len; i++) {

    if ( (Math.abs(data[i] - data[i+1])) !== diff) {
      arithmetic = false;
    }
    if(data[i] * div !== data[i+1]) {
      geometric = false;
    }
  }
  
  if(arithmetic === true) {
    result = "Arithmetic";
  }else if (geometric === true) {
    result = "Geometric";
  }else {
    result = -1;
  }

  return result;

};
