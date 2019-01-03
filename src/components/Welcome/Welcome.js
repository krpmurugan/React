import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-12">
            <div className="column welcome_1">
              <h5>Welcome to EMIS -  {this.props.name} </h5>
              <p>We've been building our own primary care ecosystem of healthcare providers for more than ten years, with more than 100 partners now accredited to the partner programme.

Our partner programme provides GP practices with a great choice of innovative, quality add-on products to complement and enhance the core functionality within our products. Everyone is different, and through the partner programme our users can choose from accredited products that best suit the way they want to work, with the assurance that the products have been accredited to meet EMIS Health’s standards.

</p>
<a href="/login" className="button">Login</a>
<a href="/signup" className="button success">Signup</a>
            </div>
            
          </div>
    );
  }
}

export default Welcome;
