var productOfArray = function(my_array) {
	if (my_array.length === 1) {
	  return my_array[0];
	}
	else {
	  return my_array.pop() * productOfArray(my_array);
	}
};
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

   
console.log(array_sum([1, 2, 3, 4, 5, 6]));
   
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}


