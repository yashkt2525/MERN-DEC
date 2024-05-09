import { useState } from "react";
import { signInWithGoogle } from "./services/firebase";

function App() {
  console.log("LocalStorage Data is", localStorage);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [image, setImage] = useState(localStorage.getItem("photo"));

  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <>
      <h1>
        {!name && <button onClick={signIn}>Sign in with Google</button>}
        {name ? <h1>hello {name}</h1> : <h1>SIgn In Please</h1>}
        {image ? <img src={image}></img> : "No image"}
      </h1>
    </>
  );
}

export default App;
