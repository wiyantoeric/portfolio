import React, { Component } from "react";
import Link from "next/link";
import styles from "../../../styles/Broonie.module.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const el = document.getElementById(this.props.page);
    let activeStyle = " decoration-2 border-b-[0.2em] border-black cursor-pointer";
    el.className = activeStyle;
  }

  render() {
    return (
      <div className="flex m-12 mx-auto gap-x-32 justify-center text-lg font-medium">
        <Link href="/template/broonie/about">
          <a className={styles.link} id="about">
            about
          </a>
        </Link>
        <Link href="/template/broonie/products">
          <a className={styles.link} id="products">
            products
          </a>
        </Link>
        <Link href="/template/broonie/contact">
          <a className={styles.link} id="contact">
            contact
          </a>
        </Link>
      </div>
    );
  }
}
