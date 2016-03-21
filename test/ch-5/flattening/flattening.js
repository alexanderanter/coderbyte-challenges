"use strict";

var flattening = require("../../../src/ch-5/flattening/flattening");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    var arrays = [[1, 2, 3], [4, 5], [6]];
    it("Should return [1,2,3,4,5,6]", function(done) {
        expect(flattening.flatten(arrays)).eql([1, 2, 3, 4, 5, 6]);
        done();
    });

});
