var arr = [12,2,1,6,15,13,8,14,3,9,16,5,10,4,7,11]

var insertionSort = function(input) {
  input = input.slice();
  
  for (var i = 0; i < input.length; i++) {
    var item = input[i];
    for (var j = i; j >= 0; j--) {
      if (item < input[j]) {
        input[j + 1] = input[j];
        input[j] = item;  
      }
    }
  }
  return input;
  
};

console.log(insertionSort(arr));
