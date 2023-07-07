const sumAll = function(start, end) {
    if (start < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    let sum = 0;
    if (start > end) {
        let temp = start; // Temporary variable to store the value of start
        start = end;      // Swap the values of start and end
        end = temp;        // Assign the temporary value to end
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Example usage:
console.log(sumAll(123, 1));  // Output: 7626


// Do not edit below this line
module.exports = sumAll;
