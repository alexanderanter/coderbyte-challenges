"use strict";

var myApp = require("../../../src/easy-js/mean-mode/mean-mode");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("[1, 2, 3] should equal 0", function(done) {
        expect(myApp.myModule([1, 2, 3])).eql(0);
        done();
    });
    it("[4, 4, 4, 6, 2] should equal 1", function(done) {
        expect(myApp.myModule([4, 4, 4, 6, 2])).eql(1);
        done();
    });
    it("[5, 3, 3, 3, 1] should equal 1", function(done) {
        expect(myApp.myModule([5, 3, 3, 3, 1])).eql(1);
        done();
    });

});
