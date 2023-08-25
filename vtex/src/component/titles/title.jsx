import React from "react";
import "./title.css";
export default function titles({ title }) {
  return (
    <>
      <div className="title">
        <hr className="linha-horizonta" />
        <p>{title}</p>
        <hr className="linha-horizonta" />
      </div>
    </>
  );
}
