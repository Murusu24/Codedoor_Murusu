//          TASK 1
// write a for-Loop which prints out (console.log) every even number between 0 and 100

// for (let i=0;i<=100;i++){
//     if (i%2===0){
//         console.log(i + " number is even")
//          }

//     else {
//         console.log(i + " number is odd")
//     }
// }

// let i=0

// while(i<=100){
// 	if (i%2 ===0){
// 	    console.log(i)
//     }
//     i++
// }


//                    TASK 2
//while loop counting even number until 100 numbers in container
// let i =0;
// let box = 0;
// while(box<=100){



//     if (i%2===0){
//         box++
//         console.log(i)
//     }

//     i++;
// }


// let i = 2;
// let primeNumbers = [];
// // running until 100 primenumbers
// while(primeNumbers<=100){

//     let isNotDividable = true;
//     // running to the end of array of already found primenumbers
//     for (let j = 0; j<primeNumbers.length; j++){
//         if (i % primeNumbers[j] === 0) {
//             isNotDividable = false;
//         }
//     }

//     if (isNotDividable) {
//         primeNumbers.push(i)
//     }
// }


// primeNumbers = 2, 3, 5

// 2, 3, x, 5, 6, 7, 8, 9, 10, 11, 12



//  COMENTS
// let pushedNums = [];
// for (let i=0; i<=20; i++){
//     pushedNums.push(i)

// }
// console.log(pushedNums)
// console.log(pushedNums.sort(function(a,b) {return(a-b)}))

// console.log(pushedNums.sort((a, b) => a-b))

// // (a, b) => a-b === function(a, b) { return a-b }

// function helloWorld(a) {
//     console.log(a);
//    return a + 1;
// }

//  const helloWorld2 =  a => {
//     console.log(a)
//     return a + 1
// }

// let persons = [
//     {month: 1, day: 20, name: "Anton" },
//     {month: 1, day: 3, name: "Igor" },
//     {month: 4, day: 3, name: "Chuck" }
// ]

// console.log(persons)

// const mySortFunction = (p1, p2) => {
//     if (p1.month < p2.month) {
//         return -1;
//     } else if (p1.month === p2.month) {
//         if (p1.day < p2.day) {
//             return -1;
//         } else {
//            return 1;
//         }

//     } else {
//         return 1;
//     }
// }


// console.log(persons.sort(mySortFunction))

// p1, p2  return -1  --->   p1, p2

// p1, p2 return 0 ------>   p1, p2 or p2, p1

// p1, p2 return +1  -----> p2, p1


// write a function, which checks if a number is not divadable by one of the number of the list -> if number is not divadable return true otherwise return false

// const numArr = [2, 3, 5, 7, 11, 13];

// function isNotDevidable (num1, numArr) {
//     for(let i= 0; i < numArr.length; i++){

//         if (num1%numArr[i] !==0){
//             //console.log(num1 + " Is not devidable by " + numArr[i])
//         }
//         else{
//             //console.log(num1 + " IS deviadable by " + numArr[i])
//             return false
//         }
//     }
//     //console.log(num1 + " IS NOT devidable by any number")
//     return true;

// }

// let result = isNotDevidable(17, numArr);
// console.log(result)

// write a loop which starts at 2 and calls isNotDeviadable with a primeList -> if is not devidable push the number to the primeList otherwise do nothing    do everything until you have 100 primeNumbers in the list
// let primeNumbers = [];
// let i = 2;
// while (primeNumbers.length <= 99){
//     isNotDevidable(i, primeNumbers);
//     if (isNotDevidable(i, primeNumbers)) {
//         primeNumbers.push(i);
//         // console.log(primeNumbers)
//     }
//     i++
// }
// console.log(primeNumbers)
// // num1 = 17
// [2, 3, 5, 7, 11, 13]
//                      return true

// 17 % 2 != 0 -> true -> console.log
// 17 % 3 != 0 -> true -> console.log
//

// 3 = FIZZ  and 5 = BUZZ

// for (let num=1; num<=100; num++){

//     if( num % 3 ===0 && num % 5 === 0){
//             console.log("FIZZ BUZZ")
//     }

//     else if (num % 3  === 0){
//         console.log("FIZZ");
//     }
//     else if (num % 5 === 0){
//         console.log("BUZZ");
//     }

//     else{
//         console.log(num)
//     }
// }

// if (condition)  run if true  else  {if (condition) run if true else  run if false }

// if (num == 2) {
//     // do this
// }
// else if (num == 3) {
//     // do that
// } else {
//     // do anything
// }

// switch(num) {
//     case 2: //do this
//     case 3: //do that
//     default: // do anything
// }
// ---2. TAKS write a function which takes a list of names and split by the lenght ->  list1 with names smaller and equal than 5 letters   and list2 with names bigger than 5 letters

// --- DESCRIPTION------
// startingArray -> doSomeFunctionStuff -> [smallArray, bigArray]
// parameter     ->  functionStuff      -> return
// ["Tim", "Tom", "Paul", "Wolfgang", "Waldemar", "Peter"]  =>    ["Tim", "Tom", "Paul", "Peter"], ["Wolfgang", "Waldemar"]


// function which take an array
// a loop to iterate over all names
// check if name/element is maller or bigger 5   names[i]
// push to smallerNamesArray or biggerNamesArray

// at the end return both arrays



// String.length

// function namesFunc() {
// ........
//     return [smallerNameArray, biggerNameArray]
// }

// const completeList= namesFunc()

// const smallerList = completeList[0]
// const biggerList = completeList [1]

//or

// const [smallerList, biggerList] = nameFunc()


// console.log(name1)
// console.log(name2)

// ----- SOLUTION --------
// let names = ["Tim", "Tom", "Paul", "Wolfgang", "Waldemar", "Peter"]
// // for (let name of names )
// //     {console.log(name)}
// //or

// function sortNames (names){

//     let small =[]
//     let big = []

// for (let i = 0; i<names.length; i++) {
//     // console.log(names[i])
//     if (names[i].length <=3){
//         small.push(names[i])
//     }
//     else{
//         big.push(names[i])
//         }
//     }
// return [small,big];
// }
// let result = sortNames(names);
// console.log(result)


// let [small, big] = sortNames(names)

// console.log("Small names: " + small)


// console.log("Big names: " + big)
//________________________________________________________________________________________________________________________



// <-----28.06.21----->

// -----------TO DO TASKS------------

// ---TASK 1-----.

// find the biggest number in an array, find the smallest number in an array  
//bonus task: function which taskes an array and return the smallest and biggest number

// ---DESCRIPTION-----
// [0], [] -> undefined, [2, 2, 2, 2], [234, 235, 1223, 5, 2]
//     let numbers = [ 3, 5, 6, 1]
//     getBiggest(numbers)  -> 6
//     getSmallest(numbers)  -> 1
//     getLimit(numbers) -> [1, 6]

//----SOLUTION-----

//  var nums = [4, 6, 7, 23, 2, 34, 123, 45];

// function getBiggest(arr){
    
//     let maxVal = 0;

//     for ( i = 0; i <= arr.length-1; i++){
//         if(arr[i] > maxVal){
//             maxVal = arr[i];
//         }
//     }
//     return maxVal;
// }
// console.log(getBiggest(nums));


// function getSmallest(arr){
//     let minVal = arr[0];
//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] < minVal){
//             minVal = arr[i];
//         } 
//     } 
//     return(minVal)
// }
// console.log(getSmallest(nums))


// function getLimitNums(arr){
//     var maxVal = arr[0];
//     var minVal = arr[0];

//     for(i = 0; i <= arr.length; i++){
//         if(arr[i] < minVal){
//             minVal = arr[i];
//         }
//         else if (arr[i] > maxVal){
//             maxVal = arr[i];
            
//         } 
//     } 
//     return[minVal,  maxVal]

// }
// console.log(getLimitNums(nums))

// const matrix = [[3, 5,  2, 6, 4],
//                 [12, 5555, 33, 2, 1],                    
//                 [4, 2, 4,  5, 7]];

// let result = [0, 0, 0]

// for(let i = 0; i< matrix.length; i++){
//     result[i] = getSmallest(matrix[i])
// }
// // (getSmallest(matrix[i]))

// console.log(result)

// switch the value a and b
   
// Comments Variables reassigning 
// let a = 10   
// let b = 4    // a[10]   b[4]

// let temp = a   // a[10]   b[4]    c[10]
// a = b   // a[4]    b[4]    c[10]
// b = temp


// bubblesort for sort function

//-----TASK 2. Write a switch loop, in a 'dice' game, that gives you output
// ---DESCRIPTION-----
// dice with 1 - 6  -> 1: this is bad, 2: oh damn, 3 or 4: not bad, 5 or 6: you lucky guy


// SOLUTION


// for (let i=1; i < 10; i++){
    
//     var random = Math.floor(Math.random()*6) + 1;
//         //  console.log(random);
        
//    switch(random) {
//         case 1: console.log(i + ": This is bad");
//                 break;
//         case 2: console.log(i + ": Oh damn");
//                 break;
//         case 3:
//         case 4: console.log(i + ": Not bad" ); 
//                 break;
//         case 5:
//         case 6: console.log(i + ": You are lucky");
//                 break;
//     }
    
// }

//  COMMENTS
// Returns a random integer from 0 to 9:
//Math.floor(Math.random() * 6) + 1;

// Math.random() -> (0.0000000 - 0.99999999999999) * 6 -> (0.00000000000 - 5.999999999999999) math.floor      ->        0 - 5 + 1     ->        1 - 6
// start with the first one and hold the biggest element until a bigger one is found


function rollDice (){
    
    var random = Math.floor(Math.random()*6) + 1;
    //  console.log(random);
        
    switch(random) {
        case 1: console.log(random + ": This is bad");
            break;
        case 2: console.log(random + ": Oh damn");
            break;
        case 3:
        case 4: console.log(random + ": Not bad" ); 
            break;
        case 5:
        case 6: console.log(random + ": You are lucky");
            break;
            default: console.log("Dice has max only 6")
    }
    
}

rollDice()




