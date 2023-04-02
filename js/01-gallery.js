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
    }).join('');
    gallery.innerHTML = newGallery;
}

gallery.addEventListener("click", fnGetItemGallery);

function fnGetItemGallery(e) {
    e.preventDefault(); 
    const {target} = e;

    if (target.className !== "gallery__image") {
        return;
    }

    const selectedImg = target.dataset.source;
    const altData = target.getAttribute('alt');
     
    const instance = basicLightbox.create(`
        <img
        class="gallery__image"
        src="${selectedImg}"
        alt="${altData}"
        width="800" 
        height="600"
        />
    `);
    
   console.log(instance);
   
    instance.show();
    if(instance.visible()){
        document.onkeydown = (evt) => { 
            console.log(evt.key);
            if (evt.key === "Escape" || evt.code === 27) {
                instance.close();
                
            }
        };
    }

    
    
    
}

