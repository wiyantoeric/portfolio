import { Component } from "react";

class BorderedContainer extends Component {
  render() {
    return (
      <div className="flex aspect-[7/8] w-96 flex-col border-2 border-black p-8">
        {this.props.children}
      </div>
    );
  }
}

export default BorderedContainer;
