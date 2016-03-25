"use strict";

var deepComparison = require("../../../src/basic-js/reverse-a-string/reverse-a-string");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return cba", function(done) {
        expect(reversedString("abc")).eql("cba");
        done();
    });
});
