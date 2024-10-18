import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem';


const ProductsPage = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const fackApi = "https://fakestoreapi.com/products";
  
  const fetchData = async () => {
    try {
        
      const res = await fetch(fackApi);
      const data = await res.json()
      setProducts(data)
    
    } catch (error) {
      console.warn(error)
    }
    }
  useEffect(() => {
    fetchData();
  }, []);

      
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-serif font-semibold">Products</h1>
      <div className='flex flex-wrap justify-evenly gap-8 items-center'>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              addToCart={()=>addToCart(product)}
            />
          );
        })}
      </div>
    </div>
  );
}

ProductsPage.propTypes = {
  addToCart:PropTypes.func.isRequired
}

export default ProductsPage