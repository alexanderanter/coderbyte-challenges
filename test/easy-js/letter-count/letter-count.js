"use strict";

var letterCount = require("../../../src/easy-js/letter-count/letter-count");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("letterCounte", function(done) {
        expect(letterCount.letterCount("bbbbbb woppy dolly feeel")).eql("bbbbbb");
        done();
    });
    it("No words expect -1", function(done) {
        expect(letterCount.letterCount("No words")).eql(-1);
        done();
    });
});
// Input = "Hello apple pie"Output = "Hello"
// Input = "No words"Output = -1
