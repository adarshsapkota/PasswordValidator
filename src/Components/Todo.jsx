import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editIndex !== null) {
      setItems(
        items.map((item, i) =>
          i === editIndex ? { ...item, text: inputValue } : item
        )
      );
      setEditIndex(null);
    } else {
      setItems([...items, { text: inputValue, status: "Active" }]);
    }
    setInputValue("");
  };

  const toggleStatus = (index) => {
    setItems(
      items.map((item, i) =>
        i === index
          ? {
              ...item,
              status: item.status === "Active" ? "Completed" : "Active",
            }
          : item
      )
    );
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue("");
    }
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index].text);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setInputValue("");
  };

  return (
    <div
      className="container bg-slate-700 rounded-lg shadow-md p-6 max-w-3xl mx-auto"
      style={{ marginTop: "60px" }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">To Do App</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="d-flex gap-2 mb-8">
          <input
            type="text"
            className="form-control flex-grow-1 py-2 px-4 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Enter To Do Item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className={`btn ${
              editIndex !== null ? "btn-warning" : "btn-primary"
            } px-4 py-2 rounded-md`}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="btn btn-secondary px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="d-flex flex-column gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`d-flex justify-content-between align-items-center p-4 rounded-lg border ${
              editIndex === index
                ? "bg-slate-700 border-warning"
                : "border-gray-200"
            } ${item.status === "Completed" ? "bg-slate-700" : ""}`}
          >
            <span
              className={`flex-grow-1 fs-5 ${
                item.status === "Completed"
                  ? "text-decoration-line-through text-gray-500"
                  : ""
              }`}
            >
              {item.text}
            </span>
            <div className="d-flex gap-2">
              <button
                onClick={() => toggleStatus(index)}
                className={`btn btn-sm ${
                  item.status === "Active" ? "btn-success" : "btn-secondary"
                } rounded-md px-3 py-1`}
              >
                {item.status}
              </button>
              <button
                onClick={() => editItem(index)}
                className="btn btn-sm btn-warning rounded-md px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="btn btn-sm btn-danger rounded-md px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
