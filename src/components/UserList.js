import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GitHubService from "../api/GitHubService";
import Pagination from "./Pagination";

import "../styles/UserList.css"


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await GitHubService.getUsers(currentPage);
      setUsers(usersData);
      const totalItems = usersData.total;
      const itemsPerPage = 10;
      const pages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(pages);
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="user-list">
      <div>
        {users.map((user) => (
          <div key={user.id} onClick={() => handleSelectUser(user.login)}>
            {user.login}
          </div>
        ))}
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UserList;
