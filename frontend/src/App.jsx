import { useState } from "react";
import "./App.css";
import "./array.css";

function App() {
  const members = ["Member 1", "Member 2", "Member 3"];
  const [val, setVal] = useState(0);
  return (
    <>
      {members.map((member, index) => (
        <div key={index} className="member">
          <div className="heading">{member}:</div>
          <div className="member-input">
            <label className="member-label">Name:</label>
            <input type="text" className="member-input-field" />
          </div>
          <div className="member-input">
            <label className="member-label">Phone Number:</label>
            <input type="text" className="member-input-field" />
          </div>
        </div>
      ))}
      <button onClick={setVal} label="Submit">
        <div className="submit-button">
          <img src="vite.svg" />
          Submit{" "}
        </div>
      </button>
    </>
  );
}

export default App;
