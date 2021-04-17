import React from "react";
import "./index.css";

// state - internal variables
// props - external variables

let varr = 10; // variable not a state variable

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.count,
      num1: 0,
      num2: 0,
      sum: 0,
    };
  }

  render() {
    return (
      <div className="banner">
        Banner {varr}
        <button onClick={() => (varr += 1)}>AddMore</button>
        Banner Ext {this.state.counter}
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          AddMoreState
        </button>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1,
            })
          }
        >
          RemoveMoreState
        </button>
        <input
          onChange={(e) =>
            this.setState({
              num1: parseInt(e.target.value),
            })
          }
          placeholder="num1"
        />
        <input
          onChange={(e) =>
            this.setState({
              num2: parseInt(e.target.value),
            })
          }
          placeholder="num2"
        />
        <button
          onClick={() =>
            this.setState({
              sum: this.state.num1 + this.state.num2,
            })
          }
        >
          getRes
        </button>
        <div>{this.state.sum}</div>
      </div>
    );
  }
}

export default Banner;
