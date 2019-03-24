function factorial(n) {
  var array = [];
  for (var f = 2, p = 0; f <= n; f++, p = 0) {
    while (n % f === 0) {
      n /= f;
      p++;
    }
    if (p) {
      array.push( { f, p } );
    }
  }
  return array;
}

module.exports = function getZerosCount(number, base) {
  const factors = factorial(base);
  var count = 0;

  factors.forEach( f => {
      var result_f = 0, base_p = f.f, d = base_p;
      while ( Math.floor(number / d) >= 1 ) {
        result_f += Math.floor(number / d);
        d *= base_p;
      }
      result_f /= f.p;
      if (!count || result_f < count) count = result_f;
    }
  );
  return Math.floor(count);
}