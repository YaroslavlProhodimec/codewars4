function singleDigit(n) {
    while(n.toString().length>1){
        n = n.toString(2).split``.reduce((a,b)=>b==1?a+=1:a,0)*1
    }
    return n
}