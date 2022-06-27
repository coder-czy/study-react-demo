import "./App.css"
import List from "./components/List"
import Count from "./components/Count"
import Comment from "./components/Comment"

function App () {
  const list = ["Vue", "React", "Angular"]
  let sendMsg = (msg) => {
    console.log(msg)
  }
  return (
    <div className="App">
      <List list={list} sendMsg={sendMsg}></List>
      <Count></Count>
      <Comment></Comment>
    </div>
  )
}

export default App
