import { Container, ImageMain } from "./essentials";
import { server } from "../../models/webProfile";
import ProductList from "./productList";
import { floatingLink, getData } from "../../models/broonie";
import React, { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState();

  async function fetchData() {
    getData().then((data) => {
      setData(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data && (
      <Container pageTitle="Broonie - Products">
        <ImageMain imageUrl={`${server.hostname}/data/broonie/images/broonie-hero.png`} imageAlt="Broonie Cookie" page="products" floatingLink={floatingLink}>
          {/* product section */}
          <div className="ml-10 sm:ml-14 lg:ml-14">
            {data.map((products, index) => (
              <ProductList key={products.title} products={products} id={`list-${index}`} />
            ))}
          </div>
        </ImageMain>
      </Container>
    )
  );
}
