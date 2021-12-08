// alert("hello friends")

// chapter # 58 to 67


//  part = 1

var mainContent = document.getElementById("main-content")
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")
var p4 = document.createElement("p")
var p5 = document.createElement("p")

var text1 = document.createTextNode("First Name : Alex")
var text2 = document.createTextNode("last  Name : Bank")
var text3 = document.createTextNode("Email : AlexBank@gmail.com")
var text4 = document.createTextNode("Country : Pakistan")
var text5 = document.createTextNode("Contact  : 0123456788")

p1.appendChild(text1)
p2.appendChild(text2)
p3.appendChild(text3)
p4.appendChild(text4)
p5.appendChild(text5)

mainContent.appendChild(p1)
mainContent.appendChild(p2)
mainContent.appendChild(p3)
mainContent.appendChild(p4)
mainContent.appendChild(p5)




// part = 2

var formContent = document.getElementById("form-content")
 console.log(formContent.nodeType)
console.log(formContent)

var last = document.getElementById("last-name")
// console.log(last.nodeName)
// console.log(last.nodeType)
console.log(last.children)


var mainForm = document.getElementById("main-content")
// console.log(mainForm.children)
var id=document.getElementById("lastName")
var txt = document.createTextNode("khan")
id.appendChild(txt)
mainForm.appendChild(id)


var id=document.getElementById("last-name")
console.log(id.nextElementSibling)



var id=document.getElementById("last-name")
console.log(id.previousElementSibling)



var email = document.getElementById("email")
console.log(email.parentNode)



var email = document.getElementById("email")
console.log(email.nodeType)

var email = document.getElementById("email")
console.log(email.nodeName)