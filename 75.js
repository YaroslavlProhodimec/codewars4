function compress(sentence) {
    sentence = sentence.toLowerCase();
    const arr = [...new Set(sentence.split` `)];
    return sentence.split` `.map(v=>arr.indexOf(v)).join``;
}