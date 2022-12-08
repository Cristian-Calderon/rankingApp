import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ComparationCard from "./ComparationCard";
import styled from 'styled-components';
const Stylecards = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`;



const ProductComparison = ({ products }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (posts) => posts.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  return (
   
    <div>
     <h1>Company Comparator</h1>
      {selectedItems.length > 0 && (
        <Table striped bordered hover >
          <thead >
            
            <tr>
              <th></th>
              {selectedItems.map((empresas) => (
                <th  scope="cool" key={empresas.id}>{empresas.nombre}</th>
              ))}
            </tr>
          
          </thead>
          <tbody>
            <tr>
              <td>
                <label >
                  Ranking
                </label>
              </td>
              {selectedItems.map((empresas) => (
                <th key={empresas.id}>{empresas.ranking}</th>
              ))}
            </tr>
            <tr>
              <td>
                <label>
                  Description
                </label>
              </td>
              {selectedItems.map((empresas) => (
                <td key={empresas.id}>{empresas.comentario}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      )}
      
      <div columns={selectedItems.length} stackable padded divided>
       <Stylecards>
          {products.map((product) => (
            <ComparationCard
              key={product.id}
              product={product}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
      </Stylecards>
      </div>
      
    </div>

  );
};

export default ProductComparison;
