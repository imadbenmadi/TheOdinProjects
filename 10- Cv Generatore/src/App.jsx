import { Section_1 } from "./sections.jsx";
import Cv from "./Cv.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="main">
      <div className="Sections">
        <h1>CV Maker</h1>
        <Section_1
          name={name}
          email={email}
          phone={phone}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneChange}
        />
      </div>
      <div className="CV_container">
        <h2 style={{ textDecoration: "underline" }}>My cv</h2>
        <Cv name={name} email={email} phone={phone} />
      </div>
    </div>
  );
}
