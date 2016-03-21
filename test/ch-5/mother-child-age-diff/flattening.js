"use strict";

var ageDiff = require("../../../src/ch-5/mother-child-age-diff/mother-child-age-diff");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    var arrays = [[1, 2, 3], [4, 5], [6]];
    it("Should return 31.2", function(done) {
        expect(flattening.flatten(arrays)).eql(31.2);
        done();
    });

});
