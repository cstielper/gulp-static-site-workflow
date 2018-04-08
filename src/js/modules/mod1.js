export function sayHello( name ) {
  const toSay = `Hello, my name is ${name}.`;

  return toSay;
}

export function listFavoriteFoods( arr ) {
  let foodList = '';

  arr.forEach( (element, i) => {
    if(i == arr.length -1) {
      foodList += `and ${element}.`;
    } else {
      foodList += `${element}, `;
    }
  });

  return `Some of my favorite foods are: ${foodList}`;
}