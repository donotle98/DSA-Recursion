function reverse(reverseStr) {
    if (reverseStr === "") {
        return "";
    }
    return reverse(reverseStr.substr(1)) + reverseStr.charAt(0);
}

console.log("Reverse of Donovan is", reverse("Donovan"));
