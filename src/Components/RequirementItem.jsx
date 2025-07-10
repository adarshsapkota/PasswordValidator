function RequirementItem({ text, isValid }) {
  return (
    <li className="requirement-item">
      <span className={`requirement-icon ${isValid ? "valid" : "invalid"}`}>
        {isValid ? "✅" : "❌"}
      </span>
      <span className="requirement-text">{text}</span>
    </li>
  );
}

export default RequirementItem;
