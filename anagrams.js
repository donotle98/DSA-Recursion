const anagram = (string) => {
    if (!string) {
        return "no string";
    }
    const output = [];
    const traverse = (string, perm) => {
        if (!string) {
            output.push(perm);
        }
        for (let i = 0; i < string.length; i++) {
            traverse(
                string.slice(0, i) + string.slice(i + 1),
                perm + string[i]
            );
        }
    };
    traverse(string, "");
    return output;
};

console.log(anagram("aba"));
