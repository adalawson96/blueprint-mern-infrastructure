import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ productItems, handleAddToOrder }) {
  const items = productItems.map(item =>
    <ProductListItem
      key={item._id}
      productItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ProductList">
      {items}
    </main>
  );
}