import React, { Component } from "react";
import { getCoverImageUrl } from "../../models/broonie";

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  selectHandler = (index) => {
    const selected = index;
    this.setState({ selected });
  };

  product = this.props.product;

  state = {
    selected: 0,
  };

  render() {
    return (
      <div className="flex flex-col lg:flex-row h-fit w-fit mx-auto my-10 gap-y-4 lg:gap-y-8">
        <div className="mx-auto w-3/4 basis-1/3 flex flex-row order-2 my-6 lg:order-1 lg:flex-col lg:basis-1/5  lg:gap-y-4 lg:mx-5 lg:h-3/4 lg:my-auto">
          <img
            className={`w-1/5 lg:w-1/2 m-auto rounded-xl lg:rounded-3xl opacity-50 hover:opacity-100 transition-opacity ease-in ${this.state.selected === 0 && "opacity-100"}`}
            src={getCoverImageUrl(this.product.imageUrls[0])}
            onClick={() => this.selectHandler(0)}
          />
          <img
            className={`w-1/5 lg:w-1/2 m-auto rounded-xl lg:rounded-3xl opacity-50 hover:opacity-100 transition-opacity ease-in ${this.state.selected === 1 && "opacity-100"}`}
            src={getCoverImageUrl(this.product.imageUrls[1])}
            onClick={() => this.selectHandler(1)}
          />
          <img
            className={`w-1/5 lg:w-1/2 m-auto rounded-xl lg:rounded-3xl opacity-50 hover:opacity-100 transition-opacity ease-in ${this.state.selected === 2 && "opacity-100"}`}
            src={getCoverImageUrl(this.product.imageUrls[2])}
            onClick={() => this.selectHandler(2)}
          />
        </div>
        
        <div className="basis-2/5 m-auto order-1 lg:order-2">
          <div className="rounded-3xl m-auto w-3/4 aspect-square overflow-hidden">
            <img src={getCoverImageUrl(this.product.imageUrls[this.state.selected])} />
          </div>
        </div>

        <div className="flex flex-col basis-2/5 order-3 m-10">
          <div className="h-1/5">
            <h1 className="text-2xl my-2 font-bold">{this.product.title}</h1>
            <p className="font-medium">Description :</p>
            <p className="font-medium w-3/4">{this.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
