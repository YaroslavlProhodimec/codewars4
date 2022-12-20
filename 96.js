function tapCodeTranslation(text) {
    const dict = [['a','b','c\k','d','e'],['f','g','h','i','j'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']]
    let str = '';
    text = text.toLowerCase().split``
    for(let i=0;i<text.length;i++){
        dict.map((v,j)=>{
            if(v.some(z=>z.includes(text[i]))){
                str += '.'.repeat(j+1)+' ';
                str += '.'.repeat(v.findIndex(x=>x.includes(text[i]))+1)+' '
            }
        })
    }
    return str.trim();
}