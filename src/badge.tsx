import React from "react";
import { useUser } from "@clerk/clerk-react";

const Badge: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;

  // Separate the message for clarity
  const displayName = user?.fullName || "Unknown User";
  
  return <span>Logged in as {displayName}</span>;
};

export default Badge;
