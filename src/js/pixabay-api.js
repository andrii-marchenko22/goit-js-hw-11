import axios from "axios";

export const KEY = "49660989-ba495770243477578b97293ac";

export const getImagesByQuery = query => {
    const searchParams = new URLSearchParams({
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })
    
    return axios(`https://pixabay.com/api/?${searchParams}`);
}

