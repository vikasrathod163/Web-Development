// Filter

let arr = [2,5,3,52,4,2,25,123];
let evenArr = arr.filter(
    (values,index,arr) => {
        if(values%2 == 0){
            return true;
        }
        else{
            return false
        }
    }
)
console.log(evenArr);

let oddArr = arr.filter(
    (values) => {
        return values%2 != 0;
    }
)

console.log(oddArr)