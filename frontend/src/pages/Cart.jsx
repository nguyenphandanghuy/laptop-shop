import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.cartQuantity,
    0
  );


  // =========================
  // GIỎ HÀNG TRỐNG
  // =========================
  if (cart.length === 0) {

    return (
      <div className="app">

        <header className="header">

          <h1>LAPTOP SHOP</h1>

          <nav>
            <Link to="/">Trang chủ</Link>
            <Link to="/products">Sản phẩm</Link>
            <Link to="/cart">Giỏ hàng</Link>
          </nav>

        </header>


        <main>

          <section className="hero">

            <h2>
              Giỏ hàng đang trống.
            </h2>

            <Link
              to="/products"
              className="detail-button"
            >
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


  // =========================
  // CÓ SẢN PHẨM
  // =========================
  return (
    <div className="app">

      <header className="header">

        <h1>LAPTOP SHOP</h1>

        <nav>
          <Link to="/">Trang chủ</Link>
          <Link to="/products">Sản phẩm</Link>
          <Link to="/cart">Giỏ hàng</Link>
        </nav>

      </header>


      <main>

        <section className="products-section">

          <h2>Giỏ hàng</h2>


          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
                width="150"
              />


              <div>

                <h3>
                  {item.name}
                </h3>


                <p>
                  Giá:{" "}
                  {item.price.toLocaleString("vi-VN")}
                  {" "}VNĐ
                </p>


                <div>

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>


                  <span
                    style={{
                      margin: "0 15px",
                    }}
                  >
                    {item.cartQuantity}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>


                <br />


                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Xóa khỏi giỏ hàng
                </button>

              </div>

            </div>

          ))}


          <hr />


          <h2>
            Tổng tiền:{" "}
            {total.toLocaleString("vi-VN")}
            {" "}VNĐ
          </h2>

        </section>

      </main>


      <footer>
        <p>© 2026 Laptop Shop</p>
      </footer>

    </div>
  );
}


export default Cart;