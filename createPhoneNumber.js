function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    numbers.forEach(num => {
        format = format.replace('x', num);
    });

    return format;
}