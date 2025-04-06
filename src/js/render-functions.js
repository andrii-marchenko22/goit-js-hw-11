import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loader");

export const createGallery = (images) => {
    gallery.innerHTML = images.map(
        ({
           id, 
           largeImageURL,
           webformatURL,
           tags,
           likes,
           views,
           comments,
           downloads,
        }) =>
        `
           <a class="gallery-link" href="${largeImageURL}">
               <div class="gallery-item" id="${id}">
                   <img class="gallery-item-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                   <div class="info">
                       <p class="info-item"><b>Likes </b>${likes}</p>
                       <p class="info-item"><b>Views </b>${views}</p>
                       <p class="info-item"><b>Comments </b>${comments}</p>
                       <p class="info-item"><b>Downloads </b>${downloads}</p>
                   </div>
               </div>
           </a>
       `).join('');

        new SimpleLightbox('.listsImages a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
        }).refresh();;
};

export const clearGallery = () => {
    gallery.innerHTML = '';
};
export const showLoader = () => {
   loader.classList.add("show");
};

export const hideLoader = () => {
   loader.classList.remove("show"); 
};