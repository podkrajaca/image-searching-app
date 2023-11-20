import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Ee2FFiai6wMYwa7jJ57ZMAYBCO50WXSoeUqSdZMsGBM',
        },
        params: {
            query: term,

        },
    });


    return response.data.results;
};

export default searchImages;