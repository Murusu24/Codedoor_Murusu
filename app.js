//Task 1
//Write a function which calculates the sum out of an array and returns the sum (e.g.      sum([3, 4, 2, 1])  -> 10)*/

let vals = [ 2, 7, 9, 10, 30, 40 , 0, 0];

function sum(acc, val) {
    return acc + val;
}
let answer = vals.reduce(sum,0);
console.log(answer);

// for function
// want to view the value and it's index
let index = vals.indexOf;
function countForloop(value, index){
     for (let i=0; vals.length; i++){
        vals =+ i;         
        }
       let result =  console.log(countForloop(vals));
       result();
}




//Task 2
//Write a function which counts all zeros inside an array and returns the number of zeros (e.g.       countZero([0, 2, 3, 4, 0]) -> 2
let val = [2,35,77,3,0,95,7,5,0]; //box with values



function find_0(numArr){ // it is not a call , just a placeholder ,the name blueprint. IT IS NOT USSED OUTSIDE HE FUNCTION!!!
    let count = 0;
    for (let i=0; i< numArr.length; i++){
        if (numArr[i]===0){
            count ++ //count=+1
        console.log("The number is: "+ numArr[i] + " position is: "+ i)
    } 
  }return(count)

  //console.log(count)
}
const res = find_0(val);
console.log(res)


//let item = vals[i];
//console.log(find_0(item, index)) ;


/* Write a function which returns the highest value of an array (+ Bonus task: Write a function which returns the lowest and
highest value at once  e.g. findMinMax([2, 3, 4, 1]) -> [1, 4] )
If you want a hard riddle -> Write a function which sorts the array from lowest to highest.
 Think about it first how you would describe a machine, how it should sort this array.
If you do not have a clue, then search in youtube for "bubblesort" maybe this could help you*/