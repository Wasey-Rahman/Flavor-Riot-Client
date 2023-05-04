import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>1)Tell us the differences between uncontrolled and controlled components.</h2>
            <p>In React, a component can either be a controlled or uncontrolled component depending on how it handles its state.An uncontrolled component is a form element that manages its own state internally. The state of the component is managed by the browser's DOM. In an uncontrolled component, the value of the input field is not controlled by React, but rather by the user's actions.A controlled component, on the other hand, is a form element that is managed by React. The value of the input field is controlled by the component's state. When the user interacts with the input field, an event is triggered and the state is updated.In general, controlled components offer more control and flexibility, but require more code to handle the state. Uncontrolled components, on the other hand, are easier to use, but may be limited in their functionality. </p>

            <h2>2)How to validate React props using PropTypes.</h2>
            <p>React provides a package called prop-types for type-checking props passed to components. This package can be used to validate the type and structure of props, and to warn the developer if the props are not of the expected type.If a prop is passed to a component that doesn't match the expected type, React will log a warning in the console. This can be very helpful in catching bugs early in the development process.</p>

            <h2>3)Tell us the difference between nodejs and express js.</h2>
            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It provides a set of APIs for handling various I/O operations, such as file system access, network communication, and process management. Node.js also includes a package manager, called npm, which makes it easy to install and manage third-party packages and libraries.

Express.js, on the other hand, is a popular open-source framework for building web applications on top of Node.js. It provides a set of features and tools for building HTTP servers and handling various web-related tasks, such as routing, middleware, request handling, and error management. Express.js is highly extensible and can be used to build various types of web applications, such as REST APIs, real-time applications, and web applications with server-side rendering.

In short, Node.js provides a runtime environment for executing JavaScript code outside of a browser, while Express.js is a framework built on top of Node.js that provides tools and features for building web applications.</p>

            <h2>4)What is a custom hook, and why will you create a custom hook?</h2>
            <p>In React, a custom hook is a JavaScript function that allows you to reuse stateful logic across components. Custom hooks are a way to extract component logic into reusable functions.

You would create a custom hook to encapsulate some functionality that you need to use across multiple components. By doing so, you can abstract the logic and make it easier to use and maintain.Custom hooks are a powerful tool in React, as they allow you to abstract complex logic and make it reusable. They can also help to make your code more organized and easier to maintain.</p>


            <Footer></Footer>
        </div>
    );
};

export default Blog;