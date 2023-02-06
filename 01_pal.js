function palindrome(str) {
    /* 
        Check if str is spelled the same backward or forward.
    */

    // keep string only
    let newStr = str.replace(/[\W_]/g, '').toLowerCase();

    // reverse index of all char from newStr and store them in the array reverseStr
    let reverseStr = [];
    for (let i = newStr.length - 1; i >= 0; i--) {
        reverseStr.push(newStr[i]);
    }

    // output the result of compairing newStr and reverseStr
    return newStr === reverseStr.join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));