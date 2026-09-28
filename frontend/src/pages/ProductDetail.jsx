import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot fetch product");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Không thể lấy thông tin sản phẩm");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Đang tải thông tin sản phẩm...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>

        <Link to="/products">
          ← Quay lại danh sách sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail">

      <Link to="/products" className="back-button">
        ← Quay lại danh sách sản phẩm
      </Link>

      <div className="detail-container">

        <div className="detail-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="detail-info">

          <p className="detail-brand">
            {product.brand}
          </p>

          <h1>{product.name}</h1>

          <p className="detail-price">
            {product.price.toLocaleString("vi-VN")} VNĐ
          </p>

          <p className="detail-description">
            {product.description}
          </p>

          <h2>Thông số kỹ thuật</h2>

          <div className="specification">

            <p>
              <strong>CPU:</strong> {product.cpu}
            </p>

            <p>
              <strong>GPU:</strong> {product.gpu}
            </p>

            <p>
              <strong>RAM:</strong> {product.ram}
            </p>

            <p>
              <strong>SSD:</strong> {product.ssd}
            </p>

            <p>
              <strong>Màn hình:</strong> {product.screen}
            </p>

            <p>
              <strong>Tần số quét:</strong>{" "}
              {product.refreshRate} Hz
            </p>

            <p>
              <strong>Trọng lượng:</strong>{" "}
              {product.weight} kg
            </p>

            <p>
              <strong>Danh mục:</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Số lượng:</strong>{" "}
              {product.quantity}
            </p>

          </div>

          <button className="add-cart-button">
            Thêm vào giỏ hàng
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;