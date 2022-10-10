let players = true;

function tap(id) {
    if (players == true) {
        document.getElementById(id).innerHTML = "<h1>X</h1>";
    }
    else {
        document.getElementById(id).innerHTML = "<h1>O</h1>";
    }
}

function player(x) {
    players = x;
    console.log(players);
}

function reset() {
    for (let i=1; i <= 9; i++) {
        document.getElementById('box' + i).innerHTML = "";
        }
    }
