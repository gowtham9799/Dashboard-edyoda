// AddProduct.js
import React, { useState } from 'react';

const Add = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: '',
    description: '',
    expireDate: '',
    name: '',
    stock: '',
    unitSold: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onAddProduct(newProduct);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Expire Date"
          name="expireDate"
          value={newProduct.expireDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Stock"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Unit Sold"
          name="unitSold"
          value={newProduct.unitSold}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Add Product</button>
      </div>
    </div>
  );
};

export default Add;
