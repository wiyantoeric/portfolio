import { server } from "./webProfile";

function getCoverImageUrl(imageUrl) {
  return `${server.hostname}/${imageUrl}`;
}

async function getData() {
  const res = await fetch(`${server.hostname}/data/broonie/broonie.json`);
  const data = await res.json();
  return data;
}

// let broonieProducts = [
//   {
//     title: "Broonie’s Brownies",
//     items: [
//       {
//         id: "vanilla-milk",
//         coverImageUrl: "/data/broonie/images/vanilla-milk.png",
//         imageUrls: ["/data/broonie/images/vanilla-milk.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "Vanilla Milk",
//         title: "Vanilla Milk",
//         description: "Made out of Vanilla, obviously sugar, low calorie white milk, eggs, and crackers.",
//         caption: "An outstanding vanilla flavour, with a soft crumb on the bottom.",
//       },
//       {
//         id: "choco-burnt",
//         coverImageUrl: "/data/broonie/images/choco-burnt.png",
//         imageUrls: ["/data/broonie/images/choco-burnt.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "Choco Burnt",
//         title: "Choco Burnt",
//         description: "A special series for your loved ones. Include all brownies with toppings wrapped in a box.",
//         caption: "A special series for your loved ones. Include all brownies with toppings wrapped in a box.",
//       },
//       {
//         id: "broonie-brown",
//         coverImageUrl: "/data/broonie/images/broonie-brown.png",
//         imageUrls: ["/data/broonie/images/broonie-brown.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "Broonie Brown",
//         title: "Broonie Brown",
//         description: "Delicious and decadent Broonie Brownies made from scratch by the founder of Broonie.",
//         caption: "Delicious and decadent Broonie Brownies made from scratch by the founder of Broonie.",
//       },
//       {
//         id: "sugar-sponge",
//         coverImageUrl: "/data/broonie/images/sugar-sponge.png",
//         imageUrls: ["/data/broonie/images/sugar-sponge.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "Sugar Sponge",
//         title: "Sugar Sponge",
//         description: "OG brownies with a sprinkled sugar on top.",
//         caption: "OG brownies with a sprinkled sugar on top.",
//       },
//     ],
//   },
//   {
//     title: "Broonie Make Friends",
//     items: [
//       {
//         id: "choco-love-box",
//         coverImageUrl: "/data/broonie/images/choco-love-box.png",
//         imageUrls: ["/data/broonie/images/choco-love-box.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "Choco Love Box",
//         title: "Choco Love Box",
//         description: "Four giant Broonie Browns in a box that comes with a customized letter. Size is on 20x20 cm.",
//         caption: "Four giant Broonie Browns in a box that comes with a customized letter. Size is on 20x20 cm.",
//       },
//       {
//         id: "youre-important",
//         coverImageUrl: "/data/broonie/images/youre-important.png",
//         imageUrls: ["/data/broonie/images/youre-important.png", "/data/broonie/images/dummy-1.png", "/data/broonie/images/dummy-2.png"],
//         imageTitle: "You're Important",
//         title: "You're Important",
//         description: "A special series for your loved ones. Include all brownies with toppings wrapped in a box.",
//         caption: "A special series for your loved ones. Include all brownies with toppings wrapped in a box.",
//       },
//     ],
//   },
// ];

// let productNames = broonieProducts.map((productList) => {
//   const data = productList.map((product) => {
//     product.name;
//   });
//   return data;
// });

let floatingLink = [
  {
    imageUrl: "https://seeklogo.com/images/T/tokopedia-logo-5340B636F6-seeklogo.com.png",
    alt: "Tokopedia Store",
  },
  {
    imageUrl: "https://pngroyale.com/wp-content/uploads/2021/11/Download-shopee-bag-logo-free-transparent-icon-.png",
    alt: "Shopee Store",
  },
];

export { floatingLink, getCoverImageUrl, getData };
