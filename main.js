const a = 10;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//second with function
// function ReverseString(str) {

//     // Check input
//     if (!str || str.length < 2 ||
//         typeof str !== 'string') {
//         return 'Not valid';
//     }

//     // Take empty array revArray
//     const revArray = [];
//     const length = str.length - 1;

//     // Looping from the end
//     for (let i = length; i >= 0; i--) {
//         revArray.push(str[i]);
//     }

//     // Joining the array elements
//     return revArray.join('');
// }
// ReverseString("hallo world")


// function ReverseString(str) {
//     return str.split('').reverse().join('')
// }
// ReverseString("hahahaha")

 

// const ReverseString = (str) => {
//     return [...str].reverse().join("")
// }
// console.log(ReverseString("hahahaha"))



// //prime number

// function checkprimenumber(n) {
//     for (c = 2; c <= n - 1; c++) {
//         if (n % c == 0) {
//             return false;
//         }
//         return true;
//     }
// }

// function printprimenumber(number) {
//     if (checkprimenumber(number) == true) {
//         document.write(number + " is Prime Number <br />");
//     } else {
//         /*document.write(number+" is Not Prime Number");*/
//     }
// }

// function printnumbers(range) {
//     for (i = 1; i <= range; i++) {
//         printprimenumber(i);
//     }
// }

// var maxnumber = 100;
//  printnumbers(maxnumber);

//higher order function

// forEach
// filter 
// map 
// sort 
// reduce 

// const array=[10,20,10,20,30,40]
// array.forEach(element => {
//     console.log(element)
// });