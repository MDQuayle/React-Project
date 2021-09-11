import React from 'react'

function LogIn({onLogIn}){
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInData),
    })
      .then((r) => r.json())
      .then((user) => {
        onLogIn(user);
        history.push("/");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={logInData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={logInData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LogIn; 