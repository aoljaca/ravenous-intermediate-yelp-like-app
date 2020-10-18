const apiKey = 'FUvUeQxjS50eD-Vccfc4TtiEJqKUodrmqZHYoaJXqYTI6rVyidtaWFnJWmjIHaNWnyTjQ8ek1_HzM5E3P7tgTw4zqNx_EOlPblxaHppEuE5EiOPB9vVwTMyg0DduX3Yx'

const Yelp = {
    async search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }}).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                     return {
                         id: business.id,
                         imageSrc: business.image_url,
                         name: business.name,
                         address: business.location.address1,
                         city: business.location.city,
                         state: business.location.state,
                         zipCode: business.location.zip_code,
                         category: business.categories[0][2],
                         rating: business.rating,
                         reviewCount: business.review_count
                     }
                })
            }
        })
    }
}

export default Yelp