import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import HomePage from "./components/Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: this.props.name,
    };
  }

  render() {
    return (
      <div className="App">
        <HomePage headerName={this.state.name} />
        <Banner count={this.state.count} />
      </div>
    );
  }
}
export default App;

// state - internal variables
// props - external variables
// function App() { // fun
//   return (
//     <div className="App">
//       <HomePage />
//       <Banner />
//     </div>
//   );
// }
