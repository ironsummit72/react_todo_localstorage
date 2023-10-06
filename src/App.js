import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Todoinput from "./Components/TodoInput/Todoinput";

function App() {
  return (
    <>
      <Navbar />
      <div class="app_container">
        <Todoinput />
      </div>
    </>
  );
}

export default App;
