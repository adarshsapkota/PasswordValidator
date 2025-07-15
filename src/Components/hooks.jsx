import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hooks.css";
function Hooks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network error");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div className="loading"> Loading . . . . </div>;
  if (error)
    return (
      <div className="error">
        Error :{error}
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );

  return (
    <div className="Fetch-Container">
      <h1>Hooks and fetching array</h1>
      {data.map((user) => (
        <div key={user.id} className="Data-Container">
          <p>
            {user.id}. Name: {user.name}
          </p>
          <p> email: {user.email}</p>
        </div>
      ))}
      <Link to="/" className="Back">
        Password Validator
      </Link>
      <Link to="/fetch" className="Fetch-Page">
        Fetch Page
      </Link>
    </div>
  );
}

export default Hooks;
