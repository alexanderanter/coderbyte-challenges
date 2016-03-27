"use strict";

var arrayAddition = require("../../../src/easy-js/array-addition/array-addition");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    // it("5,7,16,1,2 should return false", function(done) {
    //     expect(arrayAddition.arrayAddition([5,7,16,1,2])).eql(false);
    //     done();
    // });
    it("3,5,-1,8,12 should return true", function(done) {
        expect(arrayAddition.arrayAddition([3,5,-1,8,12])).eql(true);
        done();
    });
});
