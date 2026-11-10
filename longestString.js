function longest(arr, n) {
    const indexedArr = arr.map((str, index) => ({ str, index }));

    indexedArr.sort((a, b) => {
        if (b.str.length !== a.str.length) {
            return b.str.length - a.str.length;
        }
        return a.index - b.index;
    });

    return indexedArr[n - 1].str;
}