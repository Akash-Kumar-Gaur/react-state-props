import React from "react";
import "./index.css";

// state - internal variables
// props - external variables

let varr = 10; // variable not a state variable

//lifecycle methods
// componentWillMount -> before component renders -> api calls (Data calls)
// componentDidMount -> after component renders -> data to be user afterwards
// componentWillReceiveProps -> update the states with new props replacing the old one

// componentWillUnmount -> before component exits/unmounts
// componentDidUnmount -> after component exits/unmounts

// componentShouldUpdate -> should update or not
// componentDidUpdate -> component got updated

// class components
// - state
// - props

// functional components
// - props
// - state (only in latest react)

// - state, state as props, props as state
// - setState (update current state)

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter,
      num1: 0,
      num2: 0,
      sum: 0,
    };
  }

  componentWillMount() {
    console.log("before render");
  }

  componentDidMount() {
    console.log("after render");
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      counter: nextProps.counter,
    });
  }

  render() {
    return (
      <div className="banner">
        {/* <div
          style={{
            height: "300px",
            width: "400px",
            background: "#88888820",
            border: "5px solid #000",
          }}
        >
          border box
        </div> */}
        <div
          style={{
            margin: "15px",
          }}
        >
          {this.state.counter}
        </div>
        {/* {console.log("render")} */}
        {/* <div
          style={{
            height: "300px",
            width: "400px",
            background: "#88888820",
            outline: "5px solid #000",
          }}
        >
          no overlap
        </div> */}
      </div>
    );
  }
}

export default Banner;
