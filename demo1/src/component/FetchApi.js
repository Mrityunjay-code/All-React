// import React, { useEffect, useState } from 'react';

// function FetchApi() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('Error fetching product API:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h1>{product.name}</h1>
//           <img>{product.images}</img>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FetchApi;
