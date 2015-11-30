var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

var binarySearch = function(input, key, inputMax, inputMin) {
  inputMax = inputMax || input.length;
  inputMin = inputMin || 0;
  
  var midIndex = Math.floor((inputMax + inputMin) / 2);
  var midNumber = input[midIndex];
  
  if (midNumber > key) {
    binarySearch(input, key, inputMax - 1, inputMin);
  } else if (midNumber < key) {
    binarySearch(input, key, inputMax, inputMin + 1);
  } else {
    console.log(key + ' found');
  }
  
};

binarySearch(arr, 3);
