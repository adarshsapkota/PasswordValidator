import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./fetch.css";

function FetchPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.slice(0, 2));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error)
    return (
      <div className="error">
        Error: {error}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  return (
    <div className="fetch-page">
      <h1>Fetch Page</h1>
      {data.map((post) => (
        <div key={post.id} className="data-container">
          <p>Title: {post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}

      <Link to="/" className="back-button">
        Back to Password Validator
      </Link>
      <Link to="/hooks" className="hooks-button">
        Go to Hooks Page
      </Link>
    </div>
  );
}

export default FetchPage;
