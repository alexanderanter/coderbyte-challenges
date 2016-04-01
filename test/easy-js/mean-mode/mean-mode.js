"use strict";

var myApp = require("../../../src/easy-js/mean-mode/mean-mode");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("12:30pm-12:00am should equal 690", function(done) {
        expect(myApp.myModule("12:30pm-12:00am")).eql(690);
        done();
    });

    it("1:23am-1:08am should equal 1425", function(done) {
        expect(myApp.myModule("1:23am-1:08am")).eql(1425);
        done();
    });
    it("1:00pm-11:00am should equal 1320", function(done) {
        expect(myApp.myModule("1:00pm-11:00am")).eql(1320);
        done();
    });
    it("9:00am-10:00am should equal 60", function(done) {
        expect(myApp.myModule("9:00am-10:00am")).eql(60);
        done();
    });


});
