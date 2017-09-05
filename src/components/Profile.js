import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  render () {
    return (
      <div className="Profile">
      <div className="ProfileDescription">
        {this.props.description}
      </div>
      <div className="home-link link" onClick={this.props.profileListClick}>
        View All Profiles
      </div>
      </div>
    );
  }
}

Profile.PropTypes = {
  description: PropTypes.string.isRequired,
  profileListClick: PropTypes.func.isRequired
};

export default Profile;
