var opposite = function (number) {
  return -number;
}

function basicOp(operation, value1, value2)
{
    var operators = {
        '+' : function(a, b) { return a + b; },
        '-' : function(a, b) { return a - b; },
        '*' : function(a, b) { return a * b; },
        '/' : function(a, b) { return a / b; }
    };

    return operators[operation](value1, value2);

}

function printArray(array){
    return array.join(',');
}

function rentalCarCost(d) {
    var cost = d * 40;

    if (d >= 7) {
        return cost - 50;
    } else if (d >= 3) {
        return cost - 20;
    }
    return cost;
}

function zero() {
    return arguments.length ? arguments[0](0) : 0;
}
function one() {
    return arguments.length ? arguments[0](1) : 1;
}
function two() {
    return arguments.length ? arguments[0](2) : 2;
}
function three() {
    return arguments.length ? arguments[0](3) : 3;
}
function four() {
    return arguments.length ? arguments[0](4) : 4;
}
function five() {
    return arguments.length ? arguments[0](5) : 5;
}
function six() {
    return arguments.length ? arguments[0](6) : 6;
}
function seven() {
    return arguments.length ? arguments[0](7) : 7;
}
function eight() {
    return arguments.length ? arguments[0](8) : 8;
}
function nine() {
    return arguments.length ? arguments[0](9) : 9;
}

function plus(a) {
    return function(b) {
        return a + b;
    };
}

function minus(a) {
    return function(b) {
        return b - a;
    };
}
function times(a) {
    return function(b) {
        return a * b;
    };
}
function dividedBy(a) {
    return function(b) {
        return b / a;
    };
}


function getMiddle(s) {
  return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var left = [];
    var right = [];

    for(let i = 0; i < items.length; i++) {
        pred(items[i]) ? right.push(items[i]) : left.push(items[i]);
    }

    var result = left.concat(right);

    for(let i = 0; i < items.length; i++) {
        items[i] = result[i];
    }

    return left.length;
}

function countWords(str) {
   return str.split(/\s+/).filter(x => x).length;
}
