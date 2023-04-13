import './ProductListItem.css';

export default function ProductListItem({ productItem, handleAddToOrder }) {
  return (
    <div className="ProductListItem">
      <div className=""><img className='image' src={productItem.image} alt='' /></div>
      <div className="name">{productItem.name}</div>
      <div className="buy">
        <span>${productItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(productItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}