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