# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Ans.(i)React is a JavaScript library for building user interfaces.
    (ii)React is used to build single page applications.
    (iii)React allows us to create reusable UI components.

-->React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

-->React only changes what needs to be changed!
React finds out what changes have been made, and changes only what needs to be changed.

1. Describe component state.

Ans.The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows us to create components that are dynamic and interactive.

1. Describe props.

Ans.“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Ans.A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. 
By passing in a dependency array as the second argument to the effect hook, we can sync effects in a React component to changes of certain state or props.
