import React, { useState } from "react";
const UserInfor = (props) => {
  const [name, setname] = useState("");
  // const [address, setadress] = useState("");
  const [age, setage] = useState("");
  const haneleOnChangeInput = (event) => {
    setname(event.target.value);
  };
  const haneleOnChangeAge = (event) => {
    setage(event.target.value);
  };
  const handSubmit = (event) => {
    event.preventDefault();
    props.handleNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handSubmit(event)}>
        <label>Your Name </label>
        <input
          value={name}
          type="text"
          onChange={(event) => haneleOnChangeInput(event)}
        />
        <label>Age </label>
        <input
          value={age}
          type="text"
          onChange={(event) => haneleOnChangeAge(event)}
        />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default UserInfor;
