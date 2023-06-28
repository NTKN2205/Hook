import React, { useEffect, useState } from "react";

function Examples() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]); // Chỉ chạy useEffect khi biến value thay đổi

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Examples;
