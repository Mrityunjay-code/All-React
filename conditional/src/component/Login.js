import React from 'react';

const Login = () => {
    
  const isLoggedIn = false; 

  let message;
  if (isLoggedIn) {
    message = <h1>Welcome, user!</h1>;
  } else {
    message = <h1>Please log in to continue</h1>;
  }

  return <div>{message}</div>;
};

export default Login;
