import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid';
import ProductFilters from './components/ProductFilters';
import ProductSearch from './components/ProductSearch';
import ProductSort from './components/ProductSort';
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [],
    category: [],
  });
  
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const [sortBy, setSortBy] = useState('featured');

  const handleSearchChange = (newQuery) => {
    setSearchQuery(newQuery);
    if (newQuery) {
      setSearchParams({ ...Object.fromEntries(searchParams), search: newQuery });
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch !== searchQuery) {
      setSearchQuery(urlSearch || '');
    }
  }, [searchParams]);

  return (
    <div className="products-container">
      <Container>
        <Row>
          {/* Filters Sidebar */}
          <Col lg={3}>
            <ProductFilters 
              filters={filters} 
              onFilterChange={setFilters} 
            />
          </Col>

          {/* Main Content */}
          <Col lg={9}>
            <div className="products-header">
              <ProductSearch 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <ProductSort 
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
            
            <ProductGrid 
              filters={filters}
              searchQuery={searchQuery}
              sortBy={sortBy}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;