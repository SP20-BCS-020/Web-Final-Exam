import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function App() {

  const products = [
    { Product_ID: 1, name: 'Lipstick', colour: 'Red', price: '200' },
    { Product_ID: 2, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 3, name: 'Liner', colour: 'Black', price: '300' },
    { Product_ID: 4, name: 'Foundation', colour: 'Skin001', price: '600' },
    { Product_ID: 5, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 6, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 7, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 8, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 9, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 10, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 11, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 12, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 13, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 14, name: 'Face Powder', colour: '001', price: '1250' },
    { Product_ID: 15, name: 'Face Powder', colour: '001', price: '1250' },
   
  ];

  const columns = [
    { dataField: 'Product_ID', text: 'Product_ID',  },
    { dataField: 'name', text: 'Name', },
    { dataField: 'colour', text: 'Colour/Shade', },
    { dataField: 'price', text: 'Price',  }
  ];


  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    
   
  });

  return (
    <div>
      <h1><b>My Products</b></h1>

      <BootstrapTable bootstrap4 keyField='Product_ID' data={products} columns={columns}  pagination={pagination} />
    </div>
  );
}

export default App;