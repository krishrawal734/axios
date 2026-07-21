import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../features/userslice";
import type { AppDispatch, RootState } from "../app/store";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;
