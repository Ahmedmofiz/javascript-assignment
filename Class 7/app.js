// QUESTION 1

var Emtyarr = [[], [], []];

// QUSETION 2

var matrix = [
    [0, 1, 2, 3]
    [1, 0, 1, 2]
    [2, 1, 0, 1]
]
document.write(matrix)

// QUESTION 3

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

document.write("<br>")

// QUESTION 4

var number = +prompt("Table number")
var length = +prompt("Table length")
for (var i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>")
}
document.write("<br>")

// QUESTION 5

var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>")

// QUESTION 6

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

document.write("<br>")
for (var i = 10; i >= 1; i--) {
    document.write(i + " ");
}
document.write("<br>")
for (var i = 0; i <= 20; i += 2) {
    document.write(i + " ");
}
document.write("<br>")
for (var i = 1; i <= 19; i += 2) {
    document.write(i + " ");
}
document.write("<br>")
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k ");
}
document.write("<br>")

// QUESTION 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("What do you want to order?");

var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === user) {
        found = true;
        break;
    }
}

if (found) {
    alert(user + " is available!");
} else {
    alert("Sorry, " + user + " is not available.");
}
document.write("<br>")

// QUESTION 8

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Largest number is: " + largest);
document.write("<br>")

// QUESTION 9

var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.write("Smallest number is: " + smallest);
document.write("<br>")

// QUESTION 10

for (var i = 5; i <= 100; i += 5) {
    document.write(i + " ");
}
