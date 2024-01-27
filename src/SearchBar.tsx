import TextField from './TextField';
import CheckBoxField from './CheckBoxField';

type SearchBarProps = {
  inStockOnly: boolean;
  setinStockOnly: (value: boolean) => void;
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function SearchBar({
  inStockOnly,
  setinStockOnly,
  filterText,
  setFilterText,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <TextField
        placeholder="Search..."
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CheckBoxField
        label="Only show products in stock"
        inStockOnly={inStockOnly}
        setinStockOnly={setinStockOnly}
      />
    </div>
  );
}
