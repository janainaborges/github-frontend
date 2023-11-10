import React, { useState, useEffect } from "react";
import GitHubService from "../api/GitHubService";

import "../styles/RepoList.css"

const UserRepositories = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const reposData = await GitHubService.getUserRepos(username);
      setRepositories(reposData);
    };

    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h2>Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRepositories;
