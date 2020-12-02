const stringSplit = (string, operator) => {
    if (string.indexOf(operator) === -1) {
        return [string.slice(0, string.length)];
    }
    return [
        string.slice(0, string.indexOf(operator)),
        ...stringSplit(string.slice(string.indexOf(operator) + 1), operator),
    ];
};

console.log(stringSplit("02/20/2020", "/"));
