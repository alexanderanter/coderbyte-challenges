"use strict";

var loopy = require("../../../src/ch-2/looping-a-triangle/looping-a-triangle");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("description of what the test do", function(done) {
        expect(loopy.triangleLoop()).eql("somtehing");
        done();
    });
});
