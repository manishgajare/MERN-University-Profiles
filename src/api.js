import axios from 'axios';

export const fetchProfile = profileId => {
  return axios.get(`/api/profiles/${profileId}`)
          .then(resp => resp.data)
};

export const fetchProfilesList = () => {
  return axios.get(`/api/profiles`)
          .then(resp => resp.data.profiles)
};

export const fetchPosts = () => {
  return axios.get(`/api/posts`)
          .then(resp => resp.data.posts)
};
