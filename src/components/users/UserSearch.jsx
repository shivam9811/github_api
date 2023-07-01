import { useState, useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
import { toast } from "react-toastify";
import { searchUser } from "../../context/Github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const ctx = useContext(GithubContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "" || text.trim() === "") {
      toast.warning("Please enter something");
    } else {
      ctx.dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUser(text);
      ctx.dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };

  const handleClear = () => {
    ctx.clearUsers();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                type="submit"
                className=" absolute top-0 right-0 rounded-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {ctx.users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
