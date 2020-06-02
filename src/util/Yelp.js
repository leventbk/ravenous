const apiKey = 'pTDWm-j6qxYfT6laibtp3rj4fVpYc9FEW5MU1pZt6ie1ROxOn3FBgz2E3czZzjvbpQh0Lf0YpkXEiao4_b593JqeeAvvuFczIpR9xGX5eIlYjt_9QFjMkTqPB9LOXnYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        //bypass CORS restriction via cors-anywhere
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
            {headers: {Authorization: `Bearer ${apiKey}`},}
        ).then(response => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,   
                }));
            }
        });
    }
};

export default Yelp;