import "./index.css";
import { useState } from "react";
const Count = () => {
  const [count, setcount] = useState(0);

  function add() {
    setcount(count + 1);
  }

  function reduce() {
    setcount(count - 1);
  }

  return (
    <div className="count-box">
      <span className="btn" onClick={reduce}>
        -
      </span>
      <span className="content">{count}</span>
      <span className="btn" onClick={add}>
        +
      </span>
    </div>
  );
};

export default Count;
