import React from "react";
export default function Cv({ name, email, phone }) {
  return (
    <>
      <div className="name">Name : {name}</div>
      <div className="email">Email : {email}</div>
      <div className="phone">Phone : {phone}</div>
    </>
  );
}
