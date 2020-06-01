//most function using the test array [1,2,3,4,5]



//forEach()
console.log("forEach");
function myForEach (arr, cb){
    for (let i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

function plusFive (n) {
    console.log(n + 5);
}

let testArray = [1,2,3,4,5]; 

myForEach(testArray, plusFive);



//map()
console.log("\nmap()")
function myMap (arr, cb){ 
let newArray = []
    for(let c = 0; c < arr.length; c++){
        newArray.push(cb(arr[c]));
    }

    return newArray; 
}

function plusTen (c){
    return c + 10; 
}



mapArray = myMap(testArray, plusTen)

console.log(mapArray);


//filter()
console.log("\nfilter()")
function myFilter(arr, cb) {
    let newArray = []; 
    for(let c = 0; c < arr.length; c++){
        if(isEven(arr[c])) newArray.push(arr[c]);
    }

    return newArray;
}

function isEven (n){
    return (n % 2 == 0 ) ? true : false; 
}


filterArray = myFilter(testArray, isEven)

console.log(filterArray);

//some()
console.log("\nsome")

function mySome(arr, cb) {
    const any = false; 
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])) return true; 
    }
    return any;
}

const odd = (n) =>{
    return ( n % 2 == 1) ? true: false;
}

console.log(mySome(testArray, odd))

//every()
console.log("\nevery()")
function myEvery(arr, cb){
 
    for (let c = 0; c < arr.length; c++){
        if(cb(arr[c]) == false) return false; 
    }  
    return true; 
}
let isEveryEven = (n) =>{
    return (n % 2 == 0) ? true : false;  
}
console.log(myEvery(testArray, isEveryEven))


//reduce()
console.log("\nreduce()");

const myReduce = (cb, arr) => {
    for(let i = 1; i < arr.length; i++){
        arr[0] = cb(arr[0],arr[i]);
    }
    return arr[0]; 
}

const sum = (a , b) =>{
    return a + b; 
}


console.log(myReduce(sum, testArray))

//includes()
console.log("\nincludes()"); 
let myIncludes = (arr, test) =>{
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === test) return true;  
    }

    return false; 
}

console.log(myIncludes(testArray, 6))


//index0f()
console.log('\nindexOf()')
let myIndexOf = (arr, test) =>{
    for(let i in arr){
        if (arr[i] === test) return i;   
    }
  return -1; 
}

console.log(myIndexOf(testArray, 3))


//lastIndexOf()
console.log("\nlastIndexOf()")

let myLastIndexOf = (arr, test) =>{
  let lastFound; 
    for(let i in arr){
        if (arr[i] === test) lastFound = i;   
    }
  return (lastFound > 0) ? lastFound: -1;
}

console.log(myLastIndexOf(testArray, 6))


//push()
console.log("\npush()")

let myPush = (arr, test) =>{
    arr[arr.length] = test; 
    return arr;
}

console.log(myPush(testArray, 1))


//multiple entry functionality
console.log("\npush() with multiple entry functionality")
let myPush2 = (arr, ...test) =>{
    
    for(let i = 0; i < test.length; i++){
        arr[arr.length] = test[i];
    }
    
    return arr;
}
 
console.log(myPush2(testArray, 5,4,3,2,1))





///object.keys()
console.log("\nobject.keys()");
/*
let myPush = (arr, test) =>{
    arr[arr.length] = test; 
    return arr;
}
*/

Object.grabKeys = function (obj){
    let keyArray = []
    for(const key in obj){
        myPush(keyArray, key)
    }
    return keyArray; 
}
const object = { a: 1, b: 2, c: 3 };
console.log(Object.grabKeys(object))


//object.values()
console.log("\nObject.values()");
/*
let myPush = (arr, test) =>{
    arr[arr.length] = test; 
    return arr;
}
*/
Object.grabValues = function(obj){
    let keyArray = []
    for(const key in obj){
        myPush(keyArray, obj[key])
    }
    return keyArray; 
}
console.log(Object.grabValues(object))


//sum of range
console.log("\nsum of range"); 
let sumOfRange = (a, b) => {
    for(let i = a + 1 ; i <= b; i++){
        a += i; 
    }

    return a; 
}

console.log(sumOfRange(1,6))

//reversing an array 
console.log("\nreversing an array")
/*
let myPush = (arr, test) =>{
    arr[arr.length] = test; 
    return arr;
}
*/
let newtestArray = [1,2,3,4,5];
let reverseArray = (arr) => {
    let arr2 = []; 
    for(let i = arr.length -1; i >= 0; i --){
        myPush(arr2, arr[i]); 
    }

    return arr2; 
}
console.log(reverseArray(newtestArray)); 

//A list






//Deep Comparison
console.log("\nDeep Comparison")
//used a tutorial to show me how to do it 
//https://medium.com/@zolotova17/deep-comparison-exercise-explanation-987c4db2cc5e


function deepEqual (a, b) {
    if (a === b) return true; 
    if (a == null  || typeof a != "object" || b == null
        || typeof b != 'object') return false; 

    var propsInA = 0, propsInB = 0; 
    for (var prop in a){
        propsInA += 1; 
    }

    for (var prop in b) {
        propsInB += 1; 
        if((!prop in a) || !deepEqual(a[prop], b[prop]))
        return false; 
    }

    return propsInA == propsInB; 
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));



// zerosToEnd
console.log("\nzeros to the end");
function zerosToEnd(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i,1);
            arr.push(0)
        } 
    }
    return arr; 
}

let test = [0,1,3,0,4,2,0,4,0,55,3,0,3,2,2]; 

console.log(zerosToEnd(test))