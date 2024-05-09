import { useContext } from "react";
import { MyContext } from "../MyContext";
import First from "./First";
import Sec from "./Sec";

const Card = () => {
  //   const { data } = useContext(MyContext);
  //   console.log(data);
  return (
    <div>
      Card
      <First />
      <Sec />
    </div>
  );
};

export default Card;
