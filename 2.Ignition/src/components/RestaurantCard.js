import { IMG_URL } from "../utils/constants"; // importing a named export

const RestaurantCard=(props)=>{ // we could have done this also-> ({resName, cuisine, rating, deliveryTime})
    // this is called props destructuring or unpacking
    const {resData} = props;
    // console.log(resData); // the arguments are received as js objects

    return(
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}> 
            <img className='res-img' alt='res-image' src={ IMG_URL + resData.data.cloudinaryImageId}/>
            <h3>🏨 {resData.data.name}</h3>
            <h4>🍲 {resData.data.cuisines}</h4>
            <h4>{resData.data.avgRating} 🌟</h4>
            <h4>🏍️ {resData.data.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;