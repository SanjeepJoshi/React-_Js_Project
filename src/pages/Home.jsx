import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Safeguard against undefined or null items
  const { items = [] } = useSelector((store) => store.itemStore);
  const dispatch = useDispatch();

  useEffect(() => {
    // Only fetch products if the items array is empty
    if (items.length === 0) {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((result) =>
          dispatch({
            type: 'LOAD_PRODUCTS',
            payload: result.products,
          })
        )
        .catch((error) => console.error('Error fetching products:', error));
    }
  }, [items.length, dispatch]);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4  mt-4 my-4 row-cols-md-3 g-4">
        {items.length > 0 ? (
          items.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
