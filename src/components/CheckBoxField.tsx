import { useRef } from 'react';

type CheckBoxFieldProps = {
    label: string;
    inStockOnly: boolean;
    setinStockOnly: (value: boolean) => void;
  }

export default function CheckBoxField({
  label,
  inStockOnly,
  setinStockOnly,
}: CheckBoxFieldProps) {
  const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());

  const handleChange = () => {
    setinStockOnly(!inStockOnly);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id.current}
        checked={inStockOnly}
        onChange={handleChange}
      />
      <label htmlFor="only-stock">
        {label}
      </label>
    </div>
  );
}
