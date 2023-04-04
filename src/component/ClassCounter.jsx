import React from 'react';

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handeleInc = this.handeleInc.bind(this);
    this.handeleDec = this.handeleDec.bind(this);
  }
  handeleInc() {
    this.setState({ count: this.state.count + 1 });
  }

  handeleDec() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handeleInc}>inc</button>
        <button onClick={this.handeleDec}>dec</button>
      </div>
    );
  }
}
/// Пример Классового компонента !!!
