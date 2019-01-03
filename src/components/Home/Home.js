import React, { Component } from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostData';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data: []
    };
    this.logout = this.logout.bind(this);
  }

  getData() {
    const result = JSON.parse(sessionStorage.getItem('userData'));
    const name = result.userData.username;
    if (name) {
      PostData('myprofile/' + name, this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          this.setState({ data: responseJson.userData[0] });
        }
      });
    }
  }

  componentDidMount() {
    this.getData();
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }
    return (

      <div className="row">
        <div className="medium-12 columns">
          <h3>Home</h3>
          <table>
            <tbody>
              <tr>
                <td>Username</td>
                <td>{this.state.data.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.data.email}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>{this.state.data.dob}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.data.address}</td>
              </tr>
              <tr>
                <td>Sex</td>
                <td>
                  {this.state.data.sex == 'M'
                    ? <span>Male</span>
                    : <span>Female</span>
                  }

                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" onClick={this.logout} className="button">logout</button>
        </div>
      </div>
    );
  }
}

export default Home;
