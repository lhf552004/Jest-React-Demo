// src/components/UserProfile.js
import React from "react";
import config from "../config";

const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.age}</p>
    <p>Environment: {config.envName}</p>
  </div>
);

export default UserProfile;
