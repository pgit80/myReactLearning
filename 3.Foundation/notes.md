 - Just like DOM Elements we have React Elements.
-  React.createElement => React Element-JSObject=> HTML Element(render)

* What's JSX?
    to help developer life easy
    we have JSX and React and JSX are different things. JSX is not a part of React
    jsx- is a convention where we kind of merge the html and js together to create browser elements
    to deal and render react on the browsers we have ReactDOM
    JSX is not HTML in JS, it only has HTML/XML like syntax.

* How JSX works in browser?
    react element and jsx element both are objects and same in js structure in browser.
    js engine doesn't understand jsx :|
    js engine understands ECMAScript (ES)
    so how our code is working in browser?
    it is transpiled from the parcel and then send to js engine to execute
    JSX (transpiled before it reaches the JS engine) -> Parcel -> Babel -> JS
    JSX =>  React.createElement => React Element-JSObject=> HTML Element(render)
    jsx -> Babel -> JS
    to give attributes in jsx we follow camelCase syntax.
    if i want to write jsx in multiple lines, i'll write it in (paranthesis)
    inside the jsx we can use {} anywhere to run javascript code.

* React Component
// What is a Component ?
//  Two Types- 
// 1. Class Based - OLD Way - uses JS classes
// 2. Functional Components - Modern Way - uses JS functions

* What is component Composition?
- Nesting one component inside other.

- we can also use normal functions to create components, it is not necessary to use arrow functions only.

* If we want to provide inline styles we need to do this as JS objects.

* What are props?
- Props= properties, the data that we want to pass to components. As we know components are simple JS functions. and props are the arguments that we pass to our function

* ?? config driven UI ??
- study map, filter & reduce;

* Always give key while working with map() function.
- Why?
- Because we want to uniquely identify each container so that when we need we can render them uniquely. otherwise we have to render all the containers to show changes on only some containers.
- Some devs use map's default `index` as key but React says not to do such thing it is bad practice.
- not using keys <<<<< index as key <<<<<<<< unique id as key

Structure of the app:
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

*/

* we have two import-export pairs:
- default: export default Component -> import Component from "path";
- named: export const Component/data -> import {Component/data} from "path";