function bitMarch(n) {
    let march = [];
    for (let i = 0; i < 9 - n; i++) {
        march.push([]);
        for (let j = 0; j < 8; j++) {
            march[i].push([]);
        }
    }
    for (let i = 0; i < march.length; i++) {
        for (let j = 0; j < march[i].length; j++) {
            march[i][j] =
                j >= march[i].length - n - i && j <= march[i].length - 1 - i ? 1 : 0;
        }
    }
    return march;
}