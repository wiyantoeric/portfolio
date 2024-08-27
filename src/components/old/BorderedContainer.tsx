import { Component, ReactNode } from "react";

interface BorderedContainerProps {
  children: ReactNode;
}

class BorderedContainer extends Component<BorderedContainerProps> {
  render() {
    return (
      <div className="flex aspect-[7/8] w-96 flex-col border-2 border-black p-8">
        {this.props.children}
      </div>
    );
  }
}

export default BorderedContainer;
