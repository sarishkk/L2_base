function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }

        let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        result.push(waveStr);
    }

    return result;
}