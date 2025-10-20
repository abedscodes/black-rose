import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../../components/ProductCard';
import { useProducts } from '../../../hooks/useProducts';

const ProductGrid = ({ filters, searchQuery, sortBy }) => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Filter products based on search query and filters
  const filteredProducts = products.filter(product => {
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    // Price range filter
    if (filters.priceRange.length > 0) {
      const matchesPrice = filters.priceRange.some(range => {
        const [min, max] = range.split('-').map(Number);
        if (range.includes('+')) {
          return product.price >= min;
        }
        return product.price >= min && product.price <= max;
      });
      if (!matchesPrice) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return b.categories.newArrival ? 1 : -1;
      default: // 'featured'
        return 0;
    }
  });

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {sortedProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {sortedProducts.length === 0 && (
        <div className="text-center py-5">
          <h4>No products found</h4>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
