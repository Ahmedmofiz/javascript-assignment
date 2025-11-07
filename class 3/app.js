
alert("Ahmed Raza");
alert("Mohammad Mofiz");
alert("ahmedmofizff07058@gmail.com");
alert("12345678998");
alert("Password");

alert("I'm learning JavaScript");


alert("Welcome to my first JavaScript code");

// Chapter 2 

var userName;

var greeting;
greeting = "Hello there!";
alert(greeting);

var teamName = "Code Masters";
alert(teamName);


var bestMan = "Charlie";
bestMan = "Ahmed";
alert(bestMan);
var caseQty;
caseQty = 144;
alert(caseQty);
var num = 9;
var total;
total = 5 + 10;
alert(total);
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);
var price = 20;
price = price + 10;
alert(price);

document.write("<h1>legal varibale</h1>")
document.write("firstName, lastName, age <br>")
document.write("userName<br>")
document.write("$price<br>")
document.write("_total<br>")
document.write("first_name<br>")
document.write("myVariable1<br>")


document.write("<h1>Illegal variable</h1>")
document.write("1name<br>")
document.write("full-name<br>")
document.write("alert<br>")
document.write("user name<br>")
document.write("@total<br>")


document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name <br>");
document.write("Variable names are case sensitive. <br>");
document.write("Variable names should not be JS keywords. <br>");


var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + ",<br>");





var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.write("Subtraction: " + sub + "<br>");
document.write("Multiplication: " + mul + "<br>");
document.write("Division: " + div + "<br>");
document.write("Modulus: " + mod + "<br><br>");

// Variable 
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br><br>");


var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");


var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");


var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
var fTemp = 70;
document.write(celsius + "C is " + fahrenheit + "F<br>");
document.write(fTemp + "F is " + cTemp + "C<br><br>");
var cTemp = (fTemp - 32) * 5 / 9;


var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharges = 100;
var total = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + total + " PKR<br><br>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("Result is: " + result + "<br><br>");

var currentYear = 2025;
var birthYear = 2002;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>");

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

var snack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var perDay = 3;
var totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount per day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + "<br><br>");

var a = 10;
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

var userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome to JavaScript.");

var number = +prompt("Enter a number for multiplication table:", 5);
document.write("<h3>Multiplication Table of " + number + "</h3>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br>");

var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;
var sub1Marks = +prompt("Enter obtained marks for " + sub1 + ":");
var sub2Marks = +prompt("Enter obtained marks for " + sub2 + ":");
var sub3Marks = +prompt("Enter obtained marks for " + sub3 + ":");

var totalObtained = sub1Marks + sub2Marks + sub3Marks;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<table border='1' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + sub1Marks + "</td><td>" + (sub1Marks) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + sub2Marks + "</td><td>" + (sub2Marks) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + sub3Marks + "</td><td>" + (sub3Marks) + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>300</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");
