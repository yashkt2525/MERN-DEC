import { useContext } from "react";
import { MyContext } from "../MyContext";

const Fifth = () => {
  const { data, setData } = useContext(MyContext);

  const changeValue = () => {
    setData(data + 1);
  };
  console.log(data);
  return (
    <div>
      {data} this is in fifth component{" "}
      <button onClick={changeValue}>Click Here</button>{" "}
    </div>
  );
};

export default Fifth;
