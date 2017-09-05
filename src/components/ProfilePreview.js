import React from 'react';
import PropTypes from 'prop-types';

class ProfilePreview extends React.Component {
  handleClick = () => {
      this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div className="link ProfilePreview" onClick={this.handleClick}>
        <div className="profileName">
          {this.props.firstName} {this.props.lastName}
        </div>
        <div className="profileId">
          {this.props.id}
        </div>
      </div>
    );
  }
}

ProfilePreview.protoTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default ProfilePreview;
