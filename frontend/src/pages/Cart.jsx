import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="app">

      <header className="header">

        <h1>LAPTOP SHOP</h1>

        <nav>
          <Link to="/">Trang chủ</Link>

          <Link to="/products">
            Sản phẩm
          </Link>

          <Link to="/cart">
            Giỏ hàng
          </Link>
        </nav>

      </header>

      <main>

        <section className="products-section">

          <h2>Giỏ hàng</h2>

          <p>Giỏ hàng đang trống.</p>

          <Link to="/products">
            Tiếp tục mua hàng
          </Link>

        </section>

      </main>

      <footer>
        <p>© 2026 Laptop Shop</p>
      </footer>

    </div>
  );
}

export default Cart;