import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup
    .string()
    .required("userName is Required")
    .min(3, "Username must be 3 character long"),
  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password Must Be 8 Character Long")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      "Password Must Contain at least One special Character and one number also"
    ),
  roll: yup
    .string()
    .required("Roll Number is Required")
    .matches(/^[1-9]/),
  gmail: yup
    .string()
    .required("Gmail is required")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Gmail Must Be Correct"),
});
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const [roll, setRoll] = useState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleGmail = (event) => {
    setGmail(event.target.value);
  };
  const handleRollNumber = (event) => {
    setRoll(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (data) => {
    // event.preventDefault();
    if (data.userName == "Yash" && data.password == "Yash@123") {
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
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          style={{ marginLeft: "30vmax" }}
        >
          <TextField
            {...register("userName")}
            label="UserName"
            variant="outlined"
            // fullWidth
            value={userName}
            onChange={handleUserName}
            margin="normal"
            error={!!errors.userName}
            helperText={errors.userName ? errors.userName.message : ""}
            style={{ width: "50%" }}
          />

          <br />
          <TextField
            {...register("roll")}
            label="Roll number"
            variant="outlined"
            // fullWidth
            value={roll}
            onChange={handleRollNumber}
            margin="normal"
            error={!!errors.roll}
            helperText={errors.roll ? errors.roll.message : ""}
            style={{ width: "50%" }}
          />
          <br />
          <TextField
            {...register("gmail")}
            label="Gmail"
            variant="outlined"
            // fullWidth
            value={gmail}
            onChange={handleGmail}
            margin="normal"
            error={!!errors.gmail}
            helperText={errors.gmail ? errors.gmail.message : ""}
            style={{ width: "50%" }}
          />
          <br />

          <TextField
            {...register("password")}
            label="Password"
            type="password"
            variant="outlined"
            // fullWidth
            value={password}
            onChange={handlePassword}
            margin="normal"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
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
