import React from 'react';
import PropTypes from 'prop-types';

import ProfilePreview from './ProfilePreview';

class ProfileList extends React.Component {
  render() {
    return (
      <div className="ProfileList">
          {Object.keys(this.props.profiles).map(profileId =>
            <ProfilePreview
            key={profileId}
            onClick={this.props.onProfileClick}
            {...this.props.profiles[profileId]} />
          )}
      </div>
    );
  }
}

ProfileList.protoTypes = {
  onProfileClick: PropTypes.func.isRequired,
  profiles: PropTypes.object
};

export default ProfileList;
