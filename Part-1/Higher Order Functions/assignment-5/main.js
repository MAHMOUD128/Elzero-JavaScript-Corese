let nums = [2, 12, 11, 5, 10, 1, 99];
output
500
solution
let result = nums.reduce(function(acc, curr) {
    if (curr % 2 === 1) 
    {
      return acc + curr;
    } else {
      return acc * curr;
    }
  }, 1);
  
  console.log(result);