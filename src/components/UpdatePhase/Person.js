import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <div>{ this.props.name } (age: { this.props.age })</div>
    );
  }
}

Person.defaultProps = { age: 'unknown' };

export default Person;
