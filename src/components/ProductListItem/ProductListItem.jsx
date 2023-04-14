import './ProductListItem.css';
import { Link } from 'react-router-dom';

export default function ProductListItem({ productItem, handleAddToOrder }) {
  return (
    <div className="ProductListItem">
      <Link to={`/items/${productItem._id}`} state={productItem}>
      <div className=""><img className='image' src={productItem.image} alt='' /></div>
      <div className="name">{productItem.name}</div>
      </Link>
      <div className="buy">
        <span>${productItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(productItem._id)}>
          +
        </button>
      </div>
    </div>
  );
}