import React from "react";

function Error({ message }) {
  return (
    <div className="error-container">
      <p>Error:{message}</p>
    </div>
  );
}

export default Error;
