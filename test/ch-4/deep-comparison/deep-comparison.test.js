"use strict";

var deepComparison = require("../../../src/ch-4/deep-comparison/deep-comparison");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
  var obj = {here: {is: "an"}, object: 2};
    it("Should return true", function(done) {

        expect(deepComparison.deepEqual(obj, obj)).eql(true);
        done();
    });
    it("Should return false", function(done) {

        expect(deepComparison.deepEqual(obj, {here: 1, object: 2})).eql(false);
        done();
    });
    it("Should return true", function(done) {

        expect(deepComparison.deepEqual(obj, {here: {is: "an"}, object: 2})).eql(true);
        done();
    });
});
