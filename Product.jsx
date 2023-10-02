import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // Array to track selected rows
  const [newProduct, setNewProduct] = useState({
    category: '',
    description: '',
    expireDate: '',
    name: '',
    stock: '',
    unitSold: '',
  });

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json') // Replace with your API endpoint
      .then((response) => {
        const responseData = response.data;
        // Assuming the products are stored in the "products" property
        if (responseData.productsPage) {
          setProducts(responseData.productsPage.products);
        }
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  const toggleProductSelection = (index) => {
    // Toggle the selection of the product at the given index
    const selectedIndex = selectedProducts.indexOf(index);
    if (selectedIndex === -1) {
      // If not selected, add to the selectedProducts array
      setSelectedProducts([...selectedProducts, index]);
    } else {
      // If already selected, remove from the selectedProducts array
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(selectedIndex, 1);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const deleteSelectedProducts = () => {
    // Filter out the selected products from the products array
    const updatedProducts = products.filter((product, index) => !selectedProducts.includes(index));
    setProducts(updatedProducts);
    setSelectedProducts([]); // Clear selected products
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addProduct = () => {
    // Ensure that required fields are filled before adding
    if (newProduct.category && newProduct.name && newProduct.expireDate && newProduct.stock && newProduct.unitSold) {
      setProducts([...products, newProduct]);
      setNewProduct({
        category: '',
        description: '',
        expireDate: '',
        name: '',
        stock: '',
        unitSold: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div >
      <Header/>
      <div style={{width:'100%%',backgroundColor:'#4e657a',marginLeft:'0rem'}}>
       
        <div style={{backgroundColor:'#435c70' ,width:'90%',marginLeft:'5rem'}}>
        
        <table style={{backgroundColor:'#4e657a',width:'89%',marginLeft:'4rem'}}>
          <thead>
            <tr>
              <th>Select</th>
              <th>Category</th>
              <th>Description</th>
              <th>Expire Date</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Unit Sold</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                onClick={() => toggleProductSelection(index)}
                className={selectedProducts.includes(index) ? 'selected' : ''}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(index)}
                    readOnly
                  />
                </td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.expireDate}</td>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.unitSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3 style={{paddingLeft:'4rem',paddingTop:'3rem'}}>Add a New Product</h3>
          <div style={{marginLeft:'4rem'}}>
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
            <button className='but2' onClick={addProduct}>Add</button>
          </div>
          <div >
          <button className='but1' onClick={deleteSelectedProducts}>Delete Selected</button>
        </div>
        </div>
        </div>
        <div style={{marginTop:'2rem'}}>
      <Footer/>
      </div>
      </div>
      
    </div>
  );
};

export default ProductTable;
