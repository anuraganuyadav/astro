import product1 from "/img/products/blue.webp";
import product2 from "/img/products/bracelet.jfif";
import product3 from "/img/products/crystal.jfif";
import product4 from "/img/products/coach.jfif";



export const products = [
  {
    category_name: "Gemstones",
    title: "Blue Sapphire 5 Carat",
    image: product1,
    date: "28th January",
    views: "5 Views",
    popular_products: "Active",
  },
  // {
  //   category_name: "Bracelets",
  //   title: "Amethyst Gemstone, Katela Stone, Oval Bracelets",
  //   image: product2,
  //   date: "28th January",
  //   views: "5 Views",
  //   popular_products: "Active",
  // },
  // {
  //   category_name: "Crystal",
  //   title: "Amethyst Gemstone, Katela Stone, Oval Crystal",
  //   image: product3,
  //   date: "28th January",
  //   views: "5 Views",
  //   popular_products: "Active",
  // },
  // {
  //   category_name: "Conch",
  //   title: "Amethyst Gemstone, Katela Stone, Oval Conch",
  //   // image: "../img/products/coach.jfif",
  //   image: product4,
  //   date: "28th January",
  //   views: "5 Views",
  //   popular_products: "Active",
  // },
];

// Pagination logic function
export const getPaginatedProducts = (
  currentPage,
  productsPerPage,
  filteredProducts
) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  return filteredProducts.slice(indexOfFirstPost, indexOfLastProduct);
};

export const calculateTotalPages = (filteredProducts, productsPerPage) => {
  return Math.ceil(filteredProducts.length / productsPerPage);
};
