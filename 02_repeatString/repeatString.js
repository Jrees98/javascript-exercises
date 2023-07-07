const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    empty_string = '';
    for (let i = 0; i < num; i++) {
        empty_string = empty_string + string
    }
    return empty_string
};

// Do not edit below this line
module.exports = repeatString;
