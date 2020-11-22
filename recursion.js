// 1. Write a function called `productOfArray` which takes in an array of numbers 
//    and returns the product of them all.
function productOfArray(arr) {
    if (arr.length < 1) {
        return 1;
    }
    return arr[arr.length-1] * productOfArray(arr.slice(0, arr.length-1));
}


// 2. Write a function called `contains` that searches for a value in a nested object.
//    It returns true if the object contains that value.

function contains(obj, search) {
    let value = {};
    for (let key of Object.keys(obj)) {
        value = obj[key];
    }
    if (value === search && typeof value !== "object") {
        return true;
    } else if (typeof value === "object") {
        return contains(value, search);
    }
    return false;
}

// 3. Write a function called search that finds a value in an array and returns the index 
//    where the value is at. If the value is not found, the function should return negative 1.

function search(arr, cpmpare, count = 0) {
    if(count > arr.length-1) {
        return -1;
    } else if(arr[count] === compare) {
        return count;
    }
    return search(arr, compare, count+1);
}

//4. Refactor your search function to use a faster algorithm called binary search
function binarySearch(arr, search) {
    var a = 0;
    var b = arr.length-1;
    let sortArr = arr.sort(a,b);
    let start = 0, end = sortArr.length - 1;
    while(start <= end) {
      let midPoint = math.floor((start+end)/2);
      if(sortArr[midPoint] === search) {
          return midPoint;
    } else if(sortArr[midPoint] < search) {
        start = midPoint + 1;
    }else{ 
        end = midPoint - 1;
    } 
}
return -1;
}


//5. Write a function called `stringifyNumbers` which takes in an object and
//   finds all of the values which are numbers and converts them to strings. 
//   Recursion would be a great way to solve this!
function stringifyNumbers(obj, newobj={...obj}) {
    for(let key of Object.keys(newobj)) {
        let value = newobj[key];
        if(typeof value === "number") {
            newobj[key] = string(value);
        }else if(typeof(value) === "object") {
            stringifyNumbers(newobj, value);
        } 
    } 
    return newobj;
}
