function stickyCalc (operation, val1, val2){
    const val = Math.round(val1).toString()+Math.round(val2).toString()
    return Math.round(eval(`${val}${operation}${val2}`))
}