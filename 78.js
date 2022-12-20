function rotations(a){
    let d = {1:6,2:5,3:4,4:3,5:2,6:1}
    return a.length ? Math.min(...[...new Set(a)].map(e=>a.reduce((a,c)=>a+(e===c?0:d[c]===e?2:1),0))) : 0
}