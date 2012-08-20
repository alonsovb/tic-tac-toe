$(document).ready(init);
var actual = 1;
var board,
    winningCombinations;

function init() {
    var x = 3, y = 3,
		w = 100, h = 100;

    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    board = new Array(x * y);
    $("#board").css("width", (x * (w + 2)) + "px");
    $("#board").css("height", (y * (h + 2)) + "px");
    $("#panel").css("height", (y * (h + 2)) + "px");
    for (var i = 0; i < x * y; i++) {
        board[i] = 0;
        var d = document.createElement("div");
        $("#board").append(d);
        $(d).attr("class", "space");
        $(d).attr("position", i);
    }
    $(".space").click(put);
    $(".space").css("width", w);
    $(".space").css("height", h);
}

function put() {
    var pos = parseInt($(this).attr("position"));
    // Comprobar que la casilla está vacía
    if (board[pos] === 0) {
        board[pos] = actual;
        if (actual === 1) {
            $(this).css("color", "#55c");
            $(this).text("X");
            $("#turn").text("Turno del jugador O");
        } else {
            $(this).css("color", "#c55");
            $(this).text("O");
            $("#turn").text("Turno del jugador X");
        }
        check(board, actual);
        actual *= -1;
    }
}

// Revisar en todas las direcciones de una casilla en busca de un gane.
function check(aBoard, player) {
    for (var i = 0; i < winningCombinations.length; i++) {
        if (board[winningCombinations[i][0]] === player && board[winningCombinations[i][1]] === player && board[winningCombinations[i][2]] === player) {
            // alert(player + " GANA"); Mostrar gane
                  }
    }
}