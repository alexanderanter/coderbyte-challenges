"use strict";

var beanCount = require("../../../src/basic-js/strings/strings");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return cba", function(done) {
        expect(beanCount.reverse("abc")).eql("cba");
        done();
    });
});
