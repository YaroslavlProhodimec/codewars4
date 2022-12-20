function switchDict(dic) {
    const res = {};
    const keys = [...new Set(Object.values(dic))]
    keys.map(v=>res[v]=[]);
    for (let i=0;i<keys.length;i++){
        for (let key in dic){
            if(dic[key].includes(keys[i])){
                res[keys[i]].push(key)
            }
        }
    }
    return res
}