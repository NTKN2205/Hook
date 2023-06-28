// import logo from "./logo.svg";
import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
// import MyComponent from "./components/MyComponent";
// import Example from "./HookTest/UseState/Example";
// import TodoList from "./HookTest/UseState/TodoList";
// import TextDisplay from "./HookTest/UseState/TestDisplay";
// import Examples from "./HookTest/UseEffect/ExampleA";
// import CalculationComponent from "./HookTest/UseEffect/Calculation";
import React from "react";
// import MyApp from "./HookTest/UseContext/userif";
// import Greeting from "./HookTest/UseContext/userif";
// import Counter from "./HookTest/UseReducer/Couter";
// import SuperForm from "./HookTest/UseRef/SuperForm";
import FormProvider from "./HookTest/UseContext/HighForm";
import SimpleForm from "./HookTest/UseContext/SimpleForm";
class App extends React.Component {
  render() {
    return (
      <div>
        Hello mọi người tôi là Ninh
        {/* <MyComponent></MyComponent> */}
        {/* <Example></Example> */}
        {/* <TodoList></TodoList> */}
        {/* <TextDisplay></TextDisplay> */}
        {/* <Examples></Examples> */}
        {/* <CalculationComponent></CalculationComponent> */}
        {/* <Counter></Counter> */}
        {/* <SuperForm></SuperForm> */}
        <FormProvider>
          <SimpleForm />
        </FormProvider>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>NTKN</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
