import { IMG_URL } from "../utils/constants"; // importing a named export

const RestaurantCard=(props)=>{ // we could have done this also-> ({resName, cuisine, rating, deliveryTime})
    // this is called props destructuring or unpacking
    const {resData} = props;
    // console.log(resData); // the arguments are received as js objects

    const info = resData.info || resData.data;  // ⬅️ key fix

    return(
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}> 
            <img className='res-img' alt='res-image' src={ IMG_URL + info?.cloudinaryImageId}/>
            <h3>🏨 {info?.name}</h3>
            <h4>🍲 {info?.cuisines}</h4>
            <h4>{info?.avgRating} 🌟</h4>
            <h4>🏍️ {info?.sla?.deliveryTime || info?.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;
