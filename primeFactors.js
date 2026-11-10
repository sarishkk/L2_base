function primeFactors(n) {
    let result = "";

    for (let i = 2; i <= n; i++) {
        let count = 0;

        while (n % i === 0) {
            count++;
            n /= i;
        }

        if (count > 0) {
            if (count === 1) {
                result += `(${i})`;
            } else {
                result += `(${i}**${count})`;
            }
        }
    }

    return result;
}