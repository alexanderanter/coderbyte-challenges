"use strict";

var exOh = require("../../../src/easy-js/ex-oh/ex-oh");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("xooxxo should return true", function(done) {
        expect(exOh.exOh("xooxxo")).eql(true);
        done();
    });
    it("x should return false", function(done) {
        expect(exOh.exOh("x")).eql(false);
        done();
    });
});
