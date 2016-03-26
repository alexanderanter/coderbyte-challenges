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
exports.capitalizeFirstL = function(str) {
  var words = str.split(" ");
  var i;

  for(i = 0; i < words.length; i ++) {
    //substr first value choses the index and the second how many chars it should take
    words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
  }

  //join flattens the array out and put them all together and the argument is what will be put in between each item of the array
  return words.join(" ");
};
exports.letterChanges = function(str) {
  var result = '';
  var vowels = "aeiou";

  for (var i = 0; i < str.length; i++) {

    if(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
      if(vowels.indexOf(String.fromCharCode(str.charCodeAt(i) + 1 )) > -1){
    	result += String.fromCharCode(str.charCodeAt(i) + 1 ).toUpperCase();
      }else {
       result += String.fromCharCode(str.charCodeAt(i) + 1 );
      }
    }else {
    	result += String.fromCharCode(str.charCodeAt(i));
    }

  }
  return result;
};

exports.simpleSymbols = function(str) {

  	var result = true;
    var len = str.length;
  	var i;
  	for(i = 0; i < len; i++) {
      if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        if(i - 1 < 0 || i + 1 > str.length || str[i-1] !== '+' || str[i+1] !== '+'){
          return false;
        }
      }
    }
  return result;
};
