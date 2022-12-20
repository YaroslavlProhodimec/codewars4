function direction(facing, turn){
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const startPosition = directions.indexOf(facing);
    const steps = turn/45;
    const endPosition = (startPosition+steps) % directions.length;
    return directions.slice(endPosition)[0];
}