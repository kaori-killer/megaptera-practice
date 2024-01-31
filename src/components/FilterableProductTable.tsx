import { useState } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import Product from '../types/Product';

import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
    products: Product[];
  }

export default function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  const [inStockOnly, setinStockOnly] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

  const filteredProducts = filterProducts(
    products,
    { filterText, inStockOnly },
  );

  return (
    <div className="filterable-product-table">
      <SearchBar
        inStockOnly={inStockOnly}
        setinStockOnly={setinStockOnly}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ProductTable
        products={filteredProducts}
      />
    </div>
  );
}
