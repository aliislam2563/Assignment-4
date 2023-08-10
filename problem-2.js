function matchFinder(string1, string2) {
console.log("sentence:- ",string1);
console.log("search key:- ",string2)
    let string1LowerCase = string1.toLowerCase();
    let string2LowerCase = string2.toLowerCase();
    if(typeof string1 != "string" || typeof string2 != "string"){
        return "invalid string";
    }
    else{
        if(string1LowerCase.includes(string2LowerCase)){
            return true;
        }
        else{
            return false
        }
    }
    
}
let input1 = "JOhn Deo";
let input2 = "ohn";
let output = matchFinder(input1, input2);
console.log(output);