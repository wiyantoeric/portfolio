import React, { Component } from "react";
import Card from "./card";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const sliderLeft = (id) => {
  var slider = document.getElementById(id);
  slider.scrollLeft -= 350;
};

const sliderRight = (id) => {
  var slider = document.getElementById(id);
  slider.scrollLeft += 350;
};

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // TODO: bikin button ngilang
    showLeft: true,
    showRight: true,
  };

  id = this.props.id;

  componentDidMount() {
    var el = document.getElementById(this.id);
    var curOverflow = el.style.overflow;

    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";

    var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

    el.style.overflow = curOverflow;

    if (!isOverflowing) {
      let leftButton = document.getElementById(`left-${this.id}`);
      leftButton.classList.add("hidden");
      let rightButton = document.getElementById(`right-${this.id}`);
      rightButton.classList.add("hidden");
    } 
  }

  render() {
    return (
      // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <div className="my-4 relative">
        <h1 className="text-2xl font-bold">{this.props.products.title}</h1>

        {/* Left Arrow */}
        <button onClick={() => sliderLeft(this.id)} id={`left-${this.id}`} type="button" className="flex absolute bottom-1/2 translate-y-1/2 w-fit -left-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none">
          <span class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-broonie-blue group-hover:bg-broonie-blue">
            <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>

        {/* Product List */}
        <div id={this.id} className="flex overflow-x-hidden overflow-y-visible space-x-8 scroll-smooth">
          {this.props.products.items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => sliderRight(this.id)}
          id={`right-${this.id}`}
          type="button"
          className="flex absolute bottom-1/2 translate-y-1/2 -right-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-broonie-blue group-hover:bg-broonie-blue">
            <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
      // </ScrollMenu>
    );
  }
}
