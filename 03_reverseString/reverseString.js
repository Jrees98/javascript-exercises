const reverseString = function(string) {
    let new_string = '';
    for (let i = -1; i < string.length + 1; i++) {
        new_string += string.charAt(string.length-i)
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
