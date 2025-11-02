const heading = React.createElement( // heading is an object
    "h1", 
    {id:"heading"}, // attribute // this object is used to give id to our element
    "hello from js using react" // children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // root.render is a function which takes react element or js object, put it on dom tree, renders it 