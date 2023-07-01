import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/Github/GithubContext";

import { useContext } from "react";

function UserResult() {
  const ctx = useContext(GithubContext);

  if (!ctx.isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols2">
        {ctx.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner></Spinner>;
  }
}

export default UserResult;
