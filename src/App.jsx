import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PasswordValidator from "./Components/PasswordValidator";
import "./App.css";
import FetchPage from "./Components/fetch";
import Hooks from "./Components/hooks";
import ProfileCard from "./Components/ProfileCard";
import Favourites from "./Components/Favourites";
import Todo from "./Components/Todo";

function App() {
  return (
    <Router basename="/PasswordValidator">
      <div className="navigation">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/hooks" className="link">
          Hooks
        </Link>
        <Link to="/ProfileCard" className="link">
          Profile Card
        </Link>
        <Link to="/Todo" className="link">
          Todo
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<PasswordValidator />} />
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/ProfileCard" element={<ProfileCard />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
