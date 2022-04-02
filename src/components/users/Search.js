import React, { useState, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => { 
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  //Submit form
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something...", "light");
    } else {
      githubContext.onSearchSubmit(text);
      setText(""); //clear input after submitting search
    }
  };

  //Track user inputs
  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className='ui segment'>
        <form onSubmit={onFormSubmit} className='ui form'>
          <div className=''>
            <input
              type='text'
              name='text'
              placeholder='Search Users'
              value={text}
              onChange={onInputChange}
            />
          </div>
          <div>
            <input
              type='submit'
              value='Search'
              className='ui teal button'
              style={{ width: "100%" }}
            ></input>
          </div>
        </form>
        <div className='d-grid gap-2'>
          {githubContext.users.length > 0 && ( 
            <button
              className='btn btn-light'
              onClick={githubContext.clearUsers}
              type='button'
              style={{ width: "100%" }}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

