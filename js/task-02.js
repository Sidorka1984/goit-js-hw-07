const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsEl = ingredients.map(ingredient => {
// const items = document.createElement('li');
//     items.textContent = ingredient;
 
//     console.log(items);

//     return items;

// })
// const ingredientsEllist = document.querySelector('#ingredients');
// ingredientsEllist.append(...ingredientsEl);


// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
  
// });

// console.log(foodIngredients);

const ulList = document.getElementById("ingredients");
console.log(ulList);
ingredients.forEach((ingredient) => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  console.log(liItem);
  ulList.append(liItem);
})