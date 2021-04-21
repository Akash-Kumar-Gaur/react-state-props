import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import HomePage from "./components/Homepage";
import Tasklist from "./components/Tasklist";

let NUMBER = 0;

// spread operator

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "QWERTY APP",
      taskName: "",
      list: [],
    };
  }

  addOne = () => {
    const { taskName } = this.state;
    let tempList = this.state.list; // tempList == initial list [{ id: QWERTY, label: qwerty}]
    let tempTask = {
      id: taskName.toUpperCase(), //ASDFGHJ
      label: taskName, //asdfghhj
    };
    tempList.push(tempTask); //[{ id: QWERTY, label: qwerty}, {id: ASDFGHJ, label: 'asdfghj}]
    this.setState({
      list: tempList,
      taskName: "",
    });
  };

  render() {
    return (
      <div className="App">
        {/* <HomePage headerName={this.state.name} />
        <button onClick={this.addOne}>{this.state.count} + 1</button>
        <Banner counter={this.state.count} /> */}
        <input
          placeholder="task name"
          onChange={(e) =>
            this.setState({
              taskName: e.target.value,
            })
          }
          value={this.state.taskName}
        />
        <button onClick={this.addOne}>Add task</button>

        <Tasklist taskList={this.state.list} />
      </div>
    );
  }
}
export default App;

// state - internal variables
// props - external variables
// function App(props) { // fun
//   return (
//     <div className="App">
//       <HomePage name={props.name}/>
//       <Banner />
//     </div>
//   );
// }
