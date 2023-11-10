import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GitHubService from '../api/GitHubService';
import UserRepositories from './UserRepositories';
import "../styles/UserDetails.css"

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userData = await GitHubService.getUserDetails(username);
      setUserDetails(userData);
    };

    fetchUserDetails();
  }, [username]);

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <p>ID: {userDetails.id}</p>
      <p>Login: {userDetails.login}</p>
      <p>Profile URL: {userDetails.html_url}</p>
      <p>Account Creation Date: {userDetails.created_at}</p>
      <UserRepositories username={username} />
    </div>
  );
};

export default UserDetails;
