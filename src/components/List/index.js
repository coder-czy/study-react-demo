import "./index.css"
const List = ({ list, sendMsg }) => {
  // let list = props?.list ?? []
  // console.log(sendMsg)
  function getMsg () {
    sendMsg('子组件传递的信息')
  }
  return (
    <div>
      <ul className="box" onClick={getMsg}>
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
          )
        })}
      </ul>
    </div>
  )
}
List.defaultProps = {
  list: [],
  test: 'test'
}

export default List
