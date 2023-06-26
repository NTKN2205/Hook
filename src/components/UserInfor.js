import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Ninh",
    address: "PY",
    age: 21,
  };
  haneleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  haneleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handSubmit(event)}>
          <label>Your Name </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.haneleOnChangeInput(event)}
          />
          <label>Age </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.haneleOnChangeAge(event)}
          />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
