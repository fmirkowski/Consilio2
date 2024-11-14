// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="p-3 border rounded-lg shadow-sm">
    <img src={product.image} alt={product.name} className="h-16 w-16" />
    <h4 className="text-sm font-bold">{product.name}</h4>
    <p className="text-xs text-gray-600">${product.price}</p>
    <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">View Details</button>
  </div>
);

export default ProductCard;
