import React, { useState } from "react";

const Copy = ({ icon, text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <div>
      <button onClick={copyText}>{icon}</button>
      {copied && <span>Copied!</span>}
    </div>
  );
};

export default Copy;
