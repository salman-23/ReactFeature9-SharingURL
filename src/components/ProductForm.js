import { useState} from "react";
import { SubmitButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch,useSelector } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

const ProductForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { productSlug } = useParams();

  const foundProduct = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
  );

  const [product, setProduct] = useState(
    foundProduct
      ? foundProduct
      : {
          name: "",
          description: "",
          price: 0,
          image: "",
        }
  );

  const handleChnage = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setProduct({
      name: "",
      description: "",
      price: 0,
      image: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundProduct) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    restForm();
    history.push("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{foundProduct ? "Update" : "Create"} Product</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChnage}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChnage}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChnage}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            alt=""
            value={product.image}
            onChange={handleChnage}
          />
        </label>
        {/* <SubmitButtonStyled type="submit" value="Submit">
          Submit
        </SubmitButtonStyled> */}

        <UpdateButtonStyled type="submit">
          {foundProduct ? "Update" : "Create"} Product
        </UpdateButtonStyled>
      </form>
    </div>
  );
};

export default ProductForm;
