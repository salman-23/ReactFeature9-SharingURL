import { useState } from "react";
import { SubmitButtonStyled } from "../styles";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

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
    dispatch(createProduct(product));
    restForm();
    history.push("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <SubmitButtonStyled type="submit" value="Submit">
          Submit
        </SubmitButtonStyled>
      </form>
    </div>
  );
};

export default ProductForm;
