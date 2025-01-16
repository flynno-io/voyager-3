import React from "react";

export default function LoginForm() {
  return (
    <form className={`w-96 m-5 pe-5 flex h-auto flex-col space-y-2`}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
