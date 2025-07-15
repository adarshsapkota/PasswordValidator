import { useState } from "react";
import profile from "./../assets/Profile.png";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

function ProfileCard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [submit, setSubmit] = useState(false);

  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleage = (e) => {
    setAge(e.target.value);
  };
  const handlesubmit = () => {
    if (name && age) {
      setSubmit(true);
    }
  };
  const image = profile;

  if (submit) {
    return <DisplayCard name={name} age={age} image={image} />;
  }

  return (
    <div className="Input-Container">
      <h1>Enter your details</h1>
      <input
        type="text"
        value={name}
        onChange={handlename}
        placeholder="Enter your name"
        className="name-input"
      />
      <input
        type="number"
        value={age}
        onChange={handleage}
        placeholder="Enter your age"
        className="age-input"
      />
      <button
        className="button"
        onClick={() => {
          handlesubmit();
        }}
      >
        Enter
      </button>
    </div>
  );
}

function DisplayCard({ name, age, image }) {
  return (
    <div className="card-container">
      <div className="card-details">
        <img src={image} alt="Profile Picture" className="image" />
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <Link to="/" className="Back">
          Password Validator
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
