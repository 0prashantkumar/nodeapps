exports.add = function(a,b) {
	return parseInt(a)+parseInt(b);
}

exports.sub = function(a,b) {
	return parseInt(a)-parseInt(b);
}

exports.mul = function(a,b) {
	return parseInt(a)*parseInt(b);
}

exports.div = function(a,b) {
	return parseInt(a)/parseInt(b);
}

exports.fib = function (n) 
{
	var x = parseInt(n);
  if (x===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = exports.fib(x - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
