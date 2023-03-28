import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector('.gallery');
createGallery(galleryItems);
function createGallery(galleryArr){
    const newGallery = galleryArr.map(({preview, original, description}) =>{
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    }).join();
    gallery.innerHTML = newGallery;
}

gallery.addEventListener("click", fnGetItemGallery);

function fnGetItemGallery(e) {
 const {target} = e;

 if (target.className !== "gallery__image") {
    return;
  }

  const selectedImg = target.dataset.source;
  console.log(selectedImg);
}