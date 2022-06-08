import "./App.css";
import List from "./components/List";
import Count from "./components/Count";

function App() {
  const list = ["Vue", "React", "Angular"];
  return (
    <div className="App">
      <List data={list}></List>
      <Count></Count>
    </div>
  );
}

export default App;
