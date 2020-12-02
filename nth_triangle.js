function triangleNumber(num) {
    if (num === 1) {
        return 1;
    }
    return n + triangleNumber(num - 1);
}

console.log(triangleNumber(9));
