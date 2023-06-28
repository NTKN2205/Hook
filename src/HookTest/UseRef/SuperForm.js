import { useRef, useState } from "react";

const SuperForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isValidName, setIsValiName] = useState(true);
  const [isValidEmail, setIsValiEmail] = useState(true);

  const nameref = useRef();

  const handleClick = () => {
    setIsValiName(true);
    setIsValiName(true);

    if (!name) {
      setIsValiName(false);
      nameref.current.focus();
      console.log(nameref, nameref.current);
      return;
    }

    if (!email) {
      setIsValiEmail(false);
      return;
    }
    alert("!!!");
  };
  return (
    <div>
      <span>Your Name:</span>
      <input
        ref={nameref}
        value={name}
        className={isValidName === true ? "" : "invalid"}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <span>Your email:</span>
      <input
        value={email}
        className={isValidEmail === true ? "" : "invalid"}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <button onClick={() => handleClick()}>Submit</button>
      </div>
    </div>
  );
};

export default SuperForm;
