import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/users";
import Loader from "../components/Loader";

const UserListAPI = () => {
  const userList = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          userList.map((user) => {
            return (
              <Link to={`/user/${user.id}`} key={user.id}>
                <li>{user.email}</li>
              </Link>
            );
          })
        )}
        {/* <img src={`https://image.tmdb.org/t/p/w500/${}`}/> */}
      </ul>
    </>
  );
};

export default UserListAPI;
