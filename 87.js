function sexyName(name) {
    let score = 0;
    name.toUpperCase().split``.map(v=>SCORES[v]?score+=SCORES[v]:null);
    if (score<=60) return 'NOT TOO SEXY'
    if (score<=300) return 'PRETTY SEXY'
    if (score<=599) return 'VERY SEXY'
    return 'THE ULTIMATE SEXIEST'
}