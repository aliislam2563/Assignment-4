function cubeNumber(number){
    if( typeof number !== 'number'){
        return "its not a valid digit"
    }
    cube = Math.pow(number, 3);
    return cube;
}

let input = 3;
let output = cubeNumber(input);
console.log(output);