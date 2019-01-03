import React from 'react';

/* A higher-order component in React is a pattern used to share common functionality 
between components without repeating code. 
A higher-order component is actually not a component though, it is a function. 
A HOC function takes a component as an argument and returns a component.
It transforms a component into another component and adds additional data or functionality.

The React docs say that higher-order components take a component and return a component.

For example: you need to manage the state of currently logged in users in your application. 
Instead of managing that state across all of the components that need that state, 
you could create a higher-order component to separate the logged in user state into a container component,
 then pass that state to the components that will make use of it.*/ 

const withSecretToLife =(WrappedComponent) =>{

  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent 
        {...this.props}
        secretToLife={42}
        />
      );
    }
  }

  return HOC;

};

export default withSecretToLife;
