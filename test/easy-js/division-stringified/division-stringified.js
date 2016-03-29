"use strict";

var divisionStringified = require("../../../src/easy-js/division-stringified/division-stringified");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("2,3 should return 1", function(done) {
        expect(divisionStringified.divisionStringified(2,3)).eql("1");
        done();
    });
    it("123456789, 10000 should return 12,346", function(done) {
        expect(divisionStringified.divisionStringified(123456789, 10000)).eql("12,346");
        done();
    });
    it("5, 2 should return 3", function(done) {
        expect(divisionStringified.divisionStringified(5, 2)).eql("3");
        done();
    });
    it("6874, 67 should return 103", function(done) {
        expect(divisionStringified.divisionStringified(6874, 67)).eql("103");
        done();
    });

    it("1, 10 should return 0", function(done) {
        expect(divisionStringified.divisionStringified(1, 10)).eql("0");
        done();
    });
    it("503394930, 43 should return 11,706,859", function(done) {
        expect(divisionStringified.divisionStringified(503394930, 43)).eql("11,706,859");
        done();
    });
    it("5, 54 should return 0", function(done) {
        expect(divisionStringified.divisionStringified(5, 54)).eql("0");
        done();
    });

    it("175, 24 should return 7", function(done) {
        expect(divisionStringified.divisionStringified(175, 24)).eql("7");
        done();
    });

    it("9112, 2 should return 4,556", function(done) {
        expect(divisionStringified.divisionStringified(9112, 2)).eql("4,556");
        done();
    });

    it("101077282, 21123 should return 4,785", function(done) {
        expect(divisionStringified.divisionStringified(101077282, 21123)).eql("4,785");
        done();
    });



});
