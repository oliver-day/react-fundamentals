// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = React.useRef();
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameInputRef.current.value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lower case');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          ref={usernameInputRef}
        />
      </div>
      <div role="alert" style={{ color: 'red' }}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
};

export default App;
