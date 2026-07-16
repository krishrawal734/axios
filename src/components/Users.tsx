import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userslice";

const Users = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state: any) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
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

      {users.map((user: any) => (
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