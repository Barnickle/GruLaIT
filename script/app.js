
function myColor() {
    document.getElementById("colorfield").style.color = getRandomColor();
}

function myBackground() {
    document.getElementById("colorfield").style.background = getRandomColor();
}

function myReset() {
    document.getElementById("colorfield").style.background = "green";
    document.getElementById("colorfield").style.color = "white";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


