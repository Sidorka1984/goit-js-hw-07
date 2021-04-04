const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesListItemsTamplate = ({ url, alt }) => {
    return `
    <li class="images-list__item">
         <img src = ${url} alt = ${alt} width = 640 height = 380>
</li>
`;
};
const imagesEl = document.querySelector('#gallery');
imagesEl.classList.add('gallery__list');


const markupGallery = images.map(imagesListItemsTamplate).join("");
console.log(markupGallery);
imagesEl.insertAdjacentHTML("afterbegin", markupGallery)



