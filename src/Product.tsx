import "./Product.css";

type ProductProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
};

export default function Product(props: ProductProps) {
  const { id, title, image, price, rating } = props;
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="product image" />

        <button>Add to Cart</button>
      </div>
    </div>
  );
}
