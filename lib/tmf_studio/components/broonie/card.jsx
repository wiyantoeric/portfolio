import React, { Component } from "react";
import AsyncImage from "../../components/general/asyncImage";
import Link from "next/link";
import { getCoverImageUrl } from "../../models/broonie";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const getUrl = (id) => `/template/broonie/products/${id}`;

export default class Card extends Component {
  render() {
    return (
      <Link href={getUrl(this.props.item.id)}>
        <div className="cursor-pointer mt-5 p-4 rounded-md hover:bg-[#cadef3] hover:shadow-md transition-transform hover:-translate-y-3">
          <div className="rows-3 w-40 ">
            <div className="object-cover w-full aspect-square rounded-3xl overflow-hidden">
              <AsyncImage imageUrl={getCoverImageUrl(this.props.item.coverImageUrl)} alt={this.props.item.imageTitle} />
            </div>
            <h1 className="text-xl font-bold mt-4 mb-1">{this.props.item.title}</h1>
            <p className="leading-5 font-medium text-xs">{this.props.item.caption}</p>
          </div>
        </div>
      </Link>
    );
  }
}
