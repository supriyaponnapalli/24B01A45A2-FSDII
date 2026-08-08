const removeDuplicates = (str: string): string => [...new Set(str)].join("");

console.log(removeDuplicates("programming"));