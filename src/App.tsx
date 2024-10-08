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
  console.log("Messages: ", messages);

  if (!messages || messages.length === 0) {
    return <div>No messages yet!</div>;
  }

  return (
    <div>
      <h2>Messages:</h2>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.body}</p>
          <small>
            {new Date(
              message.creationTime || Date.now() // Use current time if `creationTime` is undefined
            ).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}


export default App;