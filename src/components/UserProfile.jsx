import React, { useEffect, useState } from "react";
import config from "../config";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${config.apiUrl}/user?id=${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <p>Environment: {config.envName}</p>
    </div>
  );
};

export default UserProfile;
