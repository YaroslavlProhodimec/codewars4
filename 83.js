function majority(arr) {
    const res = arr.reduce((a,b)=>(a[b]?a[b]+=1:a[b]=1,a),{});
    const max = Math.max(...Object.values(res));
    const filtered = Object.entries(res).filter(v=>v[1]===max);
    return filtered.length === 1 ? filtered[0][0] : null;
}