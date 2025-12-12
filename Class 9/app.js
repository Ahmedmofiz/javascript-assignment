// QUESTION 1

alert("Wellcome To JavaScript!")
var a, b
a = prompt("Pleace Enter Your Name")
b = prompt("What's Your Fav Color")
alert(a + "\n" + b)

// // QUESTION 2

var FirstName = "Ahmed"
var LastName = " Raza"

var City = "Karachi"

var Hobby = "Playing Circket"
alert(FirstName + LastName + "\n" + "I live in " + City + "\n" + "My Hobby is " + Hobby)

// QUESTION 3

var num1 = 35
var num2 = 65
alert(num1 + num2)

var Mrequid = +prompt("Enter Your Marks")
var Marks = ["20", "30", "40", "50", "60", "70", "80", "90", "100"]

if (Mrequid >= 50) {
    alert("Cong You're Pass")
}
else {
    alert("Try Next Time")
}

var Agerequid = +prompt("Enter You're Age")
if (Agerequid >= 18) {
    alert("You Eligible to Join US")
}
else {
    alert("You Are Not Eligible")
}

// QUESTION 4

var userName = "Ahmed"
var age_1 = 20
var $price = 560

alert("Legal Variables; " + userName + ", " + age_1 + ", " + $price)

// var 1name = "Ahmed"      
// var full name = "Ahmed raza"
// var let = "Hello"
// var Illegal=[" 1name"," Full name"," let"]
// alert("Illegal Variables;"+Illegal);

var variableNames = ["userName", " age_1", " $city"];

alert("Stored Variable; " + variableNames);

// QUESTION 5

var Num1 = 8
var Num2 = 12

var sum = Num1 + Num2
var difference = Num1 - Num2
alert("SUM " + sum)
alert("DIFFERENCE " + difference)

var a = 8
var b = 5

var product = a * b
var quotient = a / b
var remainder = a % b
alert("PRODUCT " + product)
alert("QUOTIENT " + quotient)
alert("REMAINDER " + remainder)

var number = 80
number++
alert("After Increment " + number)

// QUESTION 6

var num = 10;
num++;
alert("After 10++ = " + num);

num--;
alert("After 10-- = " + num);

var x = 20;
x += 5;
alert("After 20+5 = " + x);

x -= 3
alert("After 25-3 = " + x)

var y = 6
y *= 4
alert("After 6*4 = " + y)

y /= 2
alert("After 24/2 = " + y)

// QUESTION 7

var a = 10
var b = 5
var result1 = (a + b) * 2

var x = 4
var y = 3
var z = 2
var result2 = x + y * z - 5

var p = 6
var q = 2
var r = 4
var result3 = ((p + q) * (r - q)) / 2
alert(result1 + "\n" + result2 + "\n" + result3)

// QUESTION 8

var firstname = "Quaid-e"
var lastname = "-Azam"

var greeting = "Salam "

var string1 = "I "
var string2 = "Love "
var string3 = "Pakistan"
var result = (string1 + string2 + string3)
alert(firstname + lastname + "\n" + greeting + City + "\n" + result)

// QUESTION 9

var Color = prompt("What is you're Fav color")
Color = Color.toUpperCase()
var age2 = +prompt("Please Enter You're Age to Identify")
var fruit = prompt("What is You're Fav Fruit")
fruit = fruit.toUpperCase()
alert("You're Fav Color is " + Color + "\n" +
    "You're Current Age is " + age2 + "\n" +
    "You're Fav Fruit is " + fruit)

//   QUESTION 10

var num = +prompt("Select Any One Number")
if (num < 10) {
    alert("You're Number is Less Than 10")
}
else {
    alert("You're Number is Greater Than 10")
}
var marks1 = +prompt("Enter You're Paper Marks")
if (marks1 >= 50) {
    alert("Pass")
}
else {
    alert("Fail")
}

var age3 = 16
if (age3 < 18) {
    alert("Minor")
}

// QUESTION 11

var a = +prompt("Enter Any One Number")
var b = +prompt("Enter Second Number")
alert(a > b)

var x = +prompt("Guess The Number")
var y = 20
if (x == y) {
    alert("Numbers are equal")
} else {
    alert("Numbers are not equal")
}

var p = +prompt("Enter Any One Number")
var q = +prompt("Enter Second Number")
alert(p <= q)

// QUESTION 12

var marks2 = +prompt("Enter You're Marks")
if (marks2 >= 90) {
    alert("GRADE 'A'")
} else if (marks2 >= 70) {
    alert("GRADE 'B'")
} else {
    alert("GRADE 'C'")
}

var age4 = +prompt("Enter You're Age")
if (age4 < 12) {
    alert("Child")
} else if (age4 < 18) {
    alert("Teen")
} else {
    alert("Adult")
}

var temp = +prompt("You're Envoirment temp")
if (temp >= 35) {
    alert("Hot")
} else if (temp >= 20) {
    alert("Warm")
} else {
    alert("Cold")
}

// QUESTION 13

var num = +prompt("Imagine Any Number")
if (num > 0 && num % 2 === 0) {
    alert("Number is positive and even")
}

var marks3 = 75
if (marks3 >= 50 && marks3 <= 100) {
    alert("Valid Marks")
}

var n = +prompt("Give me Number to Division")
if (n % 3 === 0 && n % 5 === 0) {
    alert("Number is divisible by 3 and 5")
}


// QUESTION 14

var age = +prompt("Enter You're Age")
var hasID = true

if (age >= 18) {
    if (hasID === true) {
        alert("Allowed")
    } else {
        alert("Not Allowed")
    }
} else {
    alert("Not Allowed")
}

var num = +prompt("Choes The Number")

if (num > 0) {
    if (num % 2 === 0) {
        alert("Positive Even Number")
    } else {
        alert("Positive Odd Number")
    }
} else {
    alert("Number is not positive")
}


var marks4 = 60
var extraCredit = true

if (marks4 >= 50) {
    if (extraCredit === true) {
        alert("Pass with Extra Credit")
    } else {
        alert("Pass without Extra Credit")
    }
} else {
    alert("Fail")
}

// QUESTION 15

var fruit = ["Apple", "Banana", "Mango", "Orange", "Grapes"]

var numbers = [10, 20, 30, 40, 50]

var colors = ["Red", "Blue", "Green", "Yellow", "Black"]
alert(fruit + "\n" + "First " + numbers[0] + " Last " + numbers[numbers.length - 1] + "\n" + colors)

// QUESTION 16

var fruits = ["Apple", "Mango", "Banana"]
fruits.push("Orange")
alert(fruits)

var fruits2 = ["Apple", "Mango", "Banana"]
fruits2.pop()
alert(fruits2)

var fruits3 = ["Apple", "Mango", "Banana"]
fruits3.unshift("Grapes")
fruits3.shift()
alert(fruits3)

// QUESTION 17  

var arr1 = ["Apple", "Mango", "Banana"]
arr1.splice(1, 0, "Orange")
alert(arr1)

var arr2 = ["Apple", "Mango", "Banana", "Grapes"]
arr2.splice(2, 1)
alert(arr2)

var arr3 = ["Red", "Blue", "Green", "Yellow", "Black"]
var part = arr3.slice(1, 4)
alert(part)

// QUESTION 18

var i
for (i = 1; i <= 5; i++) {
    alert(i)
}

var fruits = ["Apple", "Mango", "Banana"]
for (i = 0; i < fruits.length; i++) {
    alert(fruits[i])
}

for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        alert(i)
    }
}

// QUESTION 19

var arr4 = [10, 20, -5, 30, 40]
for (var i = 0; i < arr4.length; i++) {
    if (arr4[i] < 0) {
        alert("Negative found " + arr4[i])
        break
    }
    alert(arr4[i])
}

var arr5 = [3, 7, 10, 15]
var flag = false
for (var j = 0; j < arr5.length; j++) {
    if (arr5[j] % 2 === 0) {
        flag = true
    }
}
alert(flag)

var arr6 = [20, 35, 55, 40]
for (var k = 0; k < arr6.length; k++) {
    if (arr6[k] > 50) {
        alert("Stopped at " + arr6[k])
        break
    }
    alert(arr6[k])
}

// QUESTION 20

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i * j))
    }
}

var arr = [
    [10, 20, 30],
    [40, 50, 60]
]

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        alert(arr[i][j])
    }
}

var x = [1, 2, 3]
var y = [4, 5, 6]

for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < y.length; j++) {
        alert(x[i] + y[j])
    }
}

// QUESTION 21

var text1 = "hello world"
alert(text1.toUpperCase())

var text2 = "GOOD MORNING"
alert(text2.toLowerCase())

var text3 = "javascript"
var result = text3.charAt(0).toUpperCase() + text3.slice(1).toLowerCase()
alert(result)

// QUESTION 22


var str1 = "Hello World"
alert("Length " + str1.length)

var str2 = "JavaScript"
alert("First 3 chars " + str2.slice(0, 3))

var str3 = "Programming"
alert("Last 3 chars " + str3.slice(-3))

// QUESTION 23

var str4 = "I love JavaScript"
var position = str4.indexOf("JavaScript");
alert("Position of 'JavaScript' " + position)

var str5 = "Programming"
var lastIndex = str5.lastIndexOf("g")
alert("Last index of 'g' " + lastIndex)

var str6 = "Hello World"
var exists = str6.includes("World")
alert("Substring 'World' exists " + exists)

// QUESTION 24'


var str7 = "JavaScript"
alert("Character at index 2 " + str7.charAt(2))

var str8 = "Programming"
alert("Last character " + str8.charAt(str8.length - 1))

var str9 = "HelloWorld"
var middleIndex = Math.floor(str9.length / 2)
alert("Middle character " + str9.charAt(middleIndex))

// QUESTION 25

var str10 = "I love JavaScript"
var replaced1 = str10.replace("JavaScript", "Python")
alert(replaced1)

var str11 = "banana"
var replaced2 = str11.replace(/a/g, "o")
alert(replaced2)

var str12 = "Hello World, Hello Everyone"
var replaced3 = str12.replace("Hello", "Hi")
alert(replaced3)