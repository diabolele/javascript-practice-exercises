let numbers =[5, -6, 2, 0, -1, 25, 15, 10, 7, 1];
numbers.forEach(function(number)) 
 {
 if (numbers % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}