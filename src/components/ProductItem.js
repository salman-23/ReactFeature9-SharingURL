import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
