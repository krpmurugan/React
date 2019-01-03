import React, { Component } from 'react';
import './Update.css';
import Person from './Person';

class Update extends Component {

  /* 
  Once our Component is mounted in the Birth phase, we are prepped and ready for the Growth/Update phase. 
	The Growth phase is where a Component spends most of its time. Here we get data updates, 
  act on user or system actions and provide the overall experience for our application.
  
  The growth phase is triggered 3 differnt ways.

  Changing of Props
  Changing of States
  Calling forceUpdate()

  Changing of Props:

  <Person name="Bill" />
  
  render() {
    // BAD: DON'T DO THIS!
    this.props.name = 'Tim';
    return (
      <div className={ classNames('person', this.state.mode) }>
        { this.props.name } (age: { this.props.age })
      </div>
    );
  }

  TypeError: Cannot assign to read only property 'name' of object '#<Object>'

  Because Props are immutable by the component itself.

  setState(): This is also triggerd in update phase. 
  The setState() method should be treated as an asynchronous process

  forceUpdate(): 

  componentWillReceiveProps() : This methos is called when props are passed to the component instance.

  componentWillReceiveProps() if the Update is triggered by just a state change

*/

  constructor(props) {
    super(props);
    this.state = { name: '' } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.currentTarget.value });
  }

  //componentWillReceiveProps(nextProps);

  /* ComponentShouldUpdate - It is deprecated and out of box
  React PureMixin will do the same in ComponentShouldUpdate

  It checks the current props and state, compares it to the next props and state and then returns true if they are different, or false if they are the same.


  componentWillUpdate() - It is called every time a re-render is required.
  This Method passing two arguments nextProps, nextState
  componentWillUpdate() is similar to ComponentWillMount() and different is it is called every time a re-render is required.
   
  
  componentDidUpdate() - This Method passing two arguments prevProps, prevState
  This is the inverse of componentWillUpdate().
  Just like componentDidMount(), the componentDidUpdate() is called after all of the children are updated
  It will managing the 3rd party lib like datepicker, chart etc.

  componentDidUpdate(prevProps, prevState) {
  // One possible fix...
  let height = ReactDOM.findDOMNode(this).offsetHeight;
  if (this.state.height !== height ) {
    this.setState({ internalHeight: height });
  }
}


  */


  

  render() {
    return (
    <div className="row small-up-12">
      <input type="text" onChange={ this.handleChange } />
      <Person name="Murugan" age="23"/>   {/* Examples  for Props */}

      
    </div>

    );
  }
}

export default Update;
