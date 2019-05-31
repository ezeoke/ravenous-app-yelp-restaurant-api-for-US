const apiKey = '4ddDU7Ljg3dMp4fRLARjCnkYcRbFbcnSnsgKpfZCr_PxuItcmFcV_pHlo6mIpbaKju8__LcwKmu7L7e0QVPDZR1Y2beCwB6n1RZhnZRqVbb5TubnD-KqHEJ-L3PsXHYx';

const yelp = {

searchYelp(term, location, sortBy){
return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
{headers: {Authorization: `Bearer ${apiKey}`}}).then(
    (response) => {
       return response.json()
    }).then(
    (jsonResponse)=>{
    if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
     return {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }
        });
        console.log(jsonResponse.businesses)
    }
    })
    }
};

export default yelp;

