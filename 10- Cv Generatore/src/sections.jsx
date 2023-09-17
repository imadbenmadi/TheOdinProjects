import React from "react";
export function Section_1({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
}) {
  function handleKeyPress(e) {
    const allowedKeys = /[\d]|Backspace/;
    if (
      !(e.key === "F5" || (e.key === "r" && e.ctrlKey)) &&
      !allowedKeys.test(e.key)
    ) {
      e.preventDefault();
    }
  }


  return (
    <div className="section_1">
      <form>
        <input
          type="text"
          placeholder="Yor name"
          value={name}
          onChange={onNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={onPhoneChange}
          onKeyDown={handleKeyPress}
        />
      </form>
    </div>
  );
}
