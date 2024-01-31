import ProductsInCategory from './ProductsInCategory';

import Product from '../types/Product';

import selectCategories from '../utils/selectCategory';

type ProductCategoryProps = {
    products: Product[];
  }

export default function ProductTable({
  products,

}: ProductCategoryProps) {
  const categories = selectCategories(products);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {categories.map((category) => (
          <ProductsInCategory
            key={category}
            category={category}
            products={products}
          />
        ))}
      </thead>
      <tbody />
    </table>
  );
}
