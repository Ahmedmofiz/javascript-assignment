var students = [];

var students = new Array();

var colors = ["red", "green", "blue"];

var numbers = [1, 2, 3, 4];

var bools = [true, false, true];

var mixed = ["Ahmed", 20, true, 5.5];

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];

document.write("Qualifications:<br> <br>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i+1) + ") " + qualifications[i] + " <br> <br>");
}

var names = ["Ali", "Sara", "Rizwan"];
var scores = [400, 350, 480];
var total = 500;

for (var i = 0; i < names.length; i++) {
  var per = (scores[i] / total) * 100;
  document.write(names[i] + " scored " + scores[i] + " (" + per + "%)<br>");
}

var colors = ["red", "green", "blue"];
document.write(colors + "<br><br>");

var a = prompt("Add color at beginning:");
colors.unshift(a);
document.write(colors + "<br>");

var b = prompt("Add color at end:");
colors.push(b);
document.write(colors + "<br>");

colors.unshift("purple", "orange");
document.write(colors + "<br>");

colors.shift();
document.write(colors + "<br>");

colors.pop();
document.write(colors + "<br>");

var indexAdd = +prompt("Index to add:");
var colorAdd = prompt("Color name:");
colors.splice(indexAdd, 0, colorAdd);
document.write(colors + "<br>");

var indexDel = +prompt("Index to delete:");
var countDel = +prompt("How many to delete?");
colors.splice(indexDel, countDel);
document.write(colors + "<br>");

var scores = [320, 230, 480, 120];
document.write("Original: " + scores + "<br>");
scores.sort();
document.write("Sorted: " + scores + "<br>");

var cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
var selected = cities.slice(1, 4);
document.write("Selected Cities: " + selected );


var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.write(result);

var fifo = [];

fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");

document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");

var lifo = [];

lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");

document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");
