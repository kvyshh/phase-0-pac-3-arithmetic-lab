function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string, 10);
}

function add(a,b) {
    let result = a + b;
    return result;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function increment(n) {
    return n += 1;
}

function decrement(n) {
    return n -= 1;
}
