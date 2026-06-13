import Header from "./components/Header";
import index from "./style/index.css";
import TaskInput from "./components/TaskInput"

function App() {
  return (
    <div className="container">

      <Header />
      <TaskInput />
    </div>
  );
}

export default App;
