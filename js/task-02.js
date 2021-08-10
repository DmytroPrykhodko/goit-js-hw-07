const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeElementsItem = options => {
  return options.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('ingredients__item');
  itemEl.textContent = ingredient;
  return itemEl;
  });

    };
const elementsItem = makeElementsItem(ingredients);
ingredientsEl.append(...elementsItem);