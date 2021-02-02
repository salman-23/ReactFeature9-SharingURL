// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {productList}
        <AddButton />
      </ListWrapper>
    </div>
  );
};

export default ProductList;
