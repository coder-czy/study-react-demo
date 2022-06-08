import "./index.css";
const List = (props) => {
  let list = props?.data ?? [];
  console.log(props);
  return (
    <div>
      <ul className="box">
        {list.map((v) => {
          return (
            <li
              className={`box-item${v === "React" ? "-react" : ""}`}
              key={v}
              style={{ height: "50px", lineHeight: "50px" }}
            >
              {v}
              {v === "React" ? <span>1111</span> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
