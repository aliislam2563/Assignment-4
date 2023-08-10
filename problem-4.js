function findAddress(object){
    if(typeof obj != "object"){
        return "invalid";
    }
    else{
        let street = obj.street || "_";
        let house = obj.house || "_";
        let society = obj.society || "_";
        let result =  console.log(street, house, society);
        return result;
    }
}
let obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
let output = findAddress(obj);
return output;