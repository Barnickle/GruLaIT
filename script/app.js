
function myColor() {
    document.getElementById("button").style.color = getRandomColor();
}

function myBackground() {
    document.getElementById("button").style.background = getRandomColor();
}

function myReset() {
    document.getElementById("button").style.background = "green";
    document.getElementById("button").style.color = "white";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


