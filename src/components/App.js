import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ProfileList from './ProfileList';
import Profile from './Profile';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {

  static PropTypes = {
    initialData: PropTypes.object.isRequired
  };

  state = this.props.initialData;

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentProfileId: (event.state || {}).currentProfileId
      });
    });
  }

  componentWillUnmount() {
    onPopState(null);
  }

  fetchProfile = (profileId) => {
    pushState(
      {currentProfileId: profileId},
      `/profiles/${profileId}`
    );

    api.fetchProfile(profileId).then(profile => {
        this.setState({
          currentProfileId: profile.id,
          profiles: {
            ...this.state.profiles,
            [profile.id]: profile
          }
        });
      });
  };

  fetchProfilesList = (profileId) => {
    pushState(
      {currentProfileId: null},
      `/`
    );

    api.fetchProfilesList().then(profiles => {
        this.setState({
          currentProfileId: null,
          profiles
        });
      });
  };

  pageHeader() {
    if (this.state.currentProfileId) {
      let currentProfile = this.currentProfile();
      return currentProfile.firstName + ' ' + currentProfile.lastName;
    } else {
      return 'University Profiles'
    }
  }

  currentProfile() {
    return this.state.profiles[this.state.currentProfileId];
  }

  currentContent() {
    if (this.state.currentProfileId) {
        return <Profile profileListClick={this.fetchProfilesList} {...this.currentProfile()} />;
    } else {
      return <ProfileList
        onProfileClick={this.fetchProfile}
        profiles={this.state.profiles} />;
    }
  }

  render () {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
