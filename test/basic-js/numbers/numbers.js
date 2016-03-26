"use strict";

var numbers = require("../../../src/basic-js/numbers/numbers");
var expect = require("chai").expect;

describe("Test the module with kind number values", function() {
    it("Should return 2:6", function(done) {
        expect(numbers.timeConvert(126)).eql("2:6");
        done();
    });
    it("Should return 720", function(done) {
        expect(numbers.factorial(6)).eql(720);
        done();
    });
    it("Should return 78", function(done) {
        expect(numbers.simpleAdding(12)).eql(78);
        done();
    });
    it("Should return true", function(done) {
        expect(numbers.checkNums(12,88)).eql(true);
        done();
    });
    it("Should return -1", function(done) {
        expect(numbers.checkNums(12,12)).eql("-1");
        done();
    });
});
