function cubeNumber(number){
    if(  number !== 'number'){
        return "its not a valid digit"
    }
    cube = Math.pow(number, 3);
    return cube;
}

let input = 4;
let output = cubeNumber(input);
console.log(output);