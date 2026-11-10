function isCircleSorted(arr) {
    let violations = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            violations++;
        }
    }

    return violations <= 1;
}