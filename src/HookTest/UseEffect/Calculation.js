import React, { useEffect, useState } from "react";

function CalculationComponent() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const calculateResult = () => {
      setResult(number1 + number2);
    };

    calculateResult();
  }, [number1, number2]);

  return (
    <div>
      <label>Chỉnh số</label>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <p>Result: {result}</p>
    </div>
  );
}

export default CalculationComponent;
