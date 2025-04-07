import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
// import { KEY } from "./js/pixabay-api.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const btn = document.querySelector(".btn-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const userValue = event.target.elements['search-text'].value.trim();

    if (!userValue) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    showLoader();

    getImagesByQuery(userValue)
        .then(response => {
            hideLoader(); 

            if (response.data.hits.length === 0) { 
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }

            clearGallery();
            createGallery(response.data.hits);
        })
        .catch(error => {
            hideLoader(); 
            iziToast.error({
                title: 'Error',
                message: 'There was an error fetching the images. Please try again later.',
            });
        });
});
