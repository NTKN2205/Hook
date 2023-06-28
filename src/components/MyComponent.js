//class component
//function component

import React, { useState } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Ninh", age: "18" },
//       { id: 2, name: "Ninh2", age: "19" },
//       { id: 3, name: "Ninh3", age: "20" },
//     ],
//   };

//   handleNewUser = (userobj) => {
//     console.log(userobj);
//     this.setState({
//       listUsers: [userobj, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUsersclone = this.state.listUsers;
//     listUsersclone = listUsersclone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersclone,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <UserInfor handleNewUser={this.handleNewUser} />
//         <br></br>
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUsers, setlistUsers] = useState([
    { id: 1, name: "Ninh", age: "18" },
    { id: 2, name: "Ninh2", age: "19" },
    { id: 3, name: "Ninh3", age: "20" },
  ]);
  const handleNewUser = (userobj) => {
    setlistUsers([userobj, ...listUsers]);
  };
  const handleDeleteUser = (userId) => {
    let listUsersclone = listUsers;
    listUsersclone = listUsersclone.filter((item) => item.id !== userId);
    setlistUsers(listUsersclone);
  };
  return (
    <div>
      <UserInfor handleNewUser={handleNewUser} />
      <br></br>
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
