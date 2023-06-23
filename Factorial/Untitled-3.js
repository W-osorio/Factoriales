function factorial(number){
    let num = 1;
    let result = 1; 
    while (num <=number) {
        result = result * num;
        num++
    }
}
const myNumber = factorial(10); 
console.log(myNumber)