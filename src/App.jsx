import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PasswordValidator from "./Components/PasswordValidator";
import "./App.css";
import FetchPage from "./Components/fetch";
import Hooks from "./Components/hooks";
import ProfileCard from "./Components/ProfileCard";
import Favourites from "./Components/Favourites";
import UserListViewer from "./Components/UserListViewer";

function App() {
  return (
    <Router basename="/PasswordValidator">
      <div className="navigation">
        <Link to="UserListViewer" className="Back">
          User List Viewer
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<PasswordValidator />} />
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/ProfileCard" element={<ProfileCard />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/UserListViewer" element={<UserListViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
