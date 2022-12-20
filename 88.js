const U = [..."~!@#$%^&*()_+{}|:\"<>? "]
const L = [..."`1234567890-=[]\\;',./ "]

const handler = (k,c,s) => /^[a-z]$/.test(k) ? s ^ c ? k.toUpperCase() : k : L.includes(k) ? s ? U[L.indexOf(k)] : k : "KeyError"