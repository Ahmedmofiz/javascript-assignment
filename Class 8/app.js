
first = prompt("Enter first name");
var last = prompt("Enter last name");
var fullName = first.concat(" ", last);
document.write("Hello " + fullName + "");

var phone = prompt("Which is your first mobile model?");
document.write("Length " + phone.length + "");

var word = "Pakistani";
document.write("Index of n+word. indexOf "(n) + "");

var text = "Hello World";
document.write("Last index of l" + text.lastIndexOf("l") + "");
document.write("Char at 3: " + word.charAt(3) + "");

var fname = prompt("first name");
var lname = prompt("Enter last name");
var full = fname.concat(" ", lname);
document.write("Hello " + full + "");

var city = "Hyderabad";
var replaced = city.replace("Hyder", "Islam");
document.write(+ replaced + "<br><br>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(+ newMessage + "<br><br>");

var str = "472";
var num = Number(str);
document.write("Value " + num + " Type: " + typeof num + "<br><br>");

var user = prompt("Enter text");
document.write(+ user.toUpperCase() + "<br><br>");

var input = prompt("Enter text");
var firstChar = input.slice(0, 1).toUpperCase();
var otherChar = input.slice(1).toLowerCase();
document.write(+ firstChar + otherChar + "<br><br>");

var num2 = 35.36;
var str2 = num2.toString().replace(".", "");
document.write(+ str2 + "<br><br>");

var username = prompt("Enter u;4sername");
var invalid = ["@", ".", ",", "!"];
var isInvalid = false;
for (var i = 0; i < username.length; i++) {
    if (invalid.includes(username[i])) {
        isInvalid = true;
        break;
    }
}
document.write(+ (isInvalid ? "Invalid Username" : "Username Accepted") + "<br><br>");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Search item").toLowerCase();
var index = A.indexOf(search);
document.write(+ (index !== -1 ? search + " found at index " + index : "Not available") + "<br><br>");

var pass = prompt("Enter password");
if (!isNaN(pass[0])) {
    document.write(" Password should not start with number<br><br>");
} else if (pass.length < 6) {
    document.write(" Password must be 6 characters<br><br>");
} else {
    var hasLetter = /[a-zA-Z]/.test(pass);
    var hasNumber = /[0-9]/.test(pass);
    document.write(+ (hasLetter && hasNumber ? "Valid password" : "Invalid password") + "<br><br>");
}

var university = "University of Karachi";
var arr = university.split("");
document.write("<br>");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}
document.write("<br>");

var text2 = prompt("Enter text");
document.write(" Last character: " + text2.charAt(text2.length - 1) + "<br><br>");

var sentence = "The quick brown fox jumps over the lazy dog";
var count = sentence.toLowerCase().match(/the/g).length;
document.write(" Occurrences of 'the': " + count);
