import { useUser } from "@clerk/clerk-react";

export default function Badge() {
  const { user } = useUser();
  if (!user) return null;
  return <span>Logged in as {user.fullName}</span>;
}