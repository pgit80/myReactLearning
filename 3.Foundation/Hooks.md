# What are React Hooks?

- React Hooks are `normal JS utility functions` written by `FB Developers` and defined inside React package in node modules

- There two very useful functions:-
- 1. useState()
- 2. useEffect()

- useState()?

- it gives us superpowerful variable or state variable
- whenever a state variable updates/changes, react re-renders the components
- never create state variables outside our component
- it is used to create local state variables inside out function

- useEffect()?

- it takes a callback function
- and a dependency array

- Dependency Array [] is optional but callback function is mandatory and there are 3 cases with it

- Default behaviour of useEffect is to be called on each render

~ No dependency array=> useEffect is called on every render
~ Empty dependency array [] => useEffect called just once on initial render
~ If we put something on the [] then it is called only when dependency changes
~ - if dependency array is like this-> [button] then useEffect will be called every time button changes
