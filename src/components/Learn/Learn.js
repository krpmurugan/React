import React, { Component } from 'react';
import './Learn.css';

class Learn extends Component {

  /*React Life cycle process
  
  With the potential for an n depth tree of Elements, each of the Elements need to go through their 
  own entire life cycle process. 
  Just like the parent Element, React creates a new instance for each child They go through construction,
   default props, initial state, componentWillMount() and render(). 
   If the child has children, the process starts again...all the way down*/

  constructor(props) {
    super(props);
    this.state = { mode: undefined } ;
  }

  componentWillMount() {

    let mode;
    if (this.props.age > 70) {
      mode = 'old';
    } else if (this.props.age < 18) {
      mode = 'young';
    } else {
      mode = 'middle';
    }
    this.setState({ mode });
  }

  render() {

    /* render() is the one method that exists across multiple life cycle phases.
     It occurs here in Birth and it is where we spend a lot of time in Growth

     2. Render() function is a pure method, this means we shouldn't call setState() method inside the render() function
     3. Render methods should be a pure function of props and state
     4. React will also warn you if you try to access the Native UI elements in the render pass.
     5. render() method returns a single React Element. This Element may have children elements. Those children may also have children, and so on.

    */

    // BAD: Do not do this!
    //this.setState({ foo: 'bar' });

    // BAD: Don't do this either!
    //let node = ReactDOM.findDOMNode(this); // 4th point
 
    return (
        

      <div className="row small-up-12">
            <h2>{ this.props.name } (age: { this.props.age })</h2> 
          </div>
    );
  }
}
Learn.defaultProps = { age: '18', name:"Murugan" };

 /*
    1. This method is only called one time which is before the initial render.
    Since this method is called before render() our Component will not have access to the Native UI
     (DOM, etc.).
    2.  In the example above we call this.setState() and update our current state before render. 
    If we need state values on calculations passed in props, this is where we should do the logic.
Other uses for componentWillMount() includes registering to global events, such as a Flux store.
 If your Component needs to respond to global Native UI events, such as window resizing or focus changes, 
 this is a good place to do it2.*/


export default Learn;
