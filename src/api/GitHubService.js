import axios from 'axios';

const BASE_URL = 'https://githubuserstest.onrender.com/api';

const GitHubService = {
  getUsers: async (since) => {
    const response = await axios.get(`${BASE_URL}/users`, { params: { since } });
    return response.data;
  },
  getUserDetails: async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}/details`);
    return response.data;
  },
  getUserRepos: async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  }
};

export default GitHubService;
