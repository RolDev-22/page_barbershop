import React, { useState, useEffect } from "react";

const CheckPb = () => {
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

export default CheckPb;
