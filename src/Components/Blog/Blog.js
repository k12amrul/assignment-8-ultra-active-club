import React from 'react';

const Blog = () => {
    return (
        <div><h1>what is the difference props and state ?</h1>
            <p>Props are used to pass data from one component to another
                . The state is a local data storage that is local to
                 the component only and cannot be passed to other co
                 mponents. The this. setState property is used to up
                 date the state values in the component.</p>
            <h1>how does react work ?</h1>
            <p>React is a JavaScript library (not a framework) that 
                creates user interfaces (UIs) in a predictable and 
                efficient way using declarative code. You can use it
                 to help build single page applications and mobile 
                 apps, or to build complex apps if you utilise it with other libraries</p>
            <h1>how can use useeffect in react  without load API</h1>
            <p>The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.</p>



            
        </div>
    );
};

export default Blog;