import React, { Component } from 'react';
import './LearnDidMount.css';

class LearnDidMount extends Component {

  constructor(props) {
    super(props);
    this.state = { mode: undefined } ;
  }

  componentDidMount() {

    //This is the birth mounting in-depth

    //https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/post_mount_with_component_did_mount.html


    /*The last step in the Birth/Mount life cycle phase is our post-mount access via componentDidMount().
     This method is called once all our children Elements and our Component instances are 
     mounted onto the Native UI.
    1. componentWillMount(), componentDidMount() is only called one time. Unlike our other Birth/Mount 
    methods, where we start at the top and work down,
    2. componentDidMount() works from bottom to up
    3. If you require this kind of functionality,you have the ability to call this.setState()
     or forceUpdate() use componentDidMount() and can't use inside the loops because it called only once.
    4. If you want to initailize the third party lib like date picker etc, we should use did mount.

    */
    console.log('Component Did mount called');
  }

  render() {
    return (
      <div className="row small-up-12">
            <h2>{ this.props.name } (age: { this.props.age })</h2> 
          </div>
    );
  }
}
//LearnDidMount.defaultProps = { age: '30 ', name:"Arun" };

export default LearnDidMount;
