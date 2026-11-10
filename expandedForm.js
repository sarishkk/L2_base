function expandedForm(num) {
    return String(num)
        .split('')
        .map((digit, index, arr) => {
            let zeros = arr.length - 1 - index;
            return digit + '0'.repeat(zeros);
        })
        .filter(item => Number(item) > 0)
        .join(' + ');
}