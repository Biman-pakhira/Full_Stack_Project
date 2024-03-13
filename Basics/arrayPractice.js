array_one = ["biman", "Guddu", "Spiderman"];
array_two = ["Biman1", "Guddu2", "Spiderman2"];
array_three = [...array_one, ...array_two]
// console.table(array_three);
// console.log(array_three);
array_four = array_three.concat(array_one, array_two, array_three);
// console.log(array_four);
console.log(Array.isArray(array_four));