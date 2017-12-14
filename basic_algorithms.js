function isPrime(num) {

    var ceil = Math.sqrt(num);
    for(let i = 2; i <= ceil; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num >= 2;
}

function head([h, ...t]) {
    return h;
}

function tail([h, ...t]) {
    return t;
}

function init(xs) {
    return xs.slice(0, -1);
}

function last(xs) {
    return xs.slice(-1)[0];
}

function stringify(list) {
    if(list === null) {
      return "null";
    }
    return list.data + " -> " + stringify(list.next);
}

function F(n) {
  if(n == 0) {
    return 1;
  }
  return n - M(F(n - 1));
}

function M(n) {
   if(n == 0) {
    return 0;
  }
  return n - F(M(n - 1));
}

function arrayToTree(array) {
  function helper(i) {
    if (i < array.length) {
      return new TreeNode(array[i], helper(2 * i + 1), helper(2 * i + 2));
    }
    else {
      return;
    }
  };
  return helper(0);
};

function getParticipants(handshakes){
  return Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2);
}
