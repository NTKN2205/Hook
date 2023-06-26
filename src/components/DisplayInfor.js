import React from "react";
import "./DisplayInfor.scss";
class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handShowhide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handShowhide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Danh sách : "
              : "Hiện danh sách :"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name ' {user.name}s</div>
                    <div>My Age {user.age}</div>
                    <hr />
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
