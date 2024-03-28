import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName == "Yash" && password == "1234") {
      console.log("Login Successful");
    } else {
      console.log("Wrong Credentials");
    }
    console.log("UserName ", userName);
    console.log("Password ", password);
  };
  return (
    <>
      <Stack
        height={"80vh"}
        width={"100vw"}
        direction={"column"}
        spacing={{ xs: 1, sm: 2 }}
        flexWrap={"wrap"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <form onSubmit={handleSubmit} style={{ marginLeft: "30vmax" }}>
          <TextField
            label="UserName"
            variant="outlined"
            // fullWidth
            value={userName}
            onChange={handleUserName}
            margin="normal"
            style={{ width: "50%" }}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            // fullWidth
            value={password}
            onChange={handlePassword}
            margin="normal"
            style={{ width: "50%" }}
          />
          <br />

          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
            style={{ marginTop: "1rem" }}
          >
            Submit
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default App;
