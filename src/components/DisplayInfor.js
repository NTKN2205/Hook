import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUse] = useState(true);
  const handShowhide = () => {
    setShowHideListUse(!isShowHideListUser);
  };
  // console.log(this.props);
  // console.log(listUsers);
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("Đã Xóa Hết User");
    }
  }, [listUsers]);
  return (
    <div>
      <div>
        <span onClick={() => handShowhide()}>
          {" "}
          {isShowHideListUser === true ? "Danh sách : " : "Hiện danh sách :"}
        </span>
      </div>
      {isShowHideListUser && (
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
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};
export default DisplayInfor;
