import React from "react";
import Main from "../components/helpers/Main";
import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";

function HomePage() {
  return (
    <Main>
      <UserSearch />
      <UserResult />
    </Main>
  );
}

export default HomePage;
