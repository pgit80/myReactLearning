/*
* EP.2 Code

import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement( // heading is an object
    "h1", 
    {id:"heading"}, // attribute // this object is used to give id to our element
    "hello from js using react" // children
);

// ans to create above asked parent
// we can pass an array of object or a single object as third argument

// in below lines react is making my life tough not easy ;)
const parent = React.createElement(
     "div",
    {id:"parent"},
    [React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I'm h1"), 
        React.createElement(
            "h2",
            {},
            "I'm h2 "
        )]
    ),
    React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I'm h1"), 
        React.createElement(
            "h2",
            {},
            "I'm h2"
        )]
    )]
);

// to make our life easy and skip this method of writing code we have jsx

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // root.render is a function which takes react element or js object, put it on dom tree, renders it 
root.render(parent);

import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const reactHeading = React.createElement("h1", {id:"heading"}, "Hello React 🚀");
// React Element using JSX
const jsxHeading = (<h1 id="jsxheading" className="head">This is JSX Heading 🚀</h1>);

// React functional component
// it is a normal js function which returns some piece of jsx or a function which returns a React Element.
const Title = ()=> <h1>This is title</h1>
// all the three methods are valid to render Title
const FunctionalComponent = ()=>{
    return (
        <>
        <Title/> 
        <Title></Title>
        {Title()}
        <h1>React Functional Component</h1>
        </>
        
    );
};
// this way of writing is also valid
// const HeadingComponent2 = () => (<h1>React Functional component</h1>);


// because in JS this function is same as
const fn=()=>{
    return true;
}
// this function
// const fn = ()=> true;
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering a React element
root.render(jsxHeading);
root.render(reactHeading);

// rendering a react component
root.render(<FunctionalComponent/>);
*/
/*
* Header
    - Logo
    - Nav Items
* Body
    - Search box
    - RestaurantContainer
    - RestaurantCard
        - Image
        - Name
        - Rating
        - Cuisine
        - Delivery time

* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

// header
const Header=()=>{
    return(
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart 🛒</li>
                </ul>
            </div>
        </div>
    )
}
// not preferred way to insert css
const CardStyle={
    backgroundColor: "#f0f0f0"
}

const RestaurantCard=(props)=>{ // we could have done this also-> ({resName, cuisine, rating, deliveryTime})
    // this is called props destructuring or unpacking
    console.log(props); // the arguments are received as js objects
    return(
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}> 
            <img className='res-img' alt='res-image' src='https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg'/>
            <h3>🏨 {props.resName}</h3>
            <h4>🍲 {props.cuisine}</h4>
            <h4>{props.rating} 🌟</h4>
            <h4>🏍️ {props.deliveryTime}</h4>
        </div>
    )
}


const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName="Zaika" cuisine="Biryani" rating="4.4" deliveryTime="32 mins."/>
                <RestaurantCard resName="KFC" cuisine="Non-Veg" rating="4.8" deliveryTime="30 mins."/>
                <RestaurantCard resName="MC Donalds" cuisine="USA" rating="4.7" deliveryTime="22 mins."/>
                <RestaurantCard resName="Baba ka Dhaba" cuisine="Desi" rating="3.4" deliveryTime="10 mins."/>
                <RestaurantCard resName="Auntie ke bade" cuisine="North India" rating="4.0" deliveryTime="15 mins."/>
                <RestaurantCard resName="Chat Wala" cuisine="Mix" rating="4.9" deliveryTime="30 mins."/>
                <RestaurantCard resName="Snack Corner" cuisine="Chinese" rating="4.3" deliveryTime="25 mins."/>
                <RestaurantCard resName="MBA Chaiwala" cuisine="Chai" rating="4.1" deliveryTime="15 mins."/>
                
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            {/* <Footer/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)