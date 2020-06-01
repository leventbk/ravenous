const apiKey = 'enter api key';

const yelp = {
    search(term, location, sortBy) {
        //bypass CORS restriction via cors-anywhere
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
            {headers: {Authorization: `Bearer ${apiKey}`}}
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(((businesses) => {
                    console.log(bunsiness);
                    return {
                        id: businesses.id,
                        imageSrc: businesses.image_url,
                        address: businesses.location.address,
                        city: businesses.location.city,
                        state: businesses.location.state,
                        zipCode: businesses.location.zip_code,
                        category: businesses.category[0].title,
                        rating: businesses.rating,
                        reviewCount: businesses.review_count,
                    };    
                }));
            }
        })
    }
};

export default Yelp;