function center (str, width, fill = ' ') {
    let j = 0;
    for(let i = str.length;i<width;i++,j++){
        if(j%2==0){
            str = fill+str
        } else {
            str = str+fill
        }
    }
    return str
}