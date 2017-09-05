// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = profileId => {
  if (profileId) {
    return `${config.serverUrl}/api/profiles/${profileId}`;
  }
  return `${config.serverUrl}/api/profiles`;
};

const getInitialData = (profileId, apiData) => {
  if (profileId) {
    return {
      currentProfileId: apiData.id,
      profiles: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    profiles: apiData.profiles
  };
};


exports.serverRenderApp = (profileId) =>
  axios.get(getApiUrl(profileId))
    .then(resp => {
      const initialData = getInitialData(profileId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData: initialData
      };
    });

import AddNewProfile from './src/components/AddNewProfile';

exports.serverRenderAddNewProfile = () => {
  return ReactDOMServer.renderToString(<AddNewProfile />);
};
