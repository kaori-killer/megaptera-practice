import Product from '../types/Product';

export default function selectCategories(
  products: Product[],
) {
  return products.reduce((acc: string[], product: Product) => (
    acc.includes(product.category)
      ? acc : [product.category, ...acc]), []);
}
