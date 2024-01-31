import Product from '../types/Product';

type ProductRowProps = {
  product: Product
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <tr>
      <td>
        <span style={{ color: product.stocked ? 'black' : 'red' }}>
          {product.name}
        </span>
      </td>
      <td>{product.price}</td>
    </tr>
  );
}
