function sortMaker(numbers){
   console.log(numbers);

   for(let i = 0; i < numbers.length; i++){

    let item = numbers[i];
    if(item < 0 ){
        return "invalid input";
    }
    else{
        if (first == second ){
            return "equal";
        }
        else if( second > first){
            let temp = 0;
            temp = first;
            first = second;
            second = temp;
            let result = [first, second];
            return result;
        }
    }
   
   }
}
let first = 3;
let second = 4;
let array = [first, second];
let output = sortMaker(array);
console.log(output);