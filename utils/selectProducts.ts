function selectProducts(
  products: Product[],
  category: string,
) {
  return products.filter((product) => (
    product.category === category
  ));
}

export default selectProducts;
