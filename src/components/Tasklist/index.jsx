import React from "react";

class Tasklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.taskList,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.taskList,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map((item, key) => {
            return (
              <li key={item.id}>
                <span>{item.label + key}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tasklist;
