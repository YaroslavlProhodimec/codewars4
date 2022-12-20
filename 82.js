function cubeTimes(times) {
    times = times.sort((a,b)=>a-b)
    return [(times.slice(1,4).reduce((a,b)=>a+b,0)/3).toFixed(2)*1,times[0]]
}