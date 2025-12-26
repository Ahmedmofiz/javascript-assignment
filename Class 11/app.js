// QUESTION 1
function datetime() {
    var date = new Date();
    document.write(date);
}
datetime();

// QUESTION 2
function user(firstname, lastname) {
    alert("Hello " + firstname + lastname + "!" + " wellcome");
}
user("Ahmed ", "raza");

// QUESTION 3
function add() {
    var num1 = +prompt("Enter Any Number to Addition")
    var num2 = +prompt("Enter Any Number to Addition");
    return num1 + num2;
}
var result = add();
document.write(+ "The sum is: " + result);

// QUESTION 4

function calculator(number1, number2, operator) {
    var result1
    if (operator === "+") {
        result1 = number1 + number2
    } else if (operator === "-") {
        result1 = number1 - number2
    } else if (operator === "*") {
        result1 = number1 * number2
    } else if (operator === "/") {
        result1 = number1 / number2
    } else {
        result1 = "You use worng operator"
    }
    return result1
}
var number1 = +prompt("Enter Your Fist Number")
var number2 = +prompt("Enter Your Second Number")
var operators = prompt("Enter Any One Operator(+,-,*,/)")

var total=calculator(number1, number2, operators)
document.write(total)   

// QUESTION 5

function squre(a){
    return a*a
}

 alert (squre(5))
 alert (squre(6))
 alert (squre(9.5))

//  QUESTUION 6

function factorial(b){
if (b <0)
    return"WORNG"
var result2=5
for(let i=5;i<=b;i++){
    result2*=i
}
return result2
}

alert(factorial(4))
alert(factorial(5))
alert(factorial(0))

// QUESTION 7

function counting(a, b) {
    for (let i = a; i <= b; i++) {
        document.write(i + "<br>")
    }
}

var a = +prompt("Enter First number")
var b = +prompt("Enter Second number")
counting(a, b)

// QUESTION 8

function Hypo() {

    function Square(a) {
        return a * a;
    }

    let base = parseFloat(prompt("Enter base:"));
    let perpendicular = parseFloat(prompt("Enter perpendicular:"));

    if (isNaN(base) || isNaN(perpendicular) || base <= 0 || perpendicular <= 0) {
        console.log("Please enter valid positive numbers!");
        return;
    }

    let hypotenuse = Math.sqrt(Square(base) + Square(perpendicular));

    console.log("Hypotenuse: " + hypotenuse);
}
Hypo();

// QUESTION 9

function rectangle(width,height){
    return width*height
}

var area =rectangle(4,8)
alert(area)

var h=6
var w=12
var area1=rectangle(w,h)
alert(area1)

// QUESTION 10

function palindrome(word1) {
    var reversword = ""
    for (var j = word1.length - 1; j >= 0; j--) {
        reversword = reversword + word1[j]
    }
    if (word1 === reversword) {
        return "Palindrome"
    } else {
        return "Not Palindrome"
    }
}

alert(palindrome("MADAM"))
alert(palindrome("HELLO"))

// QUESTION 11

function capitalize(sentence) {
    var words1 = sentence.split(" ")
    var result = []

    for (var i = 0; i < words1.length; i++) {
        var word = words1[i]
        var capitalizeword = word[0].toUpperCase() + word.slice(1)
        result.push(capitalizeword)
    }
    return result.join("")
}
alert(capitalize("The Box"))

// QUESTION 12

function longestWord(sentence) {
    var words = sentence.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

alert(longestWord("Web Development Tutorial"));

// QUESTION 13

function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

alert(countLetter("JSResourceS.com", "o"));

// QUESTION 14

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference;
}

alert(calcCircumference(5));

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    return "The area is " + area;
}

alert(calcArea(5));
