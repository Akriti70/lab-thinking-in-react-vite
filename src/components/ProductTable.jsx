// src/components/ProductTable.jsx
import ProductRow from "./ProductRow";

function ProductTable({ products, searchText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.inStock) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category}>
          <th colSpan="2">{product.category}</th>
        </tr>
      );
      lastCategory = product.category;
    }
    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
