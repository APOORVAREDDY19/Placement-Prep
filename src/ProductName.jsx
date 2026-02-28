function ProductName({ productName, price, onAddToCart }) {
  return (
    <div>
      <h2>{productName}</h2>
      <p>Price: ₹{price}</p>

      <button onClick={() => onAddToCart(productName)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductName;