import React from "react";
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      Home page.
      <UserButton afterSignOutUrl={"/"} />
    </div>
  );
};

export default HomePage;
