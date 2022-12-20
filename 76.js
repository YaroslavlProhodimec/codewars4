function isCoprime(x, y) {
    const factorX = factors(x);
    const factorY = factors(y);
    const filtred = factorX.filter((z)=>factorY.includes(z));
    return Math.max(...filtred)===1;
}

function factors(x){
    if (x != parseInt(x, 10) || x < 1) return -1;
    return Array.from(Array(x), (x, i) => x = i+1).filter(n => !(x % n)).sort((a, b) => b - a);
}