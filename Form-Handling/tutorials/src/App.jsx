// import { useState } from "react";
// import Home from "./page/Home";
import { useState } from "react";
import { MyContext } from "./MyContext";
// import Form from "./page/Form";
import Home from "./page/Home";

function App() {
  const [data, setData] = useState(0);
  // const [arr, setArr] = useState([1, 2, 3, 4]);
  return (
    <>
      {/* <Home arr={arr} /> */}
      <MyContext.Provider value={{ data, setData }}>
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
