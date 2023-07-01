import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold">Latest Respositories</h2>
          {repos.map((repo) => (
            <RepoItem repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
