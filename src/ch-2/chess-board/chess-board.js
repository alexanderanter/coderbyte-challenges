/**
 * Module for creating a chessboard
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.getBoard = function(boardSize) {
    var chessBoard = "";
    var i = 0;
    for (i; i < boardSize; i++) {
        var j = 0;
        for (j; j < boardSize; j++) {

            if (j % 2 === 0) {
                if (i % 2 === 0) {
                    chessBoard += "#";
                } else {
                    chessBoard += " ";
                }

            } else {
                if (i % 2 === 0) {
                    chessBoard += " ";
                } else {
                    chessBoard += "#";
                }
            }
        }

        chessBoard += "\n";
    }

    return chessBoard;
};
