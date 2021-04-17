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
      </div>
    );
  }
}

export default Banner;
