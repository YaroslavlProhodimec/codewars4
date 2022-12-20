function connotation(str) {
    const pos = 'abcdefghijklm'
    let posCount = 0
    let negCount = 0
    const strSplited = str.toLowerCase().split(` `)
    for (let i = 0; i < str.length; i++) {
        if (strSplited[i] && strSplited[i][0]) {
            if (pos.includes(strSplited[i][0])) {
                posCount += 1
            } else {
                negCount += 1
            }
        }

    }
    return posCount >= negCount
}