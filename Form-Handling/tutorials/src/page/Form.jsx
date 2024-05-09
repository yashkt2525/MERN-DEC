import { Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";

function Form() {
  const userName = useRef();
  const password = useRef();
  const gmail = useRef();
  const rollNumber = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(userName.current);
    console.log(gmail.current);
    console.log(rollNumber.current);
    console.log(password.current);
  }
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
            ref={userName}
            label="UserName"
            variant="outlined"
            // fullWidth
            margin="normal"
            style={{ width: "50%" }}
          />

          <br />
          <TextField
            ref={rollNumber}
            label="Roll number"
            variant="outlined"
            // fullWidth
            margin="normal"
            style={{ width: "50%" }}
          />
          <br />
          <TextField
            ref={gmail}
            label="Gmail"
            variant="outlined"
            // fullWidth
            margin="normal"
            style={{ width: "50%" }}
          />
          <br />

          <TextField
            ref={password}
            label="Password"
            type="password"
            variant="outlined"
            // fullWidth
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

export default Form;
