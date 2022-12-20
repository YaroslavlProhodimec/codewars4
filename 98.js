function tArea(tStr) {
    let a = -2;
    for(let i = 0; i < tStr.length; i++) {
        if (tStr.charAt(i) == '\n') {
            a++;
        }
    }
    return Math.pow(a,2)/2;
}