// //callback function 
// function sum(num1, num2, displayResult){
//     let result = num1 + num2;
//     displayResult(result);
// }
// function displayResult(data){
//     console.log("Result of the sum is : "+ data);
// }
// const ans= sum(2,2,displayResult);

// function calculateArithmetic(a, b, sum)
// {
//     const ans= sum(a,b)
//     return ans;
// }

// function sum (a, b)
// {
//     return a+b;
// }

// const value = calculateArithmetic(5, 5, sum);
// console.log(value)

// readFile("./a.txt", function(contents){
//     console.log(contents);
// })

// console.log("hi there");

// let counter = 0;
// for (let i = 0; i< 1000; i++){
//     counter = counter + 1;
// }

let promise = new Promise(function (resolve, reject) {
    console.log("Hello");
    resolve(6);
});

console.log("Hello world");

setTimeout(function () {
    console.log("Hello two in 2 seconds");
}, 2000);

console.log("My name is Faisal");
console.log(promise);






