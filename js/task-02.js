const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulList = document.getElementById("ingredients");
console.log(ulList);
// ingredients.forEach((ingredient) => {
//   const liItem = document.createElement('li');
//   liItem.textContent = ingredient;
//   console.log(liItem);
//   ulList.append(liItem);
// })

const ingredientEl = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  console.log(liItem);
  return liItem;
});

 ulList.append(...ingredientEl);