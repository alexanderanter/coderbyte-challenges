"use strict";

var arrays = require("../../../src/basic-js/arrays/arrays");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return 2", function(done) {
        expect(arrays.vowelCount("hello")).eql(2);
        done();
    });
    it("Should return time", function(done) {
        expect(arrays.longestWord("fun&!! time")).eql("time");
        done();
    });
    it("Should return paragraph", function(done) {
        expect(arrays.longestWord("the longest word is in this paragraph is paragraph")).eql("paragraph");
        done();
    });
    it("Should return abcde", function(done) {
        expect(arrays.alphabetSoup("acbde")).eql("abcde");
        done();
    });
});
