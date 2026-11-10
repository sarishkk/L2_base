function bingo(ticket, win) {
    let miniWins = 0;

    for (let i = 0; i < ticket.length; i++) {
        let str = ticket[i][0];
        let num = ticket[i][1];

        let hasWon = false;
        for (let j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) === num) {
                hasWon = true;
                break;
            }
        }

        if (hasWon) {
            miniWins++;
        }
    }

    return miniWins >= win ? 'Winner!' : 'Loser!';
}