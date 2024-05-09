import { useEffect } from "react";
import { increment, decrement, fetchData } from "./redux/counter-slice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  console.log("Count is Count", count);

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch(fetchData());
    };

    getData();
  }, [dispatch]);

  const data = useSelector((state) => state.counter.data);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);

  console.log("The data is ", data, loading, error);
  return (
    <>
      <h1>The count is {count}</h1>
      {!loading
        ? data.map((product) => <h1 key={product.id}>{product.title}</h1>)
        : "Loading Please Wait"}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
