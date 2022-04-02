import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner2";

import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import "../../App.css";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => { 
  const githubContext = useContext(GithubContext);
  
  const { user, getUser, loading, getUserRepos, repos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []); //infinite loop if [] is not added in second argument

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='pv-1'>
          Back To Search...
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger ' />
        )}
        <div className='card grid-1'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <div>
              {" "}
              {location && (
                <Fragment>
                  <h4>Location:</h4>
                  <p>{location}</p>
                </Fragment>
              )}{" "}
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h4>Bio:</h4>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className='btn btn-dark my-1'>
                Visit My Github Page
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repository={repos} />
      </Fragment>
    );
  }
};

export default User;
