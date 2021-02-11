// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";
import Loading from "./Loading";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
        <AddButton />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
