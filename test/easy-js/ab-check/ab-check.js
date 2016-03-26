"use strict";

var abCheck = require("../../../src/easy-js/ab-check/ab-check");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("'after badly' should return false", function(done) {
        expect(abCheck.abCheck("after badly")).eql(false);
        done();
    });
    it("Laura sobs should return true", function(done) {
        expect(abCheck.abCheck("Laura sobs")).eql(true);
        done();
    });
});
