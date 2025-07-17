import { useState } from "react";
import profile from "./../assets/Profile.png";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

function ProfileCard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handlename = (e) => {
    setName(e.target.value);
  };
  const handleage = (e) => {
    if (e.target.value <= 0) {
      alert("Age should not  lower than zero");
    } else {
      setAge(e.target.value);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlesubmit = () => {
    if (name && age && email) {
      setSubmit(true);
    }
  };
  const image = profile;

  if (submit) {
    return <DisplayCard name={name} age={age} email={email} image={image} />;
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
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Enter your email"
        className="email-input"
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

function DisplayCard({ name, age, image, email }) {
  return (
    <div className="card-container">
      <div className="card-details">
        <img src={image} alt="Profile Picture" className="image" />
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <Link to="/" className="Back">
          Password Validator
        </Link>
        <Link to="UserListViewer" className="Back">
          User List Viewer
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
