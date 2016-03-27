"use strict";

var arithGeo = require("../../../src/easy-js/arith-geo/arith-geo");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {
    it("5,10,15 should return Arithmetic", function(done) {
        expect(arithGeo.arithGeo([5,10,15])).eql("Arithmetic");
        done();
    });
    it("2,4,16,24 should return -1", function(done) {
        expect(arithGeo.arithGeo([2,4,16,24])).eql(-1);
        done();
    });
    it("2,6,18,54 should return Geomatric", function(done) {
        expect(arithGeo.arithGeo([2,6,18,54])).eql("Geomatric");
        done();
    });
    it("2,6,18,54 should return Geomatric", function(done) {
        expect(arithGeo.arithGeo([100,200,400,1600])).eql(-1);
        done();
    });
    it("2,6,18,54 should return Geomatric", function(done) {
        expect(arithGeo.arithGeo([5,10,20,40,80])).eql("Geomatric");
        done();
    });
    // 1. When the input was (2,6,18,54) your output was incorrect.
    // 2. When the input was (100,200,400,800,1600) your output was incorrect.
    // 3. When the input was (5,10,20,40,80) your output was incorrect.

});
