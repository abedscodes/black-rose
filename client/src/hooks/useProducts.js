import { useState, useEffect } from 'react';
import { products } from '../data/products';

export const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchProducts = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setProductData(products);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products: productData, isLoading, error };
}; 