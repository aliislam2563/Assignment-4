function canPay(money , price) {
console.log(money, price);
// money equation output:-
let sum = 0; 
for(let i = 0; i < money.length; i++){
    // let index = i;
    // console.log(index);
    let item = money[i];
    sum += item;
}
console.log("total money:- ",sum);
//comparing money and chips price:-
    if(sum<price){
        return false;
    }
    else{
        return true;
    }
 
}
let array = [1, 2, 5];
let chips = 10;
let output = canPay(array, chips);
console.log(output);