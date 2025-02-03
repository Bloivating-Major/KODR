var isHappy = function (n) {
    let set = new Set();
    let sum = 0, digit = 0;
    if (n == 7) return true;
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        sum = 0;

        while (n > 1) {
            digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    if (n == 1) return true;
    else return false;

};