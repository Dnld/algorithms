var arr = [12,2,1,6,15,13,8,14,3,9,16,5,10,4,7,11];

var bubbleSort = function(input) {
  input = input.slice();
  var i, j, passes, item, mext;
  var max = input.length - 1;
  
  for (i = 0; i <= max; i++) {
    passes = max - i;
    for (j = 0; j < passes; j++) {
      item = input[j];
      next = input[j + 1];
      if (item > next) {
        input[j + 1] = item;
        input[j] = next;
      }
    }
  }
  
  return input;
  
};

console.log(bubbleSort(arr));
