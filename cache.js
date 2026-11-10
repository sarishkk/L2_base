function cache(func) {
    const memo = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in memo) {
            return memo[key];
        }

        const result = func.apply(this, args);
        memo[key] = result;
        return result;
    };
}