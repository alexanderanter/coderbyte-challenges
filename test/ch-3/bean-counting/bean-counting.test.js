"use strict";

var beanCount = require("../../../src/ch-3/bean-counting/bean-counting");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return a 2", function(done) {

        expect(beanCount.countBs("BBC")).eql(2);
        done();
    });
    it("Should return a 4", function(done) {
        expect(beanCount.countChar("kakkerlak", "k")).eql(4);
        done();
    });
});
