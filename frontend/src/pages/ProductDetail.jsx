import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không tìm thấy sản phẩm");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Đang tải sản phẩm...</h2>;
  }

  if (!product) {
    return (
      <div>
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/">← Quay lại</Link>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>

          <p>
            <strong>Hãng:</strong> {product.brand}
          </p>

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
            <strong>Tần số quét:</strong> {product.refreshRate} Hz
          </p>

          <p>
            <strong>Trọng lượng:</strong> {product.weight} kg
          </p>

          <p>
            <strong>Danh mục:</strong> {product.category}
          </p>

          <p>
            <strong>Số lượng còn:</strong> {product.quantity}
          </p>

          <p>{product.description}</p>

          <h2 className="price">
            {product.price.toLocaleString("vi-VN")} VNĐ
          </h2>

          <button onClick={() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm sản phẩm vào giỏ hàng!");
  }}>
  Thêm vào giỏ hàng
</button>
        </div>
      </div>
    </div>  
  );
}

export default ProductDetail;