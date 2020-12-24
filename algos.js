//print 1-255
function printOneTo255(){
    for(let i = 0; i <= 255; i++){
        console.log(i);
    }
}
printOneTo255();

//sum all even numbers from 1-10
function onlyEvens(){
    let sum = 0;
    for(let i = 0; i <= 10; i++){
        if(i %2==0 ){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(onlyEvens());

//sum all odds
function onlyOdds(){
    let sum = 0;
    for(let i = 0; i <= 10; i++){
        if(i %2!==0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(onlyOdds());

//sum all values
function sumArr(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArr([1,2,3,4,5]));

//array of odd values
function oddValues(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] %2!==0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(oddValues([1,2,3,4,5]));

//return if greater than Y
function greaterThanY(arr, Y){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(greaterThanY([2,4,5,6,7], 3));


//swap the first and last values of an array
function shift(array, k){
    let tempOne = 0;
    let tempTwo = 0;
    for(let i = 0; i < 1; i++){
        if(array.length < 2){
            return false;
        }
        tempOne = array[0]; // 0 = 1
        array[0] = array[array.length - 1]; // 1 = 4
        array[array.length - 1] = tempOne; 
    }
    return array;
}
console.log(shift([1,2,3,4], 2));


//add a new number to the front of an array
function moveOver(arr, num){
    var newArr = []; //create a new array
    newArr.push(num); //push the number into the array
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]); //push the following numbers into the new array;
    }
    arr = newArr; //original array becomes the new array;
    return arr;
}
console.log(moveOver([1,2,3,4], 5));

//print low return high (print lowest, return highest number of the array)
function printLowReturnHigh(arr){
    let min = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < arr[i] + 1){
            min = arr[i];    
        }
    }
    console.log(min);
    return max;  
}
console.log(printLowReturnHigh([1,2,8,3,7]));

//print second to last value in an array; return the first odd value
function printOneReturnAnother(array){
    let odd = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] %2!==0){
            odd = array[i];
            break;
        }        
    }
    console.log(array[array.length - 2]);
    return odd;
}
console.log(printOneReturnAnother([2,4,6,7,1,9]));

//create a function that returns an array where each value in the original array is doubled
function doubleVision(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i] * 2);
    }
    array = newArr;
    return array;
}
console.log(doubleVision([2,4,6]));

//create a function that replaces the last value of an array with the number of positive values 
function countPositives(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            counter = counter + 1;
        }
        array[array.length - 1] = counter;
    }
    return array;
}
console.log(countPositives([8,6,7,5,3,0,9]));

//create a function that will print "thats odd" if 3 numbers in a row have been odd and "thats even" if 3 numbers in a row have been even
function oddsAndEvens(array){
    let odds = 0;
    let evens = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] %!2 == 0){
            odds ++;
            evens = 0;
            if(odds > 2){
                console.log("That's odd!");
            }
        } else {
            evens ++;
            odds = 0;
            if(evens > 2){
                console.log("Even more so!");
            }
        }
    }
}
oddsAndEvens([1,1,1,2,2]);

//create a function that returns an array that added 7 to the original number
function luckySeven(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    arr = newArr;
    return arr;
}
console.log(luckySeven([7,14,21,28]));

//create a function that reverses an array [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]
function reverseArray(array){
    let temp = 0;
    for(let i = 0; i <= (array.length/2); i++){
        temp = array[i]; // 0 = 1;
        array[i] = array[array.length - 1 - i]; // 1 = arrays length - i, which is 1 = 4
        array[array.length - 1 - i] = temp; // 
        console.log(array);
    }
    return array;
}
console.log(reverseArray([1,2,3,4,5]));

// what is the following output?
function abc(number){
    var sum = 0;
    for(var i =0; i<=number; i++){
        sum = sum + i;
    }
    console.log(sum);
    return sum+10;
}

output = abc(2) + abc(3);
console.log(output);

// Day 1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
function twoSum(array, target){
    let temp = 0;
    let newArr = [];
    for(let i = 0; i < array.length; i ++){
        if(array[i] < target){
            newArr.push(array[i]);
        }
    }
    for(let i = 0; i < newArr.length; i ++){
        for(let j = 0; j < newArr.length; j ++){
            if(target == newArr[i] + newArr[j]){
                return [i, j];
            }
        }
    }
}

function twoSum(array, target){
    let newArr = [];
    for(let i=0; i<array.length; i++){
        for(let j = i + 1; i<array.length; i++){
            if(array[j] == target - array[i]){
                newArr.push(array[j], array[i]);
            }
        }
    }
    console.log(newArr);
}
twoSum([0,2,5,9,11], 2);

//Day 2: Given a sorted array nums, remove the duplicates in place such that each element appears only once and returns the new length.
function removeDuplicates(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            let indexToDelete;
            if(array[i] == array[j] + 1){
                indexToDelete = array[j];
                array = array.filter( (item, index) => {
                    if(index !== indexToDelete){
                        return item;
                    } else {
                        i++;
                    }
                })
            } 
        }
    }
    return (array.length);
}
console.log(removeDuplicates([1,1,2,3,3,4,5,5,5,6]));

//(How to use .filter) 
let array = [1,2,3,4,5];
let indexToDelete = 1;
let newArray = array.filter( (item, index) => {
    if(index !== indexToDelete){
        return item;
    }
})
console.log(newArray);

// Determine whether an integer is a palindrome
function isPalindrome(x){
    let char = x.toString();
    let i = 0;
    let j = char.length - 1;
    while(i <= j){
        if(!(char[i++] === char[j--])){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome([1,2,1]));

//Determine whether an array is a palindrome 
function arrayPalindrome(array){
    let len = array.length;
    for(let i = 0; i < array.length/2; i++){
        if(array[i] !== array[len - i - 1]){ //if array[i] is not equal to length of the array - i - 1 ... 
            return false;
        }
    }
    return true;
}
console.log(arrayPalindrome([8,3,7,6,7,3,8]));


//how to iterate through an array backwards
function backwards(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}
backwards([1,2,3,4]);

// Day 3: Given a string containing the characters ( ) { } [ ] determine if the string input is valid
function validParenthesis(string){
    if(string.length %2!==0){
        return false;
    }
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }
    let stack = [];
    for(let i = 0; i<string.length; i++){
        if(map[string[i]]){ //if it matches a left bracket
            stack.unshift(string[i]); //adds to the beginning of an array;
            console.log(stack);
        } else {
            if(string[i] != map[stack.shift()]){  //not a left bracket, doesn't match top of stack
                return false;
            }
        }
    }
    return true;
}
console.log(validParenthesis("({[()]})"));

// Given a string, determine if it is a palindrome
function palindrome(string){
    let len = string.length;
    for(let i = 0; i < string.length; i++){
        if(string[i] != string[len - i - 1]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("amanaplanacanalpanama"));

// given a string, determine if it is a palindrome ignoring upperccases and special characters
function palindrome(string){
    let len = string.length;
    let str = string.toLowerCase();
    for(let i = 0; i < str.length/2; i ++){
        if(str[i] != str[len - i - 1]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("Racecar"));

// Given an array, sort it in place without creating a new array
function sortArray(array){
    let temp;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                
            }
        }
    }
    return array;
}
console.log(sortArray([100,1,3,2,20,5,9,18,]));

// ordered union
function orderedUnion(arr1, arr2){
    let i = 0;
    let j = 0;
    let newArr = [];
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i ++;
        } else if(arr2[j] < arr1[i]){
            newArr.push(arr2[j]);
            j ++;
        } else {
            newArr.push(arr2[j]);
            j ++;
            i ++;
        }
    }
    newArr = newArr.concat(arr1.slice(i).concat(arr2.slice(j)));
    return newArr;
}
console.log(orderedUnion([1,2,2,2,3,4], [2,2,3,4,4,5]));


// Length of last word: Given a string consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0
function lastWord(string){
    let badChar = " ";
    let count = 0;
    for(let i = string.length - 1; i >= 0; i--){
        if(string.length < 1){
            return 0;
        } else if(string[i] === badChar){
            break;
        } else {
            count ++;
        }
    }
    return count;
}
console.log(lastWord("Hi Tony. What's up"));

// Plus One: Given a non empty array of integers, increment by one integer.
function incrementInteger(array){
    array[array.length - 1] += 1;
    return array;
}
console.log(incrementInteger([8,6,7]));

//Day 4: Move Zeroes: Given an array, move all 0s to the end while mainting the relative order of the non zero elements

function moveZeroes(array){
    let temp;
    for(let i = array.length - 1; i>=0; i--){
        if(array[i] != 0){
            temp = array[i];
            array[i] = array[0];
            array[0] = temp;   
        }
    }
    return array;
}
console.log(moveZeroes([0,1,3,0,12]));

// Join two arrays into one without creating a new array and remove all duplicates
function joinArray(array1, array2){
    array1 = array1.concat(array2);
    let temp;
    for(let i = 0; i < array1.length; i++){
        for(let j = i + 1; j < array1.length; j++){
            if(array1[i] > array1[j]){
                temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
        for(let i = 0; i < array1.length; i++){
            for(let j = i + 1; j < array1.length; j++){
                if(array1[i] === array1[j]){
                    array1.splice(j--, 1);
                }
            }
        }
    }
    return array1;
}
console.log(joinArray([8,6,7,5,3,0,9], [6,7,8,9,9,9,8,2,1,2]));


