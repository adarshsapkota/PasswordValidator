import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordValidator from "./Components/PasswordValidator";
import "./App.css";
import FetchPage from "./Components/fetch";
import Hooks from "./Components/hooks";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordValidator />} />
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/ProfileCard" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
