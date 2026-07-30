"use strict";
const removeDuplicates = (str) => [...new Set(str)].join("");
console.log(removeDuplicates("programming"));
