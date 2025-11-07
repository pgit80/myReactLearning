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