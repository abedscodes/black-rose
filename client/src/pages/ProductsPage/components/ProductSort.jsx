import { Form } from 'react-bootstrap';

const ProductSort = ({ value, onChange }) => {
  return (
    <Form.Select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="product-sort"
    >
      <option value="featured">Featured</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="newest">Newest Arrivals</option>
    </Form.Select>
  );
};

export default ProductSort;
