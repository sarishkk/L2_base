function whatCentury(year) {
    let century = Math.ceil(Number(year) / 100);

    if (century >= 11 && century <= 13) {
        return century + "th";
    }

    let lastDigit = century % 10;

    if (lastDigit === 1) return century + "st";
    if (lastDigit === 2) return century + "nd";
    if (lastDigit === 3) return century + "rd";

    return century + "th";
}