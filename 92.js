function squareIt(int) {
    const str = int.toString();
    const r = Math.sqrt(str.length);
    return Number.isInteger(r) ? str.replace(RegExp(`(.{${r}})(?!$)`, "g"), "$1\n") : "Not a perfect square!";
}