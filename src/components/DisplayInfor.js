import React, { useState } from "react";
import "./DisplayInfor.scss";
// class DisplayInfor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowListUser: true,
//     };
//   }
//   handShowhide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };
//   render() {
//     // console.log(this.props);
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     return (
//       <div>
//         <div>
//           <span
//             onClick={() => {
//               this.handShowhide();
//             }}
//           >
//             {this.state.isShowListUser === true
//               ? "Danh sách : "
//               : "Hiện danh sách :"}
//           </span>
//         </div>
//         {this.state.isShowListUser && (
//           <div>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name ' {user.name}s</div>
//                     <div>My Age {user.age}</div>
//                     <hr />
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUse] = useState(true);
  const handShowhide = () => {
    setShowHideListUse(!isShowHideListUser);
  };
  // console.log(this.props);
  // console.log(listUsers);
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
