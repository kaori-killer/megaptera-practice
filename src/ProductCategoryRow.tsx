type CategoryRowProps = {
    category: string;
}

export default function ProductCategoryRow({ category }: CategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}
