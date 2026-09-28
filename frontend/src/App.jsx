import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";

import "./App.css";


function Home() {
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

        <section className="hero">

          <h2>
            Khám phá laptop phù hợp với bạn
          </h2>

          <p>
            Laptop chính hãng dành cho học tập,
            văn phòng và gaming.
          </p>

          <Link
            to="/products"
            className="detail-button"
          >
            Xem sản phẩm
          </Link>

        </section>

      </main>


      <footer>
        <p>© 2026 Laptop Shop</p>
      </footer>

    </div>
  );
}


function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/products")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Cannot fetch products");
        }

        return response.json();

      })

      .then((data) => {

        setProducts(data);
        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError(
          "Không thể lấy danh sách sản phẩm"
        );

        setLoading(false);

      });

  }, []);


  if (loading) {
    return <h2>Đang tải sản phẩm...</h2>;
  }


  if (error) {
    return <h2>{error}</h2>;
  }


  return (
    <div className="app">

      <header className="header">

        <h1>LAPTOP SHOP</h1>

        <nav>

          <Link to="/">
            Trang chủ
          </Link>

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

          <h2>Danh sách sản phẩm</h2>


          <div className="product-grid">

            {products.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />


                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>


                  <p>
                    <strong>Hãng:</strong>{" "}
                    {product.brand}
                  </p>


                  <p>
                    <strong>CPU:</strong>{" "}
                    {product.cpu}
                  </p>


                  <p>
                    <strong>GPU:</strong>{" "}
                    {product.gpu}
                  </p>


                  <p>
                    <strong>RAM:</strong>{" "}
                    {product.ram}
                  </p>


                  <p>
                    <strong>SSD:</strong>{" "}
                    {product.ssd}
                  </p>


                  <p>
                    <strong>Màn hình:</strong>{" "}
                    {product.screen}
                  </p>


                  <p>
                    <strong>Tần số:</strong>{" "}
                    {product.refreshRate} Hz
                  </p>


                  <p>
                    <strong>Cân nặng:</strong>{" "}
                    {product.weight} kg
                  </p>


                  <p className="price">

                    {product.price.toLocaleString(
                      "vi-VN"
                    )}{" "}
                    VNĐ

                  </p>


                  <Link
                    to={`/products/${product.id}`}
                    className="detail-button"
                  >
                    Xem chi tiết
                  </Link>


                  <button>
                    Thêm vào giỏ hàng
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>


      <footer>
        <p>© 2026 Laptop Shop</p>
      </footer>

    </div>
  );
}


function Cart() {

  return (
    <div className="app">

      <header className="header">

        <h1>LAPTOP SHOP</h1>

        <nav>

          <Link to="/">
            Trang chủ
          </Link>

          <Link to="/products">
            Sản phẩm
          </Link>

          <Link to="/cart">
            Giỏ hàng
          </Link>

        </nav>

      </header>


      <main>

        <section className="hero">

          <h2>Giỏ hàng</h2>

          <p>
            Chức năng giỏ hàng sẽ được làm
            ở bước tiếp theo.
          </p>

        </section>

      </main>


      <footer>
        <p>© 2026 Laptop Shop</p>
      </footer>

    </div>
  );
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;