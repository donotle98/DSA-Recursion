function sheep(num) {
    if (num === 0) {
        return "All sheep jumped over the fence";
    } else {
        let sheepNum = num;
        console.log(sheepNum + ": Another sheep jumps over the fence");
        return sheep(num - 1);
    }
}

console.log(sheep(3));
