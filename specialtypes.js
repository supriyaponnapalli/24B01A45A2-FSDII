"use strict";
let flexiblevalue = 10;
flexiblevalue = "Now I am a string";
flexiblevalue = true;
let mysteryValue = "Hello Vishnu";
if (typeof mysteryValue == "string") {
    console.log("Length of unknow string: " + mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT:" + message);
}
logNotification("Environment Setup Complete");
