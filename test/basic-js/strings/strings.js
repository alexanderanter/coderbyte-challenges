"use strict";

var strings = require("../../../src/basic-js/strings/strings");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return cba", function(done) {
        expect(strings.reverse("abc")).eql("cba");
        done();
    });
    it("Should return Big B:s", function(done) {
        expect(strings.capitalizeFirstL("big b:s")).eql("Big B:s");
        done();
    });
    it("Should return gvO Ujnft!", function(done) {
        expect(strings.letterChanges("fun times!")).eql("gvO Ujnft!");
        done();
    });
});
describe("Testing simple symbols", function() {
    it("Should return true", function(done) {
        expect(strings.simpleSymbols("+d+=3=+s+")).eql(true);
        done();
    });
    it("Should return false", function(done) {
        expect(strings.simpleSymbols("f++d+")).eql(false);
        done();
    });
    it("Should return false", function(done) {
        expect(strings.simpleSymbols("+d===+a+")).eql(false);
        done();
    });
    it("Should return false", function(done) {
        expect(strings.simpleSymbols("+a=")).eql(false);
        done();
    });
    it("Should return false", function(done) {
        expect(strings.simpleSymbols("==a+")).eql(false);
        done();
    });
});
