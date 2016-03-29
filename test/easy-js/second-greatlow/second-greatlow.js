"use strict";

var secondGreatLow = require("../../../src/easy-js/second-greatlow/second-greatlow");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("3,5,-1,8,12 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([3,5,-1,8,12])).eql(3 + " " + 8);
        done();
    });
    it("3,5,-1,8,12 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([4, 90])).eql(90 + " " + 4);
        done();
    });

    it("3,5,-1,8,12 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([1, 42, 42, 180])).eql(42 + " " + 42);
        done();
    });


    it("2,2,2,5,5,5,6should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([2,2,2,5,5,5,6])).eql(5 + " " + 5);
        done();
    });
    it("78, 90, 100, 1, 2 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([78, 90, 100, 1, 2])).eql(2 + " " + 90);
        done();
    });

    it("-4, -5, 10, 2 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([-4, -5, 10, 2])).eql(-4 + " " + 2);
        done();
    });



    it("100, 200, 3, 400, 5, 1 should return true", function(done) {
        expect(secondGreatLow.secondGreatLow([100, 200, 3, 400, 5, 1])).eql(3 + " " + 200);
        done();
    });

    it("4, 60, 7, 188 should return  ", function(done) {
        expect(secondGreatLow.secondGreatLow([4, 60, 7, 188])).eql(7 + " " + 60);
        done();
    });

    it("7, 7, 90, 1000003 should return ", function(done) {
        expect(secondGreatLow.secondGreatLow([7, 7, 90, 1000003])).eql(90 + " " + 90);
        done();
    });

});
