"use strict";

var palindrome = require("../../../src/easy-js/palindrome/palindrome");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("xooxxo should return true", function(done) {
        expect(palindrome.palindrome("heh")).eql(true);
        done();
    });
    it("xooxxo should return true", function(done) {
        expect(palindrome.palindrome("hheh")).eql(false);
        done();
    });
    it("never odd or even should return true", function(done) {
        expect(palindrome.palindrome("never odd or even")).eql(true);
        done();
    });

});
