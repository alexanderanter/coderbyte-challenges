"use strict";

var numbers = require("../../../src/basic-js/numbers/numbers");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return 2:6", function(done) {
        expect(numbers.timeConvert(126)).eql("2:6");
        done();
    });
    it("Should return 720", function(done) {
        expect(numbers.factorial(6)).eql(720);
        done();
    });

});
