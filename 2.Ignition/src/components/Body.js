import RestaurantCard from "./RestaurantCard"; // default import

// import resObj from "../utils/mockData";//no need

// importing hooks
import { useState, useEffect } from "react"; // named import

import Shimmer from "./Shimmer";

const Body = () => {
  // State variable- super powerful variable, it is called state variable because it maintains the state of our component
  // this is a local state variable- super powerful.

  // const [resList, setResList] = useState( resObj ); // []- default value
  const [resList, setResList] = useState([]); // removing mock data.
  // above line is just array destructuring nothing else.
  const [searchText, setSearchText] = useState("");
  // fixing the filtered list bug
  const [filteredRes, setFilteredRes] = useState([]);

  /*
      const arr = useState(resObj);
      const resList = arr[0]; // earlier vdom
      const setResList = arr[1]; // newest vdom
      our diff algo compares these two dom's to render updates/filtering in UI
    */

  // normal js variable
  let resList1 = [
    {
      data: {
        id: "74453",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        deliveryTime: 45,
        avgRating: "4.0",
      },
    },
    {
      data: {
        id: "74454",
        name: "MCD",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Burger"],
        deliveryTime: 45,
        avgRating: "3.9",
      },
    },
    {
      data: {
        id: "74455",
        name: "Zaika",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Biryani"],
        deliveryTime: 45,
        avgRating: "4.1",
      },
    },
  ];

  /*
    * useEffect syntax:- useEffect();is a function
    * it takes two arguments
      - 1. A callback function
      - 2. A dependency array
      - ex- useEffect(()=>{
              console.log("useEffect hook/function");
            }, []);
    * this function will be called after our component (here it is body) is rendered.
    * it follows the 2nd approach to load the data on ui
    * Page Loads with skeleton -> API called -> Page Re-Renders with new data.
    * so if we want to do something after our component renders we write it inside our useEffect.
    */

  useEffect(() => {
    console.log("useEffect hook/function called"); // logged second.
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // **Optional chaining(?.?..) is used because React renders before data is loaded.

    // It prevents crashes when accessing properties that may be undefined.**

    console.log(restaurants);

    setResList(restaurants || []);
    setFilteredRes(restaurants || []);
  };

  // shimmer ui-> a fake representation of page loads before, actual ui loads
  // conditional rendering
  if (resList.length === 0) {
    // until data is not loaded from api
    return <Shimmer />;
  }
  console.log("body Rendered"); // logged first.

  // search feature

  /*
   * fetch() is a method provided to us by browsers or we can say js engine.
   * fetch() fetches data from api
   */

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search🔎..."
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-top-res-btn"
          onClick={() => {
            // callback function
            // some logic to filter top rated res....
            const filterRes = resList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setResList(filterRes);
            // resList=resList.filter((res)=>res.data.avgRating>=4.0)
            console.log(filterRes);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id || restaurant?.data?.id || Math.random()}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
