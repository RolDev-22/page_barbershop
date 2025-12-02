import React, { useState, useEffect } from "react";

const BtnMode = () => {
  const [activeCheck, setActiveCheck] = useState(false);

  useEffect(() => {
    activeCheck
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [activeCheck]);

  return (
    <>
      <input
        className="checkPb"
        type="checkbox"
        checked={activeCheck}
        onChange={(e) => setActiveCheck(e.target.checked)}
      />
    </>
  );
};

export default BtnMode;
