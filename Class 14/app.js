function getvalue(val) {
    var input = document.getElementById("display");
    input.value += val;
}
function deleteall() {
    var input = document.getElementById("display");
    input.value = "";
}
function backspace() {
    var input = document.getElementById("display");
    input.value = input.value.slice(0, -1);
}
function equl() {
    var input = document.getElementById("display");
    if (input.value) {
        input.value = eval(input.value);
    }
    else {
        input.value = "syntex error"
    }
}
function toggleSign() {
    var input = document.getElementById("display");
    if (input.value) {
        input.value = eval(input.value) * -1;
    }
}

function sin() {
    var input = document.getElementById("display");
    if (input.value) {
        input.value = Math.sin(eval(input.value) * Math.PI / 180);
    }
}
function cos() {
    var input = document.getElementById("display");
    if (input.value) {
        input.value = Math.cos(eval(input.value) * Math.PI / 180);
    }
}
function tan() {
    var input = document.getElementById("display");
    if (input.value) {
        input.value = Math.tan(eval(input.value) * Math.PI / 180);
    }
}
function squareRoot() {
    var input = document.getElementById("display");
    if (input.value !== "") {
        input.value = Math.sqrt(Number(input.value));
    }
}

function square() {
    var input = document.getElementById("display");
    if (input.value !== "") {
        input.value = Number(input.value) * Number(input.value);
    }
}

function expfunction() {
    var input = document.getElementById("display");
    if (input.value !== "") {
        input.value = Math.exp(Number(input.value));
    }
}


