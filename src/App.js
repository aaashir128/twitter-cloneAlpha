import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./config/Login";
import { useStateValue } from "./config/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />

          <Feed />

          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
