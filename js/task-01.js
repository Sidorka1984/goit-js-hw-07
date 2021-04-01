const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

const itemNameEl = document.querySelectorAll('h2')
itemNameEl.forEach(function(itemEl) {

    console.log(`Категория: ${itemEl.textContent}`);
    const itemLengthEl = itemEl.nextElementSibling.children.length;
    console.log(`Количество элементов: ${ itemLengthEl }`);
});

