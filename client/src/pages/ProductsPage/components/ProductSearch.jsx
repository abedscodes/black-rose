import { Form, InputGroup } from 'react-bootstrap';

const ProductSearch = ({ value, onChange }) => {
  return (
    <Form className="product-search">
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search products..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <InputGroup.Text>
          <span className="material-icons">search</span>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default ProductSearch;
