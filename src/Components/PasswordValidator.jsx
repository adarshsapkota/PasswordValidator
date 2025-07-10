import { useState } from "react";
import RequirementItem from "./RequirementItem";
import "./PasswordValidator.css";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  const requirements = [
    {
      id: 1,
      text: "At least 8 characters",
      isValid: password.length >= 8,
    },
    {
      id: 2,
      text: "Contains a number",
      isValid: /\d/.test(password),
    },
    {
      id: 3,
      text: "Contains uppercase letter",
      isValid: /[A-Z]/.test(password),
    },
    {
      id: 4,
      text: "Contains lowercase letter",
      isValid: /[a-z]/.test(password),
    },
    {
      id: 5,
      text: "Contains special character",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  const strength = requirements.filter((req) => req.isValid).length;
  const strengthPercent = Math.round((strength / requirements.length) * 100);
  const strengthClass =
    strengthPercent < 50 ? "weak" : strengthPercent < 80 ? "medium" : "strong";

  return (
    <div className="validator">
      <h2>Password Strength Checker</h2>
      <div className="input-container">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-input"
        />
      </div>

      <ul className="requirements-list">
        {requirements.map((req) => (
          <RequirementItem key={req.id} text={req.text} isValid={req.isValid} />
        ))}
      </ul>

      <div className="strength-meter">
        <div className="strength-bar-container">
          <div
            className={`strength-bar ${strengthClass}`}
            style={{ width: `${strengthPercent}%` }}
          ></div>
        </div>
        <div className="strength-text">
          Strength:{" "}
          <span className={`${strengthClass}-text`}>
            {strengthPercent < 50
              ? "Weak"
              : strengthPercent < 80
              ? "Medium"
              : "Strong"}
          </span>{" "}
          ({strengthPercent}%)
        </div>
      </div>
    </div>
  );
}

export default PasswordValidator;
