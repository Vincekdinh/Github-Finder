import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types"; 

const Repos = ( {repository }) => {  

  return (
    <div>
      {repository.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repository: PropTypes.array.isRequired,
};

export default Repos;
