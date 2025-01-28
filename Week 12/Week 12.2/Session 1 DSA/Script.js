function Question1() {
  let x = 2,
    n = 10;
  if (n == 0) return 1.0;
  let ans = 1;
  if (n < 0) ans = 1 / solve(x, n);
  else ans = solve(x, n);
  return ans;

  function solve(x, n) {
    if (n == 0) return 1.0;
    let s = solve(x, parseInt(n / 2));
    if (n % 2 == 0) return s * s;
    return s * s * x;
  }
}

console.log(Question1());
