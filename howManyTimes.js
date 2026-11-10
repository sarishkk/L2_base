function howManyTimes(time1, time2) {
    let start = new Date(time1);
    let end = new Date(time2);
    let strikes = 0;

    let curr = new Date(start);
    while (curr < end) {
        let h = curr.getHours();
        let m = curr.getMinutes();
        let s = curr.getSeconds();

        if (s === 0 && (m === 0 || m === 30)) {
            let h12 = h % 12;
            let count = (m === 0) ? (h12 === 0 ? 12 : h12) : 1;

            let timeRemaining = (end - curr);
            let neededTime = count * 1000;

            if (timeRemaining < neededTime) {
                strikes += Math.floor(timeRemaining / 1000);
                break;
            } else {
                strikes += count;
                curr.setSeconds(curr.getSeconds() + count);
                continue;
            }
        }
        curr.setSeconds(curr.getSeconds() + 1);
    }
    return strikes;
}