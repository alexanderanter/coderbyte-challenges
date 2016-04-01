/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.myModule = function(data) {

  //copy the array
  var copiedArray = data.slice();
  var totalSum = 0;
  var result = [];

  var meanPoint = 0;
  var mostFreq;
  var mostFreqCount = 0;
  var firstNum = 0;
  var secondNum = 0;
  var modeVal = 0;

//Check the input
  for(var i = 0; i < copiedArray.length; i++) {
    totalSum += copiedArray[i];

  }

  meanPoint = totalSum / copiedArray.length;

  console.log(meanPoint);

  if(meanPoint === modeVal) {
    result = 1;
  }else {
    result = 0;
  }
  return result;

};

console.log(exports.myModule([5, 3, 3, 3, 1]));
