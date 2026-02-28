import ProductName from "./ProductName";

function App() {
  function handleAddToCart(productName) {
    console.log(`Added ${productName} to cart`);
  }

  return (
    <div>
      <ProductName
        productName="kurti "
        price={500}
        onAddToCart={handleAddToCart}
      />

      <ProductName
        productName="iphone"
        price={60000}
        onAddToCart={handleAddToCart}
      />

      <ProductName
        productName="Headphones"
        price={3000}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;