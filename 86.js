function wrap(height, width, length){
    return 2 * ( 10 + height + width + length + Math.min(height, width, length));
}