import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  const { productSlug } = useParams();

  const product = products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
