"use strict";

var arrays = require("../../../src/basic-js/arrays/arrays");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("Should return 2", function(done) {
        expect(arrays.vowelCount("hello")).eql(2);
        done();
    });
});
