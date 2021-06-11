import React, { useEffect, useState } from 'react'; 

const products = [
  { "id":1, "name": "Chinedu's Rugs", "description": "Fine rug", "section_id": 1 },
  { "id":2, "name": "Chioma's Jugs", "description": "Best ceramic jugs on Bazaar", "section_id": 2  },
  { "id":3, "name": "Chineye's plates", "description": "Ceramic plates ", "section_id": 2  }
]



function Products() {
  return (
    <div>
      {products.map((product) => {
        return( <div className="eachProduct"> 
          <span className="eachProductName"> {product.name} </span> <br />
          <span className="eachProductDescription"> {product.description} </span>
        </div>)
      })}
    </div>
  )
}

export default Products
