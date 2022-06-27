import "./index.css"
import { useState, useEffect } from "react"
const Count = () => {
  // useState
  const [count, setcount] = useState(0)

  useEffect(() => {
    document.title = `You click ${count} times`

    return () => {
      console.log("jiesu")
    }
  }, [count])

  function add () {
    setcount(count + 1)
  }

  function reduce () {
    setcount(count - 1)
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
  )
}

export default Count
