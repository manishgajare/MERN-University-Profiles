import React from 'react';
import map from 'lodash/map';

import Header from './Header';
import * as api from '../api';

class AddNewProfile extends React.Component {

  state = {
    pageHeader: "Add New Profile",
    firstName: '',
    lastName: '',
    description: ''
  };

  componentDidMount() {

  }

  pageHeader() {
    return this.state.pageHeader;
  }

  handleSubmit = () => {
    event.preventDefault();
    alert('Full Name: ' + this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.description);
  }

  handleChange = (event) => {
    if (event.target.id === 'firstName') {
      this.setState({
          firstName: event.target.value
      });
    } else if (event.target.id === 'lastName') {
      this.setState({
          lastName: event.target.value
      });
    } else if (event.target.id === 'description') {
      this.setState({
          description: event.target.value
      });
    }
  }

  fetchPosts() {
    api.fetchPosts()
      .then( (posts) =>{
        return posts;
      })
      .catch(console.error);
  };

  render() {
    return (
      <div className="AddNewProfile">
        <Header message={this.pageHeader()} />
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label><br />
          <label>
            Last Name:
            <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label><br />
          <label>
            Description:
            <textarea rows="4" cols="50" id="description" value={this.state.description} onChange={this.handleChange} />
          </label><br />
          <label>
            Post:
            <select>
              //{this.fetchPosts()}
            </select>
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddNewProfile;
