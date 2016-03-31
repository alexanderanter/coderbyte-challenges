/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";
function getMeMinutes(timeWithEnding) {
    //check if the hours are less then 10
    var lessy = 0;
    if(timeWithEnding[1] === ":") {
      lessy = 1;
    }
    var time = timeWithEnding.substr(0, (5- lessy));
    var timePeriod = timeWithEnding.substr(5- lessy,7- lessy);
    var hours = (time.substr(0, (2 - lessy)) *1) -1;
    var minutes = time.substr(3- lessy,(5 - lessy)) *1;

    if(timePeriod === "pm") {
      hours = 10 + 2 + hours;
      minutes = (hours * 60) + minutes;
    }else {
      minutes = (hours * 60) + minutes;
    }
    return minutes;
}

exports.myModule = function(timePeriod) {

    var result = 0;
    var myTimes = timePeriod.split("-");
    var firstMinutes = getMeMinutes(myTimes[0].substr(0,7));
    var secondMinutes = getMeMinutes(myTimes[1].substr(0,7));

    if(firstMinutes > secondMinutes) {
      result = Math.abs(firstMinutes - 1440 - secondMinutes);
    }else {
      result = Math.abs(firstMinutes - secondMinutes);
    }

    return result;

};
