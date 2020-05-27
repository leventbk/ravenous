const apiKey = 'enter api key';

const yelp = {
    search(term, location, sortBy) {
        //bypass CORS restriction via cors-anywhere
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
    }
};