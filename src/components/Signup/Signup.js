import React, { Component } from 'react';
import './Signup.css';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

class Signup extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      dob: '',
      address: '',
      gender: '',
      redirectToReferrer: false,
      dob: moment()
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(date) {
    this.setState({
      dob: date
    });
  }


  signup() {
    if (this.state.username && this.state.password) {
      PostData('signup', this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }


  render() {

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'} />)
    }

    return (
      <div className="row">
        <div className="medium-12 columns">
          <h3>Signup</h3>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
          <label>Email</label>
          <input type="email" name="email" placeholder="email" onChange={this.onChange} />
          <label>Address</label>
          <textarea name="address" placeholder="Address" onChange={this.onChange} ></textarea>
          <label>DOB</label>
          <DatePicker selected={this.state.dob} onChange={this.handleChange} maxDate={moment()} dateFormat="YYYY-MM-DD" placeholderText="Click to select a date" isClearable={true} showMonthDropdown
            showYearDropdown
            dropdownMode="select" />
          <label>Gender</label>
          <input type="radio" name="gender" onChange={this.onChange} value='M'   /> <label for="pokemonRed">Male</label>
          <input type="radio" name="gender" onChange={this.onChange} value='F'    /> <label for="pokemonRed">Female</label><br />

          <input type="submit" className="button success" value="Submit" onClick={this.signup} />
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
