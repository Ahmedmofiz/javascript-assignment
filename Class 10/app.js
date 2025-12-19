// QUESTION 1

var num = +prompt("Enter a positive number like: 5.645")
document.write("Number " + num + "<br>")
document.write("Roun off value " + Math.round(num) + "<br>")
document.write("Floor value " + Math.floor(num) + "<br>")
document.write("Ceil value " + Math.ceil(num) + "<br>")

// QUESTION 2

document.write("<br>")
var num2 = +prompt("Enter a negative Flooting number")
document.write("Number " + num2 + "<br>")
document.write("Roun off value " + Math.round(num2) + "<br>")
document.write("Floor value " + Math.floor(num2) + "<br>")
document.write("Ceil value " + Math.ceil(num2) + "<br>")

// QUESTION 3

document.write("<br>")
var num3 = +prompt("Enter a number")
document.write("Number " + num3 + "<br>")
document.write("Absolute value " + Math.abs(num3) + "<br>")

// QUESTION 4

document.write("<br>")
var dice = Math.floor(Math.random() * 6) + 1
document.write("Dice value " + dice+"<br>")

// QUESTION 5

document.write("<br>")
var toss = Math.floor(Math.random() * 2)
var result = (toss === 0) ? "Heads" : "Tails"
document.write("Coin toss result " + result+"<br>")

// QUESTION 6   

document.write("<br>")
var randomnumber = Math.floor(Math.random() * 100) + 1

// QUESTION 7

document.write("<br>")
var input = +prompt("Enter youre weight")
if (!isNaN(input)) {
    document.write("Youre Weight is " + input + " Killogram"+"<br>")
} else {
    document.write("Invilad input please enter your wegiht correctly"+"<br>")
}

// QUESTION 8

document.write("<br>")
var secretnumber = Math.floor(Math.random() * 10) + 1
var userguess = parseInt(prompt("Guess the secret Number between 1 and 10"))
if (userguess === userguess) {
    alert("Congratulations you guess the correct number " + secretnumber)
} else {
    alert("Sorry the secret number was " + secretnumber + " Please try aagin")
}


// DATE METHOD

// QUESTION 1

var date = new Date()
document.write("Current Date and Time " + date+"<br>")

// QUESTION 2

var month = ["January", "Febuary", "March", "April", "May", "June"
    , "July", "August", "September", "October", "November", "December"
]

var now = new Date()
var currentMonth = month[now.getMonth()]
alert("Current Month " + currentMonth)

// QUESTION 3

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]

var now = new Date()
var today = days[now.getDay()]
var shortDay = today.slice(0, 3)
alert("Today is " + shortDay)

// QUESTION 4
var today = new Date().getDay()
if (today === 0 || today === 6) {
    alert("Its a fun day")
}

// QUESTION 5

var today = new Date().getDay()
if (today < 16) {
    alert("First fifteen days of the month")
} else {
    alert("Last days of month")
}

// QUESTION 6

var date = new Date().getDate()
if (date < 16) {
    alert("First fifteen days of the month")
} else {
    alert("Last days of month")
}

// QUESTION 7

var hours = new Date().getHours()
if (hours < 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}

// QUSTION 8

var laterday = new Date(2007, 0, 9)
document.write("Later Day" + laterday+"<br>")

// QUESTION 9

var ramdanstart = new Date(2015, 5, 18)
var today = new Date()
var diffMs = today - ramdanstart
var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
alert("Number of days past since 1st Ramadan " + diffMs)

// QUESTION 10

var now = new Date()
var start2015 = new Date(2015, 0, 1)
var diffMs = now - start2015
var diffsecond = Math.floor(diffMs / 1000)
document.write("Second at 2015 " + diffsecond+"<br>")

// QUESTION 11

var CurrentDate = new Date()
var CurrentHours = CurrentDate.getHours()
document.write("Current Hours " + CurrentHours+"<br>")
document.write("<br>")
CurrentDate.setHours(CurrentHours + 1)
document.write("Date and Time After 1 Hour " + CurrentDate+"<br>")

// QUESTION 12

var CurrentDate = new Date()
CurrentDate.setFullYear(CurrentDate.getFullYear() - 100)
alert("Date 100 Years back " + CurrentDate)

// QUESTION 13

var age = +prompt("Please Enter Your Age")
var CurrentYear = new Date().getFullYear()
var birthYear = CurrentYear - age
document.write("Your Age is " + age + "<br>")
document.write("Your birth year is " + birthYear)

// QUESTION 14

var customerName = prompt("Enter Your Name")
var currentMonth = new Date().toLocaleString('default', { month: 'long' })
var unitConsumed = +prompt("Enter unitconsumed")
var chargePerUnit = 17
var latePymentSurcharge = 450

var netAmount = unitConsumed * chargePerUnit
var grossAmount = netAmount + latePymentSurcharge

netAmount = netAmount.toFixed(2)
grossAmount = grossAmount.toFixed(2)

document.write("<h1>K-Electric Bill</h1>")
document.write("<p><strong> Customer Name: </strong>" + customerName + "</p>")
document.write("<p><strong> Month: </strong>" + currentMonth + "</p>")
document.write("<p><strong> Unitconsumed: </strong>" + unitConsumed + "</p>")
document.write("<p><strong> Charge per Unit: </strong>Rs." + chargePerUnit.toFixed(2) + "</p>")
document.write("<br>")
document.write("<p><strong> Net Amount (within Due Date): </strong>Rs." + netAmount + "</p>")
document.write("<p><strong> Late Pyment Surcharge: </strong>Rs." + latePymentSurcharge + "</p>")
document.write("<p><strong> Gross Amount (After Due Date): </strong>Rs." + grossAmount + "</p>")

