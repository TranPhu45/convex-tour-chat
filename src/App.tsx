import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  console.log("App component is rendering");

  return (
    <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
    </main>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  console.log("Fetched messages: ", messages);

  if (!messages || messages.length === 0) {
    return <div>No messages available for the current user.</div>;
  }

  return <div>Authenticated content: {messages.length}</div>;
}


export default App;