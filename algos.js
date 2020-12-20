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